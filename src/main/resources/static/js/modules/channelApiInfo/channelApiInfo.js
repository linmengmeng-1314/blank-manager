$(function() {
	//表格
	layui.use(['table', 'form'], function() {
		var table = layui.table;
		var form = layui.form;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'channelProductApi/queryChannelProductApiList', //?page=1&limit=10（该参数可通过 request 自定义）
			//where: {token: 'sasasas', id: 123}, //接口的其它参数
			parseData: function(res) {
				var length = res.resultList.length;
				for (var i = 0; i < length; i++) {
					res.resultList[i] = JSON.parse(res.resultList[i])
				}
				return res;
			},
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
					field: 'productName', //字段名
					title: '产品列表', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'alp', //字段名
					title: '安洛普', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.alp, d.productId, "alp")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'hf', //字段名
					title: '华付', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.hf, d.productId, "hf")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'rs', //字段名
					title: '榕树科技', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.rs, d.productId, "rs")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'yj', //字段名
					title: '爰金', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.yj, d.productId, "yj")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'sm', //字段名
					title: '数脉', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.sm, d.productId, "sm")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'ly', //字段名
					title: '丽友', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.ly, d.productId, "ly")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'jg', //字段名
					title: '极光推送', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.jg, d.productId, "jg")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'cl', //字段名
					title: '创蓝253', //标题
					width: 100,
					align: 'center',
					templet: '<div>{{checkboxStatus(d.cl, d.productId, "cl")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}]
			]
		});

		form.on('radio()', function(data) {
			var channelId = this.getAttribute('value');
			var productId = this.getAttribute('name');
			var status = this.getAttribute('data-status');
			if (status == '0') {
				return;
			}
			confirm('确定要选择吗？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "channelProductApi/editChannelProductApi",
					contentType: "application/json",
					data: JSON.stringify({
						channelId: channelId,
						productId: productId
					}),
					success: function(r) {
						if (r.code == 200) {
							layer.msg(r.msg);
							vm.reload();
						} else {
							alert(r.msg);
							vm.reload();
						}
					}
				});
			});
		});
	})
})

function checkboxStatus(status, productId, field) {
	if (status == 0) {
		return '<input type="radio" data-status="' + status + '" name="' + productId + '" value="' + field + '" checked>'
	} else if (status == 1) {
		return '<input type="radio" data-status="' + status + '" name="' + productId + '" value="' + field + '">'
	} else if (status == 2) {
		return ''
	}
}

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			productName: ''
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
			requestType: null,
			publicKey: null,
			privateKey: null,
			status: null,
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
			vm.channelInfo = {};
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
				url: baseURL + "channelProductApi/queryChannelProductApiList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.channelInfo = r.resultList[0];
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
