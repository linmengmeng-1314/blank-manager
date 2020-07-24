var currentPage = 1;
$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-140',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsRoom/queryRoomMergeList', //?page=1&limit=10（该参数可通过 request 自定义）
			where: {
				houseResourceName: localStorage.getItem('houseResourceName')
			}, //接口的其它参数
			request: {
				pageName: 'page', //页码的参数名称，默认：page
				limitName: 'rows', //每页数据量的参数名，默认：limit
			},
			parseData: function(res) { //res 即为原始返回的数据
				currentPage = res.page;
			},
			response: {
				statusName: 'code', //规定数据状态的字段名称，默认：code
				statusCode: 200, //规定成功的状态码，默认：0
				msgName: 'msg', //规定状态信息的字段名称，默认：msg
				countName: 'count', //规定数据总数的字段名称，默认：count
				dataName: 'resultList', //规定数据列表的字段名称，默认：data
			},
			page: {
				curr: currentPage //重新从第 1 页开始
			},
			limit: 10, //每页显示的条数
			limits: [10, 20, 30], //每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。
			cols: [
				[{
					type: 'numbers',
					fixed: 'left',
				}, {
					field: 'houseResourceName', //字段名
					title: '民宿名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'houseTypeId', //字段名
					title: '房型', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'houseTypeName', //字段名
					title: '房型名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'roomName', //字段名
					title: '房间名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkUserId', //字段名
					title: '用户id', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'id', //字段名
					title: '房间状态', //标题
					width: 100,
					templet: function(d) {
						if (d.checkOutTime) {
							var realCheckOutTime = d.realCheckOutTime;
							if (realCheckOutTime) {
								realCheckOutTime = realCheckOutTime.substring(0, 19);
								realCheckOutTime = realCheckOutTime.replace(/-/g, '/');
								var timestamp = new Date(realCheckOutTime).getTime();
								var now = new Date().getTime();
								if (timestamp <= now) {
									return "空闲";
								}
							}
							return "已入住";
						} else {
							return "空闲";
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'houseResourseId', //字段名
					title: '别名', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'mac', //字段名
					title: '门锁', //标题
					width: 160,
					templet: function(d) {
						if (d.mac) {
							return d.mac;
						} else {
							return '';
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'battery', //字段名
					title: '电量', //标题
					width: 100,
					templet: function(d) {
						if (d.battery == null) {
							return ''
						} else {
							return d.battery + '%'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'batteryUpdatetime', //字段名
					title: '电量上传时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'firmwarever', //字段名
					title: '固件版本', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'online', //字段名
					title: '在线状态', //标题
					width: 100,
					templet: function(d) {
						if (d.online == 0) {
							return '<span class="layui-badge layui-bg-orange">离线</span>'
						} else if (d.online == 1) {
							return '<span class="layui-badge layui-bg-green">在线</span>'
						} else {
							return ''
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'rssi', //字段名
					title: '当前的信号强度', //标题
					width: 150,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'rssiStrong', //字段名
					title: '信号强度', //标题
					width: 120,
					templet: function(d) {
						if (d.rssiStrong == 0) {
							return '<span class="layui-badge layui-bg-blue">信号弱</span>'
						} else if (d.rssiStrong == 1) {
							return '<span class="layui-badge">信号强</span>'
						} else {
							return ''
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'ltime', //字段名
					title: '锁内时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'rtime', //字段名
					title: '参考时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'onlineUpdatetime', //字段名
					title: '在线状态更新时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'username', //字段名
					title: '房主账号', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'name', //字段名
					title: '房主', //标题
					width: 100,
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
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					title: '门锁详情', //标题
					width: 100,
					templet: function(d) {
						if (d.mac) {
							return '<a href="javascript:;" class="layui-table-link" style="display: inline-block;" onclick="lockDetail(' +
								d.fkUserId + ',\'' + d.mac + '\',' + d.roomId + ')">查看详情</a>'
						} else {
							return "无智能门锁";
						}
					}
				}]
			]
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
				vm.q.rStartTime = value
			}
		});
		laydate.render({
			elem: '#queryEndTime',
			type: 'datetime',
			done: function(value) {
				vm.q.rEndTime = value
			}
		});
		laydate.render({
			elem: '#pwdDetailQueryStartTime',
			type: 'datetime',
			done: function(value) {
				vm.pwdDetailQuery.startTime = value
			}
		});
		laydate.render({
			elem: '#pwdDetailQueryEndTime',
			type: 'datetime',
			done: function(value) {
				vm.pwdDetailQuery.endTime = value
			}
		});
		//延期时间
		laydate.render({
			elem: '#delayStartTime',
			type: 'datetime',
			done: function(value) {
				document.getElementById('delayStartTime').value = value;
			}
		});
		laydate.render({
			elem: '#delayEndTime',
			type: 'datetime',
			done: function(value) {
				document.getElementById('delayEndTime').value = value;
			}
		});
	});
	//下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(openType)', function(data) {
			vm.pwdDetailQuery.openType = data.value;
		});
		form.on('select(state)', function(data) {
			vm.pwdDetailQuery.state = data.value;
		});
		form.on('select(belongTo)', function(data) {
			vm.pwdDetailQuery.belongTo = data.value;
		});
		form.on('select(online)', function(data) {
			vm.q.online = data.value;
		});
	});
})

