$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'sys/schedule/list', //?page=1&limit=10（该参数可通过 request 自定义）
			//where: {token: 'sasasas', id: 123}, //接口的其它参数
			/* request: {
				pageName: 'page', //页码的参数名称，默认：page
				limitName: 'rows', //每页数据量的参数名，默认：limit
			}, */
			//将其解析成 table 组件所规定的数据
			parseData: function(res) { //res 即为原始返回的数据
				return {
					"code": res.code, //解析接口状态
					"msg": '', //解析提示文本
					"count": res.page.totalCount, //解析数据长度
					"data": res.page.list //解析数据列表
				};
			},
			/* response: {
				statusName: 'code', //规定数据状态的字段名称，默认：code
				statusCode: 200, //规定成功的状态码，默认：0
				msgName: 'msg', //规定状态信息的字段名称，默认：msg
				countName: 'count', //规定数据总数的字段名称，默认：count
				dataName: 'resultList', //规定数据列表的字段名称，默认：data
			}, */
			page: true, //是否分页
			limit: 10, //每页显示的条数
			limits: [10, 20, 30], //每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。
			cols: [
				[{
					type: 'checkbox',
					fixed: 'left',
				}, {
					field: 'jobId', //字段名
					title: '任务ID', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'beanName', //字段名
					title: 'bean名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'methodName', //字段名
					title: '方法名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'params', //字段名
					title: '参数', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'cronExpression', //字段名
					title: 'cron表达式', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'remark', //字段名
					title: '备注', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'status', //字段名
					title: '状态', //标题
					width: 80,
					templet: function(d) {
						if (d.status == 0) {
							return '<span class="layui-badge layui-bg-green">正常</span>'
						} else {
							return '<span class="layui-badge">暂停</span>'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}]
			]
		});
	});
});

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			beanName: null
		},
		showList: true,
		title: null,
		schedule: {}
	},
	methods: {
		query: function() {
			vm.reload();
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.schedule = {};
		},
		update: function() {
			var jobId = getSelectedOneRow();
			if (jobId == undefined) {
				return;
			}
			jobId = jobId.jobId;
			$.get(baseURL + "sys/schedule/info/" + jobId, function(r) {
				vm.showList = false;
				vm.title = "修改";
				vm.schedule = r.schedule;
			});
		},
		saveOrUpdate: function(event) {
			var url = vm.schedule.jobId == null ? "sys/schedule/save" : "sys/schedule/update";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.schedule),
				success: function(r) {
					if (r.code === 0) {
						alert('操作成功', function() {
							vm.reload();
						});
					} else {
						alert(r.msg);
					}
				}
			});
		},
		del: function() {
			var jobIds = getSelectedMoreRow();
			if (jobIds == undefined) {
				return;
			}
			var id = [];
			for (var i = 0; i < jobIds.length; i++) {
				id.push(jobIds[i]['jobId'])
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "sys/schedule/delete",
					contentType: "application/json",
					data: JSON.stringify(id),
					success: function(r) {
						if (r.code == 0) {
							alert('操作成功', function() {
								vm.reload();
							});
						} else {
							alert(r.msg);
						}
					}
				});
			});
		},
		pause: function() {
			var jobIds = getSelectedMoreRow();
			if (jobIds == undefined) {
				return;
			}
			var id = [];
			for (var i = 0; i < jobIds.length; i++) {
				id.push(jobIds[i]['jobId'])
			}
			confirm('确定要暂停选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "sys/schedule/pause",
					contentType: "application/json",
					data: JSON.stringify(id),
					success: function(r) {
						if (r.code == 0) {
							alert('操作成功', function() {
								vm.reload();
							});
						} else {
							alert(r.msg);
						}
					}
				});
			});
		},
		resume: function() {
			var jobIds = getSelectedMoreRow();
			if (jobIds == undefined) {
				return;
			}
			var id = [];
			for (var i = 0; i < jobIds.length; i++) {
				id.push(jobIds[i]['jobId'])
			}
			confirm('确定要恢复选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "sys/schedule/resume",
					contentType: "application/json",
					data: JSON.stringify(id),
					success: function(r) {
						if (r.code == 0) {
							alert('操作成功', function() {
								vm.reload();
							});
						} else {
							alert(r.msg);
						}
					}
				});
			});
		},
		runOnce: function() {
			var jobIds = getSelectedMoreRow();
			if (jobIds == undefined) {
				return;
			}
			var id = [];
			for (var i = 0; i < jobIds.length; i++) {
				id.push(jobIds[i]['jobId'])
			}
			confirm('确定要立即执行选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "sys/schedule/run",
					contentType: "application/json",
					data: JSON.stringify(id),
					success: function(r) {
						if (r.code == 0) {
							alert('操作成功', function() {
								vm.reload();
							});
						} else {
							alert(r.msg);
						}
					}
				});
			});
		},
		reload: function(event) {
			vm.showList = true;
			layui.use('table', function() {
				var table = layui.table;
				table.reload('tableId', {
					where: { //设定异步数据接口的额外参数
						beanName: vm.q.beanName
					},
					page: {
						curr: 1 //重新从第 1 页开始
					}
				});
			})
		}
	}
});
