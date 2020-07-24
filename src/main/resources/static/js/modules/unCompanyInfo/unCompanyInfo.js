$(function() {
	//表格
	layui.use(['table', 'form'], function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-55',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'unCompanyInfo/queryUnCompanyInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						field: 'companyId', //字段名
						title: '公司编号', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'fkDeptId', //字段名
						title: '内部部门', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'companyName', //字段名
						title: '公司名称', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'companyType', //字段名
						title: '公司类型', //标题
						width: 120,
						templet: '<div>{{companyType(d.companyType)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'legalPerson', //字段名
						title: '法人姓名', //标题
						width: 100,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'authenticationCount', //字段名
						title: '授权账户数量', //标题
						width: 130,
						templet: '#authenticationCount',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'openProductCount', //字段名
						title: '开通产品数量', //标题
						width: 130,
						templet: '#openProductCount',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'cardType', //字段名
						title: '证件类别', //标题
						width: 120,
						templet: '<div>{{cardType(d.cardType)}}</div>',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'cardNumber', //字段名
						title: '法人身份证件', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'cardFaceUrl', //字段名
						title: '身份证正面', //标题
						width: 200,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'mobileNumber', //字段名
						title: '手机号码', //标题
						width: 130,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'businessLicenseNumber', //字段名
						title: '营业执照号', //标题
						width: 200,
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
						field: 'comment', //字段名
						title: '描述', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'createTime', //字段名
						title: '创建时间', //标题
						width: 165,
						hide: true, //是否初始隐藏列
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'updateTime', //字段名
						title: '更新时间', //标题
						width: 165,
						hide: true, //是否初始隐藏列
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

		var form = layui.form;
		form.on('select(companyType)', function(data) {
			vm.unCompanyInfo.companyType = data.value;
		});
		form.on('select(cardType)', function(data) {
			vm.unCompanyInfo.cardType = data.value;
		});

	});
});

//授权账户数量
var table;

function authenticationCount(companyId) {
	fkCompanyId = companyId;
	layui.use(['table', 'form'], function() {
		table = layui.table;
		var form = layui.form;
		layer.open({
			type: 1,
			title: '授权账户数量',
			area: ['900px', '600px'], //宽高
			content: $('#authenBox'),
			success: function() {
				table.render({
					elem: '#authenTable',
					id: 'authenTable',
					height: 480,
					method: 'get', //接口http请求类型，默认：get
					url: baseURL + 'unAuthorizationInfo/queryUnAuthorizationInfoList', //?page=1&limit=10（该参数可通过 request 自定义）
					where: {
						fkCompanyId: companyId,
					}, //接口的其它参数
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
							field: 'accessKeyId', //字段名
							title: '身份凭证', //标题
							//width: 200,
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'accessKeySecret', //字段名
							title: '身份密钥', //标题
							//width: 100,
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'createTime', //字段名
							title: '创建时间', //标题
							width: 165,
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'state', //字段名
							title: '状态', //标题
							width: 100,
							templet: '#switchState',
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}]
					]
				});
				//监听状态操作
				form.on('switch(state)', function(obj) {
					var state;
					var id = this.getAttribute('data-id');
					var accessKeyId = this.getAttribute('data-accessKeyId');
					var versionOptimizedLock = this.getAttribute('data-versionOptimizedLock');
					if (obj.elem.checked) {
						state = 0;
					} else {
						state = 1;
					}
					var data = {
						id: id,
						state: state,
						fkCompanyId: fkCompanyId,
						accessKeyId: accessKeyId,
						versionOptimizedLock: versionOptimizedLock
					}
					$.ajax({
						type: "POST",
						url: baseURL + "unAuthorizationInfo/editUnAuthorizationInfo",
						contentType: "application/json",
						data: JSON.stringify(data),
						success: function(r) {
							if (r.code == 200) {
								layer.msg(r.msg);
								table.reload('authenTable', {
									where: {
										fkCompanyId: fkCompanyId
									},
									page: {
										curr: 1 //重新从第 1 页开始
									}
								});
								vm.reload();
							} else {
								alert(r.msg);
							}
						}
					});
				});
			}
		});
	});
}

//生成凭证
var fkCompanyId;

function saveUnAuthorizationInfo() {
	$.ajax({
		type: "POST",
		url: baseURL + "unAuthorizationInfo/saveUnAuthorizationInfo",
		contentType: "application/json",
		data: JSON.stringify({
			fkCompanyId: fkCompanyId
		}),
		success: function(r) {
			if (r.code == 200) {
				layer.msg(r.msg);
				table.reload('authenTable', {
					where: {
						fkCompanyId: fkCompanyId
					},
					page: {
						curr: 1 //重新从第 1 页开始
					}
				});
				vm.reload();
			} else {
				alert(r.msg);
			}
		}
	});
}
//开通产品数量
var table2;

