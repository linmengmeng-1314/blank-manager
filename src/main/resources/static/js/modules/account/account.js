$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-100',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'account/queryAccountList', //?page=1&limit=10（该参数可通过 request 自定义）
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
					field: 'userId', //字段名
					title: '', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'companyName', //字段名
					title: '公司名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'businessLicenseNumber', //字段名
					title: '营业执照号', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'username', //字段名
					title: '账户', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'contacts', //字段名
					title: '联系人', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'email', //字段名
					title: '邮箱', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'mobile', //字段名
					title: '手机号', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '创建时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'balanceAmt', //字段名
					title: '余额', //标题
					width: 100,
					templet: '#balanceAmt',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'lockAmt', //字段名
					title: '冻结金额', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '认证状态', //标题
					width: 110,
					templet: '<div>{{authenStatus(d.state, "table")}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'status', //字段名
					title: '用户状态', //标题
					width: 100,
					templet: '<div>{{userStatus(d.status)}}</div>',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'businessLicenseImgUrl', //字段名
					title: '营业执照复印件', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					fixed: 'right',
					title: '操作',
					toolbar: '#barDemo',
					width: 125
				}]
			]
		});

		//监听行工具事件
		table.on('tool(test)', function(obj) {
			var data = obj.data;
			if (obj.event === 'detail') {
				detail(data)
			} else if (obj.event === 'editAccountAmount') {
				editAccountAmount(data)
			}
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
	});
	//下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(state)', function(data) {
			vm.q.state = data.value;
		});
	});
});
//查看详情
function detail(data) {
	vm.detailData = data;
	var companyId = data.companyId;
	var caVersionOptimizedLock = data.caVersionOptimizedLock;
	var ciVersionOptimizedLock = data.ciVersionOptimizedLock;
	var businessLicenseImgUrl = data.businessLicenseImgUrl;
	if (businessLicenseImgUrl) {
		$.ajax({
			type: "POST",
			url: baseURL + "account/queryCompanyImgUrl",
			data: "businessLicenseImgUrl=" + businessLicenseImgUrl,
			success: function(r) {
				if (r.code == 200) {
					vm.detailData.businessLicenseImgUrl = r.url;
				} else {
					alert(r.msg);
				}
			}
		});
	} else {
		vm.detailData.businessLicenseImgUrl = '';
	}

	layer.open({
		type: 1,
		title: '查看详情',
		area: ['560px', '650px'], //宽高
		content: $('#detailBox'),
		end: function() {
			$("#stateForm")[0].reset();
		}
	});

	layui.use('form', function() {
		var form = layui.form;
		//监听提交
		form.on('submit(stateBtn)', function(data) {
			data.field.companyId = companyId;
			data.field.caVersionOptimizedLock = caVersionOptimizedLock;
			data.field.ciVersionOptimizedLock = ciVersionOptimizedLock;
			$.ajax({
				type: "POST",
				url: baseURL + "accountDetail/auditCertification",
				contentType: "application/json",
				data: JSON.stringify(data.field),
				success: function(r) {
					layer.closeAll();
					$("#stateForm")[0].reset();
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
}
//调账
function editAccountAmount(data) {
	var accountId = data.accountId;
	var caVersionOptimizedLock = data.caVersionOptimizedLock;
	var ciVersionOptimizedLock = data.ciVersionOptimizedLock;
	layer.open({
		type: 1,
		title: '调账',
		area: ['560px', '380px'], //宽高
		content: $('#editAccountAmount'),
		end: function() {
			$("#editAccountAmountForm")[0].reset();
		}
	});

	layui.use('form', function() {
		var form = layui.form;
		//监听提交
		form.on('submit(formDemo)', function(data) {
			data.field.accountId = accountId;
			data.field.caVersionOptimizedLock = caVersionOptimizedLock;
			data.field.ciVersionOptimizedLock = ciVersionOptimizedLock;
			$.ajax({
				type: "POST",
				url: baseURL + "accountDetail/editAccountAmount",
				contentType: "application/json",
				data: JSON.stringify(data.field),
				success: function(r) {
					if (r.code == 200) {
						layer.closeAll();
						$("#editAccountAmountForm")[0].reset();
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
}
//余额
function balanceAmt(companyName) {
	localStorage.setItem("companyName", companyName);
	parent.location.href = baseURL + '#modules/accountDetail/accountDetail.html';
}

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			username: '',
			contacts: '',
			companyName: '',
			startTime: '',
			endTime: '',
			state: ''
		},
		detailData: {

		},
		showList: true,
		title: null,
		account: {
			userId: null,
			username: null,
			contacts: null,
			email: null,
			mobile: null,
			status: null,
			createTime: null,
			balanceAmt: null,
			lockAmt: null,
			state: null,
			companyName: null,
			businessLicenseNumber: null,
			businessLicenseImgUrl: null
		}
	},
	methods: {
		onSubmit: function() {
			return false;
		},
		query: function() {
			vm.reload();
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.account = {};
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
			var url = vm.account.userId ? "account/editAccount" : "account/saveAccount";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.account),
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
			var userIds = getSelectedMoreRow();
			if (userIds == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "account/deleteAccountList",
					contentType: "application/json",
					data: JSON.stringify(userIds),
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
				url: baseURL + "account/queryAccountList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.account = r.resultList[0];
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
