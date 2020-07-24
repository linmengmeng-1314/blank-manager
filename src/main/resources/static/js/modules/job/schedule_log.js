$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'sys/scheduleLog/list', //?page=1&limit=10（该参数可通过 request 自定义）
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
					field: 'logId', //字段名
					title: '日志ID', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
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
					field: 'status', //字段名
					title: '状态', //标题
					width: 80,
					templet: function(d) {
						if (d.status == 0) {
							return '<span class="layui-badge layui-bg-green">成功</span>'
						} else {
							return '<span class="layui-badge" style="cursor: pointer;" onclick="vm.showError(' + d.logId + ')">失败</span>'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'times', //字段名
					title: '耗时(单位：毫秒)', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '执行时间', //标题
					width: 200,
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
			jobId: null
		}
	},
	methods: {
		query: function() {
			layui.use('table', function() {
				var table = layui.table;
				table.reload('tableId', {
					where: { //设定异步数据接口的额外参数
						jobId: vm.q.jobId
					},
					page: {
						curr: 1 //重新从第 1 页开始
					}
				});
			})
		},
		showError: function(logId) {
			$.get(baseURL + "sys/scheduleLog/info/" + logId, function(r) {
				parent.layer.open({
					title: '失败信息',
					closeBtn: 0,
					content: r.log.error
				});
			});
		},
		back: function() {
			history.go(-1);
		}
	}
});
