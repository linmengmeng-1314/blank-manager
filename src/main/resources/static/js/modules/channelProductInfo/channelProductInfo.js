$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'channelProductInfo/queryChannelProductInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						field: 'fkChannelId', //字段名
						title: '渠道编号', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'fkProductId', //字段名
						title: '产品编号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'purchasePrice', //字段名
						title: '进价价格', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'sellingPrice', //字段名
						title: '卖价价格', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'state', //字段名
						title: '状态', //标题
						width: 80,
						hide: true, //是否初始隐藏列
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
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			commet: '',
			fkChannelId: ''
		},
		showList: true,
		title: null,
		channelProductInfo: {
			id: null,
			fkChannelId: null,
			fkProductId: null,
			purchasePrice: null,
			sellingPrice: null,
			state: null,
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
			vm.channelProductInfo = {};
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
			var url = vm.channelProductInfo.id ? "channelProductInfo/editChannelProductInfo" :
				"channelProductInfo/saveChannelProductInfo";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.channelProductInfo),
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
					url: baseURL + "channelProductInfo/deleteChannelProductInfoList",
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
				url: baseURL + "channelProductInfo/queryChannelProductInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.channelProductInfo = r.resultList[0];
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