function openProductCount(companyId) {
	fkCompanyId = companyId;
	layui.use(['table', 'form'], function() {
		table2 = layui.table;
		var form = layui.form;
		layer.open({
			type: 1,
			title: '开通产品数量',
			area: ['700px', '600px'], //宽高
			content: $('#openProductBox'),
			end: function() {
				vm.query.productName = '';
			},
			success: function() {
				table2.render({
					elem: '#openProductTable',
					id: 'openProductTable',
					height: 480,
					method: 'get', //接口http请求类型，默认：get
					url: baseURL + 'unCompanyAccountInfo/queryCompanyProductMergerList', //?page=1&limit=10（该参数可通过 request 自定义）
					where: {
						fkCompanyId: companyId,
					}, //接口的其它参数
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
							title: '产品名称', //标题
							//width: 200,
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'totalNumber', //字段名
							title: '总次数', //标题
							width: 100,
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'lastNumber', //字段名
							title: '剩余次数', //标题
							width: 100,
							templet: '#lastNumber',
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'channelName', //字段名
							title: '当前渠道', //标题
							width: 165,
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}, {
							field: 'fkCompanyId', //字段名
							title: '状态', //标题
							width: 100,
							templet: function(d) {
								if (d.fkCompanyId == null) {
									return '<span class="layui-badge" style="cursor: pointer;" onclick="activeState(\'' + d.productId +
										'\')">未激活</span>'
								} else {
									return '<span class="layui-badge layui-bg-green" style="cursor: pointer;">已激活</span>'
								}
							},
							sort: true //是否允许排序 默认：false
							//fixed: 'left' //固定列
						}]
					]
				});
			}
		});
	});
}
//激活状态
function activeState(productId) {
	$.ajax({
		type: "POST",
		url: baseURL + "unCompanyAccountInfo/saveUnCompanyAccountInfo",
		contentType: "application/json",
		data: JSON.stringify({
			fkCompanyId: fkCompanyId,
			fkProductId: productId
		}),
		success: function(r) {
			if (r.code == 200) {
				layer.msg(r.msg);
				vm.productReload();
				vm.reload();
			} else {
				alert(r.msg);
			}
		}
	});
}
//剩余次数
function lastNumber(productId, lastNumber, id, versionOptimizedLock) {
	layer.open({
		type: 1,
		title: '请输入增加或减少次数',
		area: ['260px', '180px'], //宽高
		content: '<div style="padding: 20px;"><input type="number" id="number" value="" class="layui-input" placeholder="请输入正整数或负整数"></div>',
		btn: ['确定', '取消'],
		yes: function(index, layero) {
			var count = document.getElementById('number').value;
			if (!count) {
				alert('请输入数字！');
				return;
			}
			$.ajax({
				type: "POST",
				url: baseURL + "unCompanyAccountInfo/editUnCompanyAccountInfo",
				contentType: "application/json",
				data: JSON.stringify({
					fkCompanyId: fkCompanyId,
					fkProductId: productId,
					lastNumber: count,
					id: id,
					versionOptimizedLock: versionOptimizedLock
				}),
				success: function(r) {
					if (r.code == 200) {
						layer.close(index);
						layer.msg(r.msg);
						vm.productReload();
						vm.reload();
					} else {
						alert(r.msg);
					}
				}
			});
		}
	});
}

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			companyId: '',
			companyName: ''
		},
		open: {
			productName: ''
		},
		showList: true,
		title: null,
		unCompanyInfo: {
			id: null,
			companyId: null,
			fkDeptId: null,
			companyName: null,
			companyType: '',
			legalPerson: null,
			cardType: '',
			cardNumber: null,
			cardFaceUrl: null,
			mobileNumber: null,
			businessLicenseNumber: null,
			businessLicenseImgUrl: null,
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
			vm.unCompanyInfo = {
				id: null,
				companyId: null,
				fkDeptId: null,
				companyName: null,
				companyType: '',
				legalPerson: null,
				cardType: '',
				cardNumber: null,
				cardFaceUrl: null,
				mobileNumber: null,
				businessLicenseNumber: null,
				businessLicenseImgUrl: null,
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
			var url = vm.unCompanyInfo.id ? "unCompanyInfo/editUnCompanyInfo" : "unCompanyInfo/saveUnCompanyInfo";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.unCompanyInfo),
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
					url: baseURL + "unCompanyInfo/deleteUnCompanyInfoList",
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
				url: baseURL + "unCompanyInfo/queryUnCompanyInfoList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.unCompanyInfo = r.resultList[0];
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
			$('#companyType .layui-unselect').val('');
			$('#cardType .layui-unselect').val('');
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
		},
		productReload: function(event) {
			layui.use('table', function() {
				var table = layui.table;
				table.reload('openProductTable', {
					where: vm.open,
					page: {
						curr: 1 //重新从第 1 页开始
					}
				});
			})
		},
		openQuery: function() {
			vm.productReload();
		}
	}
});