//门锁详情
function lockDetail(fkUserId, mac, roomId) {
	vm.showList = false;
	getpwdDetail(fkUserId, mac, roomId);
}
//密码详情
function getpwdDetail(fkUserId, mac, roomId) {
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#pwdTable',
			id: 'pwdTable',
			height: 'full-190',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsLockInfo/queryLockPwdDetailList', //?page=1&limit=10（该参数可通过 request 自定义）
			where: {
				fkUserId: fkUserId,
				mac: mac,
				fkRoomId: roomId,
				belongTo: '0'
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
					type: 'numbers',
					fixed: 'left',
				}, {
					field: 'openType', //字段名
					title: '类型', //标题
					width: 140,
					templet: function(d) {
						if (d.openType == 0) {
							return '身份证开锁'
						} else if (d.openType == 1) {
							return '密码开锁'
						} else if (d.openType == 2) {
							return '蓝牙密码开锁'
						} else if (d.openType == 3) {
							return '蓝牙开锁'
						} else {
							return '激活码密码开锁'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'passwordCmd', //字段名
					title: '密码', //标题
					width: 300,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'hostName', //字段名
					title: '创建人员', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'userName', //字段名
					title: '使用人员', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '状态', //标题
					width: 140,
					templet: function(d) {
						if (d.state == 0) {
							return '密码下发中'
						} else if (d.state == 1) {
							return '冻结'
						} else if (d.state == 2) {
							return '密码作废下发中'
						} else if (d.state == 3) {
							return '密码下发失败'
						} else if (d.state == 4) {
							return '密码下发成功'
						} else if (d.state == 5) {
							return '密码下发时失败'
						} else if (d.state == 6) {
							return '密码作废成功'
						} else if (d.state == 7) {
							return '密码作废失败'
						} else if (d.state == 8) {
							return '密码作废时失败'
						} else {
							return ''
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'belongTo', //字段名
					title: '钥匙所属', //标题
					width: 140,
					templet: function(d) {
						if (d.belongTo == 0) {
							return '房客';
						} else if (d.belongTo == 1) {
							return '房主'
						} else {
							return ''
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'effectTime', //字段名
					title: '生效时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'failureTime', //字段名
					title: '失效时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'sendTime', //字段名
					title: '发送时间', //标题
					width: 165,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'bathId', //字段名
					title: '序列号', //标题
					width: 160,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'sheetId', //字段名
					title: '同步密码的工单号', //标题
					width: 150,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					title: '操作', //标题
					width: 110,
					templet: function(d) {
						var nowTime = new Date().format("yyyy-MM-dd hh:mm:ss");
						var failureTime = d.failureTime;
						if (d.state == 0 || d.state == 2) {
							return '<a href="javascript:;" class="layui-table-link" style="display: inline-block;" onclick="querySheetState(' +
								d.state + ',\'' +
								d.mac + '\',\'' + d.bathId + '\',' +
								d.fkUserId + ',' + d.openType + ')">核验</a>'
						}
						if (d.state == 3 || d.state == 5 || d.state == 7 || d.state == 8) {
							return '<a href="javascript:;" class="layui-table-link" style="display: inline-block;" onclick="failOnceAgain(\'' +
								d.mac + '\',\'' + d.bathId + '\',\'' +
								d.fkUserId + '\',\'' + d.openType + '\')">重试</a>'
						}
						if (d.state == 4) {
							if (failureTime < nowTime) {
								return ''
							} else {
								if (d.openType == 3) {
									return '<a href="javascript:;" class="layui-table-link" style="display: inline-block;" onclick="invalidKey(\'' +
										d.mac + '\',\'' + d.bathId + '\',\'' +
										d.fkUserId + '\',\'' + d.openType + '\')">作废</a>'
								} else {
									return '<a href="javascript:;" class="layui-table-link" style="display: inline-block; margin-right:10px;" onclick="delayTime(\'' +
										d.mac + '\',\'' + d.bathId + '\',\'' +
										d.fkUserId + '\',\'' + d.openType + '\')">延期</a>' +
										'<a href="javascript:;" class="layui-table-link" style="display: inline-block;" onclick="invalidKey(\'' +
										d.mac + '\',\'' + d.bathId + '\',\'' +
										d.fkUserId + '\',\'' + d.openType + '\')">作废</a>'
								}
							}
						}
						if (d.state == 1 || d.state == 6 || d.state == null) {
							return ''
						}
					}
				}]
			]
		});
	});
}

