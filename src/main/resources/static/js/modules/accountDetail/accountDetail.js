$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-100',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'accountDetail/queryAccountDetailList', //?page=1&limit=10（该参数可通过 request 自定义）
			where: {
				companyName: localStorage.getItem('companyName')
			}, //接口的其它参数
			request: {
				pageName: 'page', //页码的参数名称，默认：page
				limitName: 'rows', //每页数据量的参数名，默认：limit
			},
			response: {
				statusName: 'code', //规定数据状态的字段名称，默认：code
				statusCode: 200, //规定成功的状态码，默认：0
				msgName: 'msg', //规定状态信息的字段名称，默认：msg
				countName: 'count', //规定数据总数的字段名称，默认：count
				dataName: 'resultList', //规定数据列表的字段名称，默认：data
			},
			page: true, //是否分页
			limit: 10, //每页显示的条数
			limits: [10, 20, 30], //每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。
			cols: [
				[{
					field: 'id', //字段名
					title: '主键', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkAccountId', //字段名
					title: '账户表id', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkOrderId', //字段名
					title: '订单编号', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkDeptId', //字段名
					title: '内部部门', //标题
					width: 110,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'companyName', //字段名
					title: '公司名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'amt', //字段名
					title: '余额', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'type', //字段名
					title: '交易类型', //标题
					width: 100,
					templet: '<div>{{transType(d.type)}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'paymentType', //字段名
					title: '支付方式', //标题
					width: 100,
					templet: '<div>{{paymentType(d.paymentType)}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'commet', //字段名
					title: '用途描述', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '创建时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'updateTime', //字段名
					title: '更新时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'versionOptimizedLock', //字段名
					title: '乐观锁', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}]
			]
		});
	});
	//日期
	layui.use('laydate', function() {
		var laydate = layui.laydate;
		//日期时间选择器
		laydate.render({
			elem: '#queryStartTime',
			type: 'datetime',
			done: function(value) {
				vm.q.startTime = value
			}
		});
		laydate.render({
			elem: '#queryEndTime',
			type: 'datetime',
			done: function(value) {
				vm.q.endTime = value
			}
		});
	});
	//下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(type)', function(data) {
			vm.q.type = data.value;
		});
		form.on('select(paymentType)', function(data) {
			vm.q.paymentType = data.value;
		});
	});
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			fkOrderId: '',
			companyName: '',
			type: '',
			startTime: '',
			endTime: '',
			paymentType: ''
		},
		showList: true,
		title: null,
		accountDetail: {
			id: null,
			fkAccountId: null,
			fkOrderId: null,
			fkDeptId: null,
			amt: null,
			type: null,
			paymentType: null,
			commet: null,
			createTime: null,
			updateTime: null,
			versionOptimizedLock: null,
			companyName: null
		}
	},
	methods: {
		onSubmit: function() {
			return false;
		},
		query: function() {
			vm.reload();
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.accountDetail = {};
		},
		update: function(event) {
			var rowData = getSelectedOneRow();
			if (rowData == undefined) {
				return;
			}
			vm.showList = false;
			vm.title = "修改";
			vm.getInfo(rowData)
		},
		saveOrUpdate: function(event) {
			var url = vm.accountDetail.id ? "accountDetail/editAccountDetail" : "accountDetail/saveAccountDetail";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.accountDetail),
				success: function(r) {
					if (r.code == 200) {
						alert(r.msg, function(index) {
							vm.reload();
						});
					} else {
						alert(r.msg);
					}
				}
			});
		},
		del: function(event) {
			var ids = getSelectedMoreRow();
			if (ids == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "accountDetail/deleteAccountDetailList",
					contentType: "application/json",
					data: JSON.stringify(ids),
					success: function(r) {
						if (r.code == 200) {
							alert(r.msg, function(index) {
								vm.reload()
							});
						} else {
							alert(r.msg);
						}
					}
				});
			});
		},
		getInfo: function(rowData) {
			$.ajax({
				type: "POST",
				url: baseURL + "accountDetail/queryAccountDetailList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.accountDetail = r.resultList[0];
					} else {
						alert(r.msg);
					}
				}
			});
		},
		reload: function(event) {
			vm.showList = true;
			layui.use('table', function() {
				var table = layui.table;
				table.reload('tableId', {
					where: vm.q,
					page: {
						curr: 1 //重新从第 1 页开始
					}
				});
			})
		}
	},
	created: function() {
		var self = this;
		self.q.companyName = localStorage.getItem('companyName');
	}
});
