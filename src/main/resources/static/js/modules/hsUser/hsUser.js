$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-100',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsUser/queryHsUserList', //?page=1&limit=10（该参数可通过 request 自定义）
			where: {
				type: '0'
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
					field: 'name', //字段名
					title: '联系人', //标题
					width: 100,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'username', //字段名
					title: '用户名', //标题
					width: 280,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'type', //字段名
					title: '用户类型', //标题
					width: 150,
					templet: function(d) {
						if (d.type == 0) {
							return 'App用户'
						} else if (d.type == 1) {
							return '微信小程序用户'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'hourseCount', //字段名
					title: '门店', //标题
					width: 90,
					templet: function(d) {
						return d.hourseCount + '家'
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'accountType', //字段名
					title: '年服务费', //标题
					width: 110,
					templet: function(d) {
						var nowTime = new Date().format("yyyy-MM-dd hh:mm:ss");
						var validityEndTime = d.validityEndTime;
						if (validityEndTime == null) {
							return '<span class="layui-badge layui-bg-orange">未开通</span>'
						} else if (validityEndTime < nowTime) {
							return '<span class="layui-badge">已过期</span>'
						} else {
							return '<span class="layui-badge layui-bg-green">已开通</span>'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'total', //字段名
					title: '充值总金额', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'totalNumber', //字段名
					title: '充值总次数', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'last', //字段名
					title: '剩余核验次数', //标题
					width: 120,
					templet: function(d) {
						var flag = hasPermission('hsAccountInfo:editAccountInfoMerger');
						if (d.accountId === null) {
							return '';
						} else {
							if (flag) {
								return '<a href="javascript:;" class="layui-table-link" style="display: inline-block; width: 100%;" onclick="lastCheckNumber(' +
									d.userId + ',' + d.accountType + ',' + d.type + ')">' + d.last + '</a>'
							} else {
								return d.last
							}
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '核验状态', //标题
					width: 110,
					templet: function(d) {
						if (d.state == 0) {
							return '<span class="layui-badge layui-bg-orange">未核验</span>'
						} else if (d.state == 1) {
							return '<span class="layui-badge layui-bg-green">核验通过</span>'
						} else if (d.state == 2) {
							return '<span class="layui-badge">核验不通过</span>'
						} else {
							return ''
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'userId', //字段名
					title: '', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'validityStartTime', //字段名
					title: 'vip有效期开始时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'validityEndTime', //字段名
					title: 'vip有效期结束时间', //标题
					width: 165,
					templet: function(d) {
						var flag = hasPermission('hsAccountInfo:editAccountInfoMerger');
						if (d.accountId === null) {
							return '';
						} else {
							if (flag) {
								return '<a href="javascript:;" class="layui-table-link" style="display: inline-block; width: 100%;" onclick="validityEndTime(' +
									d.userId + ',' + d.accountType + ')">' + d.validityEndTime + '</a>'
							} else {
								return d.validityEndTime
							}
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'cardno', //字段名
					title: '身份证号', //标题
					width: 180,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'email', //字段名
					title: '邮箱', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '创建时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}]
			]
		});
	});
	//下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(type)', function(data) {
			vm.q.type = data.value;
			if (data.value == 1) {
				$('#accountType').attr('disabled', true);
				form.render('select');
			} else {
				$('#accountType').attr('disabled', false);
				form.render('select');
			}
		});
		form.on('select(state)', function(data) {
			vm.q.state = data.value;
		});
		form.on('select(accountType)', function(data) {
			vm.q.accountType = data.value;
		});
	});
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

})

//剩余核验次数
function lastCheckNumber(userId, accountType, userType) {
	layer.open({
		type: 1,
		title: '请输入数字',
		area: ['260px', '180px'], //宽高
		content: '<div style="padding: 20px;"><input type="number" id="number" value="" style="width: 85%; display: inline-block; margin-right: 10px;" class="layui-input" placeholder="请输入正整数或负整数"><span>月</span></div>',
		btn: ['确定', '取消'],
		yes: function(index, layero) {
			var count = document.getElementById('number').value;
			if (!count) {
				alert('请输入数字！');
				return;
			}
			$.ajax({
				type: "POST",
				url: baseURL + "hsAccountInfo/editAccountInfoMerger",
				contentType: "application/json",
				data: JSON.stringify({
					fkUserId: userId,
					accountType: 1,
					userType: userType,
					count: count
				}),
				success: function(r) {
					if (r.code == 200) {
						layer.close(index);
						layer.msg(r.msg);
						vm.reload();
					} else {
						alert(r.msg);
					}
				}
			});
		}
	});
}
//vip有效期结束时间
function validityEndTime(userId, accountType) {
	layer.open({
		type: 1,
		title: '请输入数字',
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
				url: baseURL + "hsAccountInfo/editAccountInfoMerger",
				contentType: "application/json",
				data: JSON.stringify({
					fkUserId: userId,
					accountType: 0,
					count: count
				}),
				success: function(r) {
					if (r.code == 200) {
						layer.close(index);
						layer.msg(r.msg);
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
			name: '',
			username: '',
			type: '0',
			state: '',
			startTime: '',
			endTime: '',
			accountType: ''
		},
		showList: true,
		title: null,
		hsUser: {
			name: null,
			state: null,
			userId: null,
			username: null,
			email: null,
			last: null,
			accountType: null,
			count: null,
			time: null
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
			vm.hsUser = {};
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
			var url = vm.hsUser.userId ? "hsUser/editHsUser" : "hsUser/saveHsUser";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.hsUser),
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
					url: baseURL + "hsUser/deleteHsUserList",
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
				url: baseURL + "hsUser/queryHsUserList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.hsUser = r.resultList[0];
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
//js日期格式化
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}
