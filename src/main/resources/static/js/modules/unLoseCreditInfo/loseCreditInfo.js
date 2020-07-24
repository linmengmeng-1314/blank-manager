$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'unLoseCreditInfo/queryLoseCreditInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'fkAuthorizationId', //字段名
						title: '账户ID', //标题
						width: 200,
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'entityName', //字段名
						title: '姓名或公司名称', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'entityNumber', //字段名
						title: '身份证号(个人),企业(企业号)', //标题
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
						field: 'sex', //字段名
						title: '性别', //标题
						width: 80,
						templet: '<div>{{sexType(d.sex,)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'age', //字段名
						title: '年龄', //标题
						width: 80,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'legalName', //字段名
						title: '法人名字', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'entityType', //字段名
						title: '主体类型', //标题
						width: 200,
						templet: function(d) {
							if (d.entityType == 0) {
								return '个人'
							} else if (d.entityType == 1) {
								return '企业'
							} else {
								return ''
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'caseCode', //字段名
						title: '案号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'res', //字段名
						title: '状态码', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'lostType', //字段名
						title: '失信类型', //标题
						width: 200,
						templet: function(d) {
							if (d.lostType == 0) {
								return '失信被执行人'
							} else if (d.lostType == 1) {
								return '被执行人'
							} else {
								return ''
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'regDate', //字段名
						title: '立案时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'publishDate', //字段名
						title: '发布时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'performance', //字段名
						title: '履行情况', //标题
						width: 200,
						templet: function(d) {
							if (d.performance == 0) {
								return '全部已履行'
							} else if (d.performance == 1) {
								return '部分履行'
							} else if (d.performance == 2) {
								return '全部未履行'
							} else {
								return ''
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'courtName', //字段名
						title: '法院', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'areaName', //字段名
						title: '省份', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'disruptTypeCommet', //字段名
						title: '失信类型描述', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'gistUnit', //字段名
						title: '做出执行依据单位', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'gistNumber', //字段名
						title: '执行依据文号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'duty', //字段名
						title: '生效法律文书确定的义务', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'execMoney', //字段名
						title: '执行标的', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'caseState', //字段名
						title: '案件状态', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'state', //字段名
						title: '状态', //标题
						width: 90,
						templet: '<div>{{chargerState(d.state,)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'resultCode', //字段名
						title: '响应码', //标题
						width: 200,
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
						width: 165,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'verifyBeginTime', //字段名
						title: '开始时间', //标题
						width: 165,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'verifyEndTime', //字段名
						title: '结束时间', //标题
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
						field: 'updateTime', //字段名
						title: '更新时间', //标题
						width: 165,
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
	//日期
	layui.use('laydate', function() {
		var laydate = layui.laydate;
		//日期时间选择器
		laydate.render({
			elem: '#startTime',
			type: 'datetime',
			done: function(value) {
				vm.loseCreditInfo.startTime = value
			}
		});
		laydate.render({
			elem: '#endTime',
			type: 'datetime',
			done: function(value) {
				vm.loseCreditInfo.endTime = value
			}
		});
	})
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			entityName: '',
			unVerifyId: '',
			busVerifyId: '',
			channelVerifyId: ''
		},
		showList: true,
		title: null,
		loseCreditInfo: {
			id: null,
			fkAuthorizationId: null,
			unVerifyId: null,
			busVerifyId: null,
			channelVerifyId: null,
			entityName: null,
			sex: null,
			age: null,
			entityNumber: null,
			legalName: null,
			entityType: null,
			caseCode: null,
			res: null,
			lostType: null,
			regDate: null,
			publishDate: null,
			performance: null,
			courtName: null,
			areaName: null,
			disruptTypeCommet: null,
			gistUnit: null,
			gistNumber: null,
			duty: null,
			execMoney: null,
			caseState: null,
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
			vm.loseCreditInfo = {};
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
			var url = vm.loseCreditInfo.id ? "unLoseCreditInfo/editLoseCreditInfo" : "unLoseCreditInfo/saveLoseCreditInfo";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.loseCreditInfo),
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
					url: baseURL + "unLoseCreditInfo/deleteLoseCreditInfoList",
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
				url: baseURL + "unLoseCreditInfo/queryLoseCreditInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.loseCreditInfo = r.resultList[0];
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
