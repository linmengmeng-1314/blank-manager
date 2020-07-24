$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'unSocialSecurityInfo/querySocialSecurityInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						width: 90,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'cardno', //字段名
						title: '身份证号', //标题
						width: 200,
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
						field: 'incomeLevel', //字段名
						title: '近半年平均薪资评估 ', //标题
						width: 200,
						templet:function(d){
							if (d.incomeLevel == 'A') {
								return '无法预测';
							}else if (d.incomeLevel == 'B') {
								return '(0,1500]元';
							}else if (d.incomeLevel == 'C') {
								return '(1500,3000]元';
							}else if (d.incomeLevel == 'D') {
								return '(3000,4500]元';
							}else if (d.incomeLevel == 'E') {
								return '(4500,6000]元';
							}else if (d.incomeLevel == 'F') {
								return '(6000,8000]元';
							}else if (d.incomeLevel == 'G') {
								return '(8000,10000]元';
							}else if (d.incomeLevel == 'H') {
								return '(10000,13000]元';
							}else if (d.incomeLevel == 'I') {
								return '(13000,16000]元';
							}else if (d.incomeLevel == 'J') {
								return '(16000,20000]元';
							}else if (d.incomeLevel == 'K') {
								return '20000+元';
							}else{
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'stabilityLevel', //字段名
						title: '近两年内工作月数评估 ', //标题
						width: 200,
						templet:function(d){
							if (d.stabilityLevel == 'A') {
								return '无法预测';
							}else if (d.stabilityLevel == 'B') {
								return '(0,6]月';
							}else if (d.stabilityLevel == 'C') {
								return '(6,12]月';
							}else if (d.stabilityLevel == 'D') {
								return '(12,18]月';
							}else if (d.stabilityLevel == 'E') {
								return '(18,24]月';
							}else if (d.stabilityLevel == 'F') {
								return '24月';
							}else{
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'creditLevel', //字段名
						title: '累计工作月数评估', //标题
						width: 200,
						templet:function(d){
							if (d.creditLevel == 'A') {
								return '无法预测';
							}else if (d.creditLevel == 'B') {
								return '(0,6]月';
							}else if (d.creditLevel == 'C') {
								return '(6,12]月';
							}else if (d.creditLevel == 'D') {
								return '(12,24]月';
							}else if (d.creditLevel == 'E') {
								return '(24,36]月';
							}else if (d.creditLevel == 'F') {
								return '(36,48]月';
							}else if (d.creditLevel == 'G') {
								return '(48,60]月';
							}else if (d.creditLevel == 'H') {
								return '(60,84]月';
							}else if (d.creditLevel == 'I') {
								return '(84,120]月';
							}else if (d.creditLevel == 'J') {
								return '(120,180]月';
							}else if (d.creditLevel == 'K') {
								return '180+月';
							}else{
								return '';
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'version', //字段名
						title: '版本号 ', //标题
						width: 200,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'result', //字段名
						title: '查询结果 ', //标题
						width: 200,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'resultText', //字段名
						title: '查询结果文本表述 ', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'state', //字段名
						title: '状态', //标题
						width: 80,
						templet: '<div>{{chargerState(d.state)}}</div>',
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
						width: 120,
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
					},  {
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
				vm.socialSecurityInfo.startTime = value
			}
		});
		laydate.render({
			elem: '#endTime',
			type: 'datetime',
			done: function(value) {
				vm.socialSecurityInfo.endTime = value
			}
		});
	})
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			cardno: '',
			verifyId: '',
			busVerifyId: ''
		},
		showList: true,
		title: null,
		socialSecurityInfo: {
			id: null,
			fkAuthorizationId: null,
			verifyId: null,
			busVerifyId: null,
			channelVerifyId: null,
			name: null,
			cardno: null,
			incomeLevel: null,
			stabilityLevel: null,
			creditLevel: null,
			version: null,
			result: null,
			resultText: null,
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
			vm.socialSecurityInfo = {};
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
			var url = vm.socialSecurityInfo.id ? "unSocialSecurityInfo/editSocialSecurityInfo" :
				"unSocialSecurityInfo/saveSocialSecurityInfo";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.socialSecurityInfo),
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
					url: baseURL + "unSocialSecurityInfo/deleteSocialSecurityInfoList",
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
				url: baseURL + "unSocialSecurityInfo/querySocialSecurityInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.socialSecurityInfo = r.resultList[0];
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
