$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'loginInfo/queryLoginInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						field: 'username', //字段名
						title: '用户名', //标题
						width: 120,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'contacts', //字段名
						title: '联系人', //标题
						width: 120,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'ip', //字段名
						title: '访问IP', //标题
						width: 130,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}
					//					, {
					//						field: 'type', //字段名
					//						title: '类型', //标题
					//						width: 100,
					//						templet: '<div>{{loginType(d.type)}}</div>',
					//						sort: true //是否允许排序 默认：false
					//						//fixed: 'left' //固定列
					//					}
					, {
						field: 'count', //字段名
						title: '错误次数', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'updateTime', //字段名
						title: '登陆时间', //标题
						width: 165,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'expireTime', //字段名
						title: 'token过期时间', //标题
						width: 165,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'startTime', //字段名
						title: '错误触发开始时间', //标题
						width: 165,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'endTime', //字段名
						title: '错误触发结束时间', //标题
						width: 165,
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
	})
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			username: '',
			startTime: '',
			endTime: ''
		},
		showList: true,
		title: null,
		loginInfo: {
			id: null,
			userName: null,
			ip: null,
			type: null,
			createTime: null,
			updateTime: null,
			startTime: null,
			endTime: null
		}
	},
	methods: {
		query: function() {
			vm.reload();
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.loginInfo = {};
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
			var url = vm.loginInfo.id ? "loginInfo/editLoginInfo" : "loginInfo/saveLoginInfo";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.loginInfo),
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
					url: baseURL + "loginInfo/deleteLoginInfoList",
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
				url: baseURL + "loginInfo/queryLoginInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.loginInfo = r.resultList[0];
					} else {
						alert(r.msg);
					}
				}
			});
		},
		reload: function(event) {
			if (vm.q.startTime && vm.q.endTime) {
				if (vm.q.startTime > vm.q.endTime) {
					alert("结束时间不能小于开始时间！");
					return;
				}
			}
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
