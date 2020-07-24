$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'unKeyInfo/queryKeyInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						field: 'id', //字段名
						title: '主键', //标题
						width: 200,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'fkAuthorizationId', //字段名
						title: '账户ID', //标题
						width: 200,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'name', //字段名
						title: '姓名', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'cardno', //字段名
						title: '身份证号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'unVerifyId', //字段名
						title: '流水号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'busVerifyId', //字段名
						title: '业务流水号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'channelVerifyId', //字段名
						title: '渠道流水号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'channelName', //字段名
						title: '渠道商', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'commet', //字段名
						title: '产品名', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'badDetail', //字段名
						title: '结果详情', //标题
						width: 200,
						templet: function(d) {
							if (!d.badDetail) {
								return '未命中';
							} else {
								var list = d.badDetail.split(',');
								var detail;
								var detailStr = '';
								for (var i = 0; i < list.length; i++) {
									detail = list[i];
									if (detail == '') {
										continue;
									} else if (detail == '1') {
										detailStr += '在逃人员 ';
									} else if (detail == '2') {
										detailStr += '吸毒人员 ';
									} else if (detail == '3') {
										detailStr += '涉毒人员 ';
									} else if (detail == '4') {
										detailStr += '修正人员 ';
									} else if (detail == '5') {
										detailStr += '违法前科 ';
									} else if (detail == '6') {
										detailStr += '严重前科 ';
									} else if (detail == '7') {
										detailStr += '恶性前科 ';
									} else if (detail == '8') {
										detailStr += '经济前科 ';
									} else if (detail == '9') {
										detailStr += '涉毒前科 ';
									}
								}
								return detailStr;
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'badCnt', //字段名
						title: '前科数量', //标题
						width: 200,
						templet: function(d) {
							if (d.badCnt == 0) {
								return '无前科';
							} else if (d.badCnt == 2) {
								return '包含2-5（不包含）个前科事件';
							} else if (d.badCnt == 5) {
								return '包含5及5个以上的前科事件';
							} else {
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'newEstDate', //字段名
						title: '前科时间',
						width: 200,
						templet: function(d) {
							if (d.newEstDate == 0) {
								return '无最近前科时间';
							} else if (d.newEstDate == 1) {
								return '0.25 年(即 3个月)(不含)以内';
							} else if (d.newEstDate == 2) {
								return '0.25 年(3 个月)以上，0.5 年(即 6 个月)(不含)以内';
							} else if (d.newEstDate == 3) {
								return '0.5 年(即 6 个月)以上，1 年(不含)以内';
							} else if (d.newEstDate == 4) {
								return '1 年以上，2年(不含)以内';
							} else if (d.newEstDate == 5) {
								return '2 年以上，5年(不含)以内';
							} else if (d.newEstDate == 6) {
								return '5 年以上，10 年(不含)以内';
							} else if (d.newEstDate == 7) {
								return '10 年以上';
							} else {
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'state', //字段名
						title: '是否计费', //标题
						width: 100,
						templet: '<div>{{chargerState(d.state,)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'resultCode', //字段名
						title: '响应码', //标题
						width: 200,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'resultMsg', //字段名
						title: '响应内容', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'notityStatus', //字段名
						title: '通知状态', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'notityFinishTime', //字段名
						title: '通知时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'verifyBeginTime', //字段名
						title: '开始时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'verifyEndTime', //字段名
						title: '结束时间', //标题
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
						hide: true, //是否初始隐藏列
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
			elem: '#startTime',
			type: 'datetime',
			done: function(value) {
				vm.keyInfo.startTime = value
			}
		});
		laydate.render({
			elem: '#endTime',
			type: 'datetime',
			done: function(value) {
				vm.keyInfo.endTime = value
			}
		});
	})
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			cardno: '',
			unVerifyId: '',
			busVerifyId: '',
			channelVerifyId: ''
		},
		showList: true,
		title: null,
		keyInfo: {
			id: null,
			fkAuthorizationId: null,
			unVerifyId: null,
			busVerifyId: null,
			channelVerifyId: null,
			name: null,
			cardno: null,
			badDetail: null,
			badCnt: null,
			newEstDate: null,
			state: null,
			resultCode: null,
			resultMsg: null,
			notityStatus: null,
			notityFinishTime: null,
			verifyBeginTime: null,
			verifyEndTime: null,
			fkChannelId: null,
			fkProductId: null,
			commet: null,
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
			vm.keyInfo = {};
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
			var url = vm.keyInfo.id ? "unKeyInfo/editKeyInfo" : "unKeyInfo/saveKeyInfo";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.keyInfo),
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
					url: baseURL + "unKeyInfo/deleteKeyInfoList",
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
				url: baseURL + "unKeyInfo/queryKeyInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.keyInfo = r.resultList[0];
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
