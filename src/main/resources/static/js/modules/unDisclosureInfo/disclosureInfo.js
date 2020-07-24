$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'unDisclosureInfo/queryDisclosureInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
				},{
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
				},{
					field: 'name', //字段名
					title: '姓名', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'cardno', //字段名
					title: '身份证号', //标题
					width: 175,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'verifyId', //字段名
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
					title: '产品类型', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'res', //字段名
					title: '查询结果状态码[1:查询成功，有数据 , 2:查询成功，无数据 ]', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'description', //字段名
					title: '状态码描述', //标题
					width: 150,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'count', //字段名
					title: '执行总次数', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'totalAmount', //字段名
					title: '执行总金额(元)', //标题
					width: 135,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'courtName', //字段名
					title: '法院名称 ', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fillingDate', //字段名
					title: '立案时间 ', //标题
					width: 110,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'releaseTime', //字段名
					title: '发布时间', //标题
					width: 110,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'executeDarget', //字段名
					title: '执行金额(元)', //标题
					width: 135,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'caseInfo', //字段名
					title: '案情详情 ', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '状态', //标题
					width: 90,
					templet: function(d) {
						if (d.state == 0) {
							return '计费'
						} else if (d.state == 1) {
							return '不计费'
						} else {
							return '处理中'
						}
					},
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
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'notityStatus', //字段名
					title: '通知状态', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'notityFinishTime', //字段名
					title: '通知时间', //标题
					width: 165,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'verifyBeginTime', //字段名
					title: '订单开始时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'verifyEndTime', //字段名
					title: '订单结束时间', //标题
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
					hide: true, //是否初始隐藏列
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
	})
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			name: '',
			verifyId: '',
			busVerifyId: ''
		},
		showList: true,
		title: null,
		disclosureInfo: {
			id: null,
			fkAuthorizationId: null,
			verifyId: null,
			busVerifyId: null,
			channelVerifyId: null,
			name: null,
			cardno: null,
			res: null,
			description: null,
			count: null,
			totalAmount: null,
			courtName: null,
			fillingDate: null,
			releaseTime: null,
			executeDarget: null,
			caseInfo: null,
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
			vm.disclosureInfo = {};
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
			var url = vm.disclosureInfo.id ? "unDisclosureInfo/editDisclosureInfo" : "unDisclosureInfo/saveDisclosureInfo";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.disclosureInfo),
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
					url: baseURL + "unDisclosureInfo/deleteDisclosureInfoList",
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
				url: baseURL + "unDisclosureInfo/queryDisclosureInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.disclosureInfo = r.resultList[0];
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
