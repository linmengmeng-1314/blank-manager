$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-100',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'orderDetail/queryOrderDetailList', //?page=1&limit=10（该参数可通过 request 自定义）
			where: {
				fkCandidateId: localStorage.getItem('id')
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
					field: 'fkOrderId', //字段名
					title: '流水号', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkCandidateId', //字段名
					title: '候选人id', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkProductId', //字段名
					title: '产品编号', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'channelVerifyId', //字段名
					title: '渠道流水号', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe1', //字段名
					title: '描述一', //标题
					width: 100,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail1', //字段名
					title: '姓名', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe2', //字段名
					title: '描述二', //标题
					width: 100,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail2', //字段名
					title: '身份证号', //标题
					width: 175,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe3', //字段名
					title: '描述三', //标题
					width: 100,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail3', //字段名
					title: '手机号', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe4', //字段名
					title: '数据条数', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail4', //字段名
					title: '查询结果', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe5', //字段名
					title: '描述五', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail5', //字段名
					title: '失败原因', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe6', //字段名
					title: '描述六', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail6', //字段名
					title: '详情六', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe7', //字段名
					title: '描述七', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail7', //字段名
					title: '详情七', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe8', //字段名
					title: '描述八', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail8', //字段名
					title: '详情八', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe9', //字段名
					title: '描述九', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail9', //字段名
					title: '详情九', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detail10', //字段名
					title: '背调项目', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'describe10', //字段名
					title: '背调公司', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'callTime', //字段名
					title: '调用时间', //标题
					width: 165,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '创建时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'finishTime', //字段名
					title: '完成时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'updateTime', //字段名
					title: '更新时间', //标题
					width: 165,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'sum', //字段名
					title: '使用字段数量', //标题
					width: 130,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '状态', //标题
					width: 90,
					templet: function(d) {
						if (d.state == 0) {
							return '<span class="layui-badge layui-bg-orange">待处理</span>'
						} else if (d.state == 1) {
							return '<span class="layui-badge layui-bg-green">已完成</span>'
						} else {
							return '<span class="layui-badge">调用异常</span>'
						}
					},
					sort: true, //是否允许排序 默认：false
					fixed: 'right' //固定列
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
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			fkCandidateId: '',
			detail1: '',
			detail2: '',
			detail3: '',
			detail10: '',
			describe10: '',
			startTime: '',
			endTime: ''
		},
		showList: true,
		title: null,
		orderDetail: {
			id: null,
			fkOrderId: null,
			fkCandidateId: null,
			fkProductId: null,
			channelVerifyId: null,
			callTime: null,
			finishTime: null,
			state: null,
			sum: null,
			describe1: null,
			detail1: null,
			describe2: null,
			detail2: null,
			describe3: null,
			detail3: null,
			describe4: null,
			detail4: null,
			describe5: null,
			detail5: null,
			describe6: null,
			detail6: null,
			describe7: null,
			detail7: null,
			describe8: null,
			detail8: null,
			describe9: null,
			detail9: null,
			describe10: null,
			detail10: null,
			createTime: null,
			updateTime: null,
			versionOptimizedLock: null
		}
	},
	methods: {
		query: function() {
			vm.reload();
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.orderDetail = {};
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
			var url = vm.orderDetail.id ? "orderDetail/editOrderDetail" : "orderDetail/saveOrderDetail";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.orderDetail),
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
					url: baseURL + "orderDetail/deleteOrderDetailList",
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
				url: baseURL + "orderDetail/queryOrderDetailList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.orderDetail = r.resultList[0];
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
		self.q.fkCandidateId = localStorage.getItem('id');
	}
});
