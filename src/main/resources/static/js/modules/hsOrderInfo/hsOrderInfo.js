$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-120',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsOrderInfo/queryHsOrderInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						field: 'orderId', //字段名
						title: '订单编号', //标题
						width: 300,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'channelOrderId', //字段名
						title: '订单流水号', //标题
						width: 260,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'username', //字段名
						title: '用户名称', //标题
						width: 130,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'productName', //字段名
						title: '产品名', //标题
						width: 110,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'number', //字段名
						title: '产品属性', //标题
						width: 100,
						templet: function(d) {
							if (d.group == 0) {
								return d.number + '月';
							} else if (d.group == 1) {
								return d.number + '次';
							} else {
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'price', //字段名
						title: '产品价格', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'group', //字段名
						title: '产品类型', //标题
						width: 130,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					},
					// {
					// 	field: 'discountType', //字段名
					// 	title: '优惠类型', //标题
					// 	width: 100,
					// 	templet: function(d) {
					// 		if (d.discountType == 0) {
					// 			return '代金券';
					// 		} else if (d.group == 1) {
					// 			return '折扣';
					// 		} else if (d.group == 2) {
					// 			return '返现';
					// 		} else if (d.group == 3) {
					// 			return '满减';
					// 		} else {
					// 			return '无优惠';
					// 		}
					// 	},
					// 	sort: true //是否允许排序 默认：false
					// 	//fixed: 'left' //固定列
					// }, {
					// 	field: 'discountPrice', //字段名
					// 	title: '优惠金额', //标题
					// 	width: 100,
					// 	sort: true //是否允许排序 默认：false
					// 	//fixed: 'left' //固定列
					// }, 
					{
						field: 'totalAmt', //字段名
						title: '订单金额', //标题
						width: 100,
						templet: function(d) {
							return (d.totalAmt - d.discountPrice).toFixed(2);
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'refundAmt', //字段名
						title: '已退款金额', //标题
						width: 120,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'paymentType', //字段名
						title: '支付方式', //标题
						width: 100,
						templet: function(d) {
							if (d.paymentType == 0) {
								return '<span class="layui-badge layui-bg-green">微信</span>'
							} else if (d.paymentType == 1) {
								return '<span class="layui-badge layui-bg-orange">支付宝</span>'
							} else if (d.paymentType == 2) {
								return '<span class="layui-badge layui-bg-blue">余额</span>'
							} else if (d.paymentType == 3) {
								return '<span class="layui-badge">活动</span>'
							} else {
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'state', //字段名
						title: '支付状态', //标题
						width: 100,
						templet: function(d) {
							if (d.state == 1) {
								return '<span class="layui-badge layui-bg-orange">待支付</span>'
							} else if (d.state == 2) {
								return '<span class="layui-badge layui-bg-green">已支付</span>'
							} else if (d.state == 6) {
								return '<span class="layui-badge layui-bg-blue">退款中</span>'
							} else if (d.state == 7) {
								return '<span class="layui-badge">已退款</span>'
							} else {
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'transType', //字段名
						title: '交易类型', //标题
						width: 120,
						templet: function(d) {
							if (d.transType == 0) {
								return '<span class="layui-badge layui-bg-green">调账</span>'
							} else if (d.transType == 1) {
								return '<span class="layui-badge">充值</span>'
							} else {
								return '未知';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'createTime', //字段名
						title: '创建时间', //标题
						width: 200,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'beginTime', //字段名
						title: '下单时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'notityFinishTime', //字段名
						title: '支付时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}
				]
			]
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
		form.on('select(paymentType)', function(data) {
			vm.q.paymentType = data.value;
		});
		form.on('select(state)', function(data) {
			vm.q.state = data.value;
		});
		form.on('select(transType)', function(data) {
			vm.q.transType = data.value;
		});
	});
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			orderId: '',
			channelOrderId: '',
			username: '',
			paymentType: '',
			state: '',
			startTime: '',
			endTime: '',
			transType: ''
		},
		showList: true,
		title: null,
		hsOrderInfo: {
			username: null,
			state: null,
			orderId: null,
			paymentType: null,
			finishTime: null,
			number: null,
			price: null,
			productName: null,
			group: null
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
			vm.hsOrderInfo = {};
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
			var url = vm.hsOrderInfo.username ? "hsOrderInfo/editHsOrderInfo" : "hsOrderInfo/saveHsOrderInfo";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.hsOrderInfo),
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
			var usernames = getSelectedMoreRow();
			if (usernames == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "hsOrderInfo/deleteHsOrderInfoList",
					contentType: "application/json",
					data: JSON.stringify(usernames),
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
				url: baseURL + "hsOrderInfo/queryHsOrderInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.hsOrderInfo = r.resultList[0];
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
	}
});