//延期
function delayTime(mac, bathId, fkUserId, openType) {
	layer.open({
		type: 1,
		move: false,
		title: '请选择延期时间',
		area: ['300px', '180px'], //宽高
		content: $('#delayBox'),
		btn: ['确定', '取消'],
		end: function() {
			document.getElementById('delayEndTime').value = '';
		},
		yes: function(index, layero) {
			var delayEndTime = document.getElementById('delayEndTime').value;
			if (!delayEndTime) {
				alert('请选择延期时间！');
				return;
			}
			$.ajax({
				type: "POST",
				url: baseURL + "hsLockInfo/delayTime",
				contentType: "application/json",
				data: JSON.stringify({
					mac: mac,
					bathId: bathId,
					fkUserId: fkUserId,
					openType: openType,
					delayEndTime: delayEndTime
				}),
				success: function(r) {
					if (r.code == 0) {
						alert(r.msg, function(index) {
							layer.closeAll();
							vm.pwdReload();
						});
					} else {
						alert(r.msg);
					}
				}
			});
		}
	});
}

//作废
function invalidKey(mac, bathId, fkUserId, openType) {
	$.ajax({
		type: "POST",
		url: baseURL + "hsLockInfo/invalidKey",
		contentType: "application/json",
		data: JSON.stringify({
			mac: mac,
			bathId: bathId,
			fkUserId: fkUserId,
			openType: openType
		}),
		success: function(r) {
			if (r.code == 0) {
				alert(r.msg, function(index) {
					vm.pwdReload();
				});
			} else {
				alert(r.msg);
			}
		}
	});
}

//重试
function failOnceAgain(mac, bathId, fkUserId, openType) {
	$.ajax({
		type: "POST",
		url: baseURL + "hsLockInfo/failOnceAgain",
		contentType: "application/json",
		data: JSON.stringify({
			mac: mac,
			bathId: bathId,
			fkUserId: fkUserId,
			openType: openType
		}),
		success: function(r) {
			if (r.code == 0) {
				alert(r.msg, function(index) {
					vm.pwdReload();
				});
			} else {
				alert(r.msg);
			}
		}
	});
}

//核验
function querySheetState(state, mac, bathId, fkUserId, openType) {
	$.ajax({
		type: "POST",
		url: baseURL + "hsLockInfo/querySheetState",
		contentType: "application/json",
		data: JSON.stringify({
			state: state,
			mac: mac,
			bathId: bathId,
			fkUserId: fkUserId,
			openType: openType
		}),
		success: function(r) {
			if (r.code == 0) {
				alert(r.msg, function(index) {
					vm.pwdReload();
				});
			} else {
				alert(r.msg);
			}
		}
	});
}

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			roomName: '',
			houseTypeName: '',
			houseResourceName: '',
			mac: '',
			username: '',
			name: '',
			rStartTime: '',
			rEndTime: '',
			online: ''
		},
		pwdDetailQuery: {
			passengerName: '',
			openType: '',
			state: '',
			belongTo: '0',
			startTime: '',
			endTime: ''
		},
		pwdData: [],
		showList: true,
		title: null,
		roomMerge: {
			id: null,
			fkHouseTypeId: null,
			name: null,
			fkUserId: null,
			state: null,
			comment: null,
			createTime: null,
			updateTime: null,
			bathId: null,
			fkHouseResources: null,
			houseTypeName: null,
			houseResourceName: null
		}
	},
	computed: {

	},
	methods: {
		onSubmit: function() {
			return false;
		},
		onPwdSubmit: function() {
			return false;
		},
		query: function() {
			vm.reload();
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.roomMerge = {};
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
			var url = vm.roomMerge.id ? "hsRoom/editRoomMerge" : "hsRoom/saveRoomMerge";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.roomMerge),
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
					url: baseURL + "hsRoom/deleteRoomMergeList",
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
				url: baseURL + "hsRoom/queryRoomMergeList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.roomMerge = r.resultList[0];
					} else {
						alert(r.msg);
					}
				}
			});
		},
		reload: function(param) {
			if (param) {
				var curr = currentPage;
			} else {
				var curr = 1;
			}
			vm.showList = true;
			layui.use('table', function() {
				var table = layui.table;
				table.reload('tableId', {
					where: vm.q,
					page: {
						curr: curr //重新从第 1 页开始
					}
				});
			})
			currentPage = 1;
		},
		pwdReload: function(event) {
			layui.use('table', function() {
				var table = layui.table;
				table.reload('pwdTable', {
					where: vm.pwdDetailQuery,
					page: {
						curr: 1 //重新从第 1 页开始
					}
				});
			})
		},
		pwdQuery: function() {
			vm.pwdReload();
		}
	},
	created: function() {
		var self = this;
		self.q.houseResourceName = localStorage.getItem('houseResourceName');
	}
});
