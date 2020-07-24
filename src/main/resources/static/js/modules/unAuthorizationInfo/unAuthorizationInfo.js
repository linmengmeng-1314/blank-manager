$(function () {
		//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			//toolbar: '#toolbar',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'unAuthorizationInfo/queryUnAuthorizationInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'accessKeyId', //字段名
						title: '身份凭证', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'accessKeySecret', //字段名
						title: '身份密钥', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'fkCompanyId', //字段名
						title: '公司编号', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'commet', //字段名
						title: '描述', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'state', //字段名
						title: '状态[0:启用,1:关闭,2:冻结]', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'createTime', //字段名
						title: '创建时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'updateTime', //字段名
						title: '更新时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, 					{
						field: 'versionOptimizedLock', //字段名
						title: '乐观锁', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}				]
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
				vm.unAuthorizationInfo.startTime = value
			}
		});
		laydate.render({
			elem: '#endTime',
			type: 'datetime',
			done: function(value) {
				vm.unAuthorizationInfo.endTime = value
			}
		});
	})
})
var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			keyWords:null
		},
		showList: true,
		title: null,
		unAuthorizationInfo: {
			id:null,
			accessKeyId:null,
			accessKeySecret:null,
			fkCompanyId:null,
			commet:null,
			state:null,
			createTime:null,
			updateTime:null,
			versionOptimizedLock:null
		}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.unAuthorizationInfo = {};
		},
		update: function (event) {
            
            var rowData = getSelectedOneRow();
			if (rowData == undefined) {
				return;
			}
			vm.showList = false;
			vm.title = "修改";
			vm.getInfo(rowData)
		},
		saveOrUpdate: function (event) {
			var url = vm.unAuthorizationInfo.id? "unAuthorizationInfo/editUnAuthorizationInfo" : "unAuthorizationInfo/saveUnAuthorizationInfo";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.unAuthorizationInfo),
			    success: function(r){
			    	if(r.code == 200){
						alert(r.msg, function(index){
							vm.reload();
						});
					}else{
						alert(r.msg);
					}
				}
			});
		},
		
		del: function (event) {
			var ids = getSelectedMoreRow();
			if (ids == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "unAuthorizationInfo/deleteUnAuthorizationInfoList",
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
		getInfo: function(rowData){

			$.ajax({
				type: "POST",
			    url: baseURL + "unAuthorizationInfo/queryUnAuthorizationInfoList",
                contentType: "application/x-www-form-urlencoded",
			    data: rowData,
			    success: function(r){
					if(r.code == 200){
						if(!r.resultList||r.resultList.length==0){
							alert("数据不存在");
							return;
						}
		                vm.unAuthorizationInfo  = r.resultList[0];
					}else{
						alert(r.msg);
					}
				}
			});
		},
		reload: function (event) {
		
			vm.showList = true;
//			var keyVal = document.getElementById('keyWords').value;
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