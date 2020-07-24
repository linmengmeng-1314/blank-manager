$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'channelInfo/queryChannelInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						field: 'channelId', //字段名
						title: '渠道编号', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'channelName', //字段名
						title: '渠道名称', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'channelUrl', //字段名
						title: '渠道url', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'accessKeyId', //字段名
						title: '身份凭证', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'accessPassword', //字段名
						title: '凭证密码', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'accessKeySecret', //字段名
						title: '身份密钥', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'requestType', //字段名
						title: '请求类型', //标题
						width: 100,
						templet: '<div>{{requestType(d.requestType)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'publicKey', //字段名
						title: '公钥', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'privateKey', //字段名
						title: '私钥', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'status', //字段名
						title: '状态', //标题
						width: 80,
						templet: '<div>{{apiStatus(d.status)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'comment', //字段名
						title: '描述', //标题
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
					}
				]
			]
		});
	});

	layui.use('form', function() {
		var form = layui.form;
		form.on('select(requestType)', function(data) {
			vm.q.requestType = data.value;
		});
		form.on('radio(radioChange)', function(data) {
			vm.channelInfo.status = data.value;
		});
		form.on('select(channelInfoRequestType)', function(data) {
			vm.channelInfo.requestType = data.value;
		});
	});
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			channelName: '',
			requestType: ''
		},
		showList: true,
		title: null,
		channelInfo: {
			id: null,
			channelId: null,
			channelName: null,
			channelUrl: null,
			accessKeyId: null,
			accessPassword: null,
			accessKeySecret: null,
			requestType: '',
			publicKey: null,
			privateKey: null,
			status: 0,
			comment: null,
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
			vm.channelInfo = {
				id: null,
				channelId: null,
				channelName: null,
				channelUrl: null,
				accessKeyId: null,
				accessPassword: null,
				accessKeySecret: null,
				requestType: '',
				publicKey: null,
				privateKey: null,
				status: 0,
				comment: null,
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
			var url = vm.channelInfo.id ? "channelInfo/editChannelInfo" : "channelInfo/saveChannelInfo";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.channelInfo),
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
			var ids = getSelectedMoreRow();
			if (ids == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "channelInfo/deleteChannelInfoList",
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
				url: baseURL + "channelInfo/queryChannelInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.channelInfo = r.resultList[0];
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
			$('#channelInfoRequestType .layui-unselect').val('');
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
