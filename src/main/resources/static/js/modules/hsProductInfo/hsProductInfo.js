$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsProductInfo/queryHsProductInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						type: 'checkbox',
						fixed: 'left',
					},
					{
						field: 'productId', //字段名
						title: '产品编号', //标题
						width: 200,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'productName', //字段名
						title: '产品名称', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'price', //字段名
						title: '单价', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'group', //字段名
						title: '分组', //标题
						width: 110,
						templet: function(d) {
							if (d.group == 0) {
								return 'vip'
							} else if (d.group == 1) {
								return '计次'
							} else {
								return '未知'
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'priority', //字段名
						title: '优先级(越大优先级越高)', //标题
						width: 200,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'number', //字段名
						title: '产品属性', //标题
						width: 120,
						templet: function(d) {
							if (d.group == 0) {
								return d.number + "月";
							} else {
								return d.number + "次";
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'group', //字段名
						title: '分组[0:vip,1:计次]', //标题
						width: 200,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'commet', //字段名
						title: '描述', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'createTime', //字段名
						title: '创建时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'updateTime', //字段名
						title: '更新时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'versionOptimizedLock', //字段名
						title: '乐观锁', //标题
						width: 200,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}
				]
			]
		});
	})
	//下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(group)', function(data) {
			vm.q.group = data.value;
		});
		form.on('select(hsProductInfoGroup)', function(data) {
			vm.hsProductInfo.group = data.value;
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
})

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			productName: '',
			group: '',
			startTime: '',
			endTime: ''
		},
		showList: true,
		title: null,
		hsProductInfo: {
			productId: null,
			productName: null,
			price: null,
			priority: null,
			number: null,
			group: '',
			commet: null,
			createTime: null,
			updateTime: null,
			versionOptimizedLock: null
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
			vm.hsProductInfo = {
				productId: null,
				productName: null,
				price: null,
				priority: null,
				number: null,
				group: '',
				commet: null,
				createTime: null,
				updateTime: null,
				versionOptimizedLock: null
			};
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
			var url = vm.hsProductInfo.productId ? "hsProductInfo/editHsProductInfo" : "hsProductInfo/saveHsProductInfo";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.hsProductInfo),
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
					return false;
				});
			});
		},

		del: function(event) {
			var productIds = getSelectedMoreRow();
			if (productIds == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "hsProductInfo/deleteHsProductInfoList",
					contentType: "application/json",
					data: JSON.stringify(productIds),
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
				url: baseURL + "hsProductInfo/queryHsProductInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.hsProductInfo = r.resultList[0];
						vm.$nextTick(function() {
							layui.use('form', function() {
								var form = layui.form;
								form.render();
							});
						});
					} else {
						alert(r.msg);
					}
				}
			});
		},
		reload: function(event) {
			$('#hsProductInfoGroup .layui-unselect').val('');
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
