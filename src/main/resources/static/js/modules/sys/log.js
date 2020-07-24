$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'sys/log/list', //?page=1&limit=10（该参数可通过 request 自定义）
			//where: {token: 'sasasas', id: 123}, //接口的其它参数
			/* request: {
				pageName: 'curr', //页码的参数名称，默认：page
				limitName: 'nums', //每页数据量的参数名，默认：limit
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
						fixed: 'left'
					}, {
						type: 'numbers',
						title: '#',
						fixed: 'left'
					},
					{
						field: 'id', //字段名
						title: 'id', //标题
						width: 80,
						sort: true, //是否允许排序 默认：false
						fixed: 'left' //固定列
					}, {
						field: 'username',
						title: '用户名',
						width: 130
					}, {
						field: 'operation',
						title: '用户操作',
						width: 110,
						sort: true
					}, {
						field: 'method',
						title: '请求方法',
						width: 410
					}, {
						field: 'params',
						title: '请求参数',
						//width: 200
					}, {
						field: 'time',
						title: '执行时长(毫秒)',
						width: 140
					}, {
						field: 'ip',
						title: 'IP地址',
						width: 130
					}, {
						field: 'createDate',
						title: '创建时间',
						width: 200,
						sort: true
					}
				]
			]
		});
	});
});

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			key: null
		},
	},
	methods: {
		query: function() {
			vm.reload();
		},
		reload: function(event) {
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
