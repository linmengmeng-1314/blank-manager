$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-150',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'backOrder/queryBackOrderList', //?page=1&limit=10（该参数可通过 request 自定义）
			//where: {token: 'sasasas', id: 123}, //接口的其它参数
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
					width: 175,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'orderId', //字段名
					title: '订单编号', //标题
					width: 175,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'companyName', //字段名
					title: '企业名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'uname', //字段名
					title: '联系人', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'umobile', //字段名
					title: '联系电话', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'name', //字段名
					title: '被调人姓名', //标题
					width: 110,
					templet: '#bdrName',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'mobile', //字段名
					title: '手机号', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'cardno', //字段名
					title: '身份证号', //标题
					width: 175,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'amt', //字段名
					title: '金额', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'refundAmt', //字段名
					title: '已退款金额', //标题
					width: 110,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'discountPrice', //字段名
					title: '优惠价格', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'transType', //字段名
					title: '交易类型', //标题
					width: 100,
					templet: '<div>{{transType(d.transType)}}</div>',
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
					field: 'fkDeptId', //字段名
					title: '内部部门', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '状态', //标题
					width: 90,
					templet: '<div>{{reportStatus(d.state)}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'comment', //字段名
					title: '套餐名称', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'finishTime', //字段名
					title: '授权时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '创建时间', //标题
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
				}, {
					field: 'channelOrderId', //字段名
					title: '渠道流水号', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'urlSuffix', //字段名
					title: '授权url', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'ip', //字段名
					title: '授权ip', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					fixed: 'right',
					title: '操作',
					toolbar: '#barDemo',
					width: 80
				}]
			]
		});

		//监听行工具事件
		table.on('tool(test)', function(obj) {
			var data = obj.data;
			if (obj.event === 'detail') {
				detail(data)
			}
		});
	})
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
		form.on('select(transType)', function(data) {
			vm.q.transType = data.value;
		});
		form.on('select(paymentType)', function(data) {
			vm.q.paymentType = data.value;
		});
		form.on('select(state)', function(data) {
			vm.q.state = data.value;
		});
	});
})
//查看详情
function detail(data) {
	vm.detailData = data;
	layer.open({
		type: 1,
		title: '查看详情',
		area: ['560px', '450px'], //宽高
		content: $('#detailBox')
	});
}
//余额
function bdrName(id) {
	localStorage.setItem("id", id);
	parent.location.href = baseURL + '#modules/orderDetail/orderDetail.html';
}

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			orderId: '',
			channelOrderId: '',
			name: '',
			mobile: '',
			cardno: '',
			startTime: '',
			endTime: '',
			transType: '',
			paymentType: '',
			state: ''
		},
		detailData: {

		},
		showList: true,
		title: null,
		backOrder: {
			id: null,
			name: null,
			mobile: null,
			cardno: null,
			urlSuffix: null,
			ip: null,
			amt: null,
			paymentType: null,
			fkDeptId: null,
			state: null,
			comment: null,
			finishTime: null,
			createTime: null,
			versionOptimizedLock: null,
			channelOrderId: null,
			orderId: null,
			refundAmt: null,
			discountPrice: null,
			transType: null
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
			vm.backOrder = {};
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
			var url = vm.backOrder.id ? "backOrder/editBackOrder" : "backOrder/saveBackOrder";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.backOrder),
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
					url: baseURL + "backOrder/deleteBackOrderList",
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
				url: baseURL + "backOrder/queryBackOrderList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.backOrder = r.resultList[0];
					} else {
						alert(r.msg);
					}
				}
			});
		},
		reload: function(event) {
			if (vm.q.startTime && vm.q.endTime) {
				if (vm.q.startTime > vm.q.endTime) {
					alert("结束时间不能小于开始时间！");
					return;
				}
			}
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
	}
});
