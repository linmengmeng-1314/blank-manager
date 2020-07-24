$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-140',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsPassengerInfo/queryPassengerInfoMergeList', //?page=1&limit=10（该参数可通过 request 自定义）
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
					field: 'id', //字段名
					title: '主键', //标题
					width: 200,
					hide: true, //是否初始隐藏列
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'name', //字段名
					title: '姓名', //标题
					width: 100,
					templet: function(d) {
						if (d.name !== null) {
							var div = '<div>';
							var arr = d.name.split(',');
							for (var i = 0; i < arr.length; i++) {
								div += '<p>' + arr[i] + '</p>';
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'gender', //字段名
					title: '性别', //标题
					width: 80,
					templet: function(d) {
						if (d.gender !== null) {
							var div = '<div>';
							var arr = d.gender.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] == 0) {
									arr[i] = '男';
									div += '<p>' + arr[i] + '</p>';
								} else if (arr[i] == 1) {
									arr[i] = '女';
									div += '<p>' + arr[i] + '</p>';
								} else {
									arr[i] = '未知';
									div += '<p>' + arr[i] + '</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'no', //字段名
					title: '证件号', //标题
					width: 200,
					templet: function(d) {
						if (d.no !== null) {
							var div = '<div>';
							var arr = d.no.split(',');
							for (var i = 0; i < arr.length; i++) {
								div += '<p>' + arr[i] + '</p>';
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'certType', //字段名
					title: '证件类型', //标题
					width: 110,
					templet: function(d) {
						if (d.certType !== null) {
							var div = '<div>';
							var arr = d.certType.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] == 0) {
									arr[i] = '身份证';
									div += '<p>' + arr[i] + '</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'houseName', //字段名
					title: '民宿名称', //标题
					width: 120,
					templet: function(d) {
						var arr = d.houseName.split(' ');
						return arr[0];
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'houseName', //字段名
					title: '房型', //标题
					width: 170,
					templet: function(d) {
						var arr = d.houseName.split(' ');
						return arr[1];
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'houseName', //字段名
					title: '房间名称', //标题
					width: 120,
					templet: function(d) {
						var arr = d.houseName.split(' ');
						return arr[2];
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'realType', //字段名
					title: '实名类型', //标题
					width: 110,
					templet: function(d) {
						if (d.realType !== null) {
							var div = '<div>';
							var arr = d.realType.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] == 0) {
									arr[i] = '身份证';
									div += '<p><span class="layui-badge layui-bg-green">' + arr[i] + '</span></p>';
								} else if (arr[i] == 1) {
									arr[i] = '三要素';
									div += '<p><span class="layui-badge layui-bg-orange">' + arr[i] + '</span></p>';
								} else if (arr[i] == 2) {
									arr[i] = '阿里三要素';
									div += '<p><span class="layui-badge">' + arr[i] + '</span></p>';
								} else {
									arr[i] = '未知';
									div += '<p>' + arr[i] + '</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'state', //字段名
					title: '实名状态', //标题
					width: 110,
					templet: function(d) {
						if (d.state !== null) {
							var div = '<div>';
							var arr = d.state.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] == 0) {
									arr[i] = '已核验';
									div += '<p><span class="layui-badge layui-bg-green">' + arr[i] + '</span></p>';
								} else if (arr[i] == 1) {
									arr[i] = '待核验';
									div += '<p><span class="layui-badge">' + arr[i] + '</span></p>';
								} else {
									arr[i] = '未知';
									div += '<p>' + arr[i] + '</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'checkInState', //字段名
					title: '用户状态', //标题
					width: 110,
					templet: function(d) {
						if (d.checkInState !== null) {
							var div = '<div>';
							var arr = d.checkInState.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] == 0) {
									arr[i] = '已预订';
									div += '<p><span class="layui-badge layui-bg-green">' + arr[i] + '</span></p>';
								} else if (arr[i] == 1) {
									arr[i] = '已退房';
									div += '<p><span class="layui-badge layui-bg-orange">' + arr[i] + '</span></p>';
								} else if (arr[i] == 2) {
									arr[i] = '取消入住';
									div += '<p><span class="layui-badge">' + arr[i] + '</span></p>';
								} else {
									arr[i] = '未知';
									div += '<p>' + arr[i] + '</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'upload', //字段名
					title: '是否上报', //标题
					width: 120,
					templet: function(d) {
						if (d.upload !== null) {
							var div = '<div>';
							var arr = d.upload.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] == 0) {
									arr[i] = '已上报';
									div += '<p><span class="layui-badge layui-bg-green">' + arr[i] + '</span></p>';
								} else if (arr[i] == 1) {
									arr[i] = '未上报';
									div += '<p><span class="layui-badge">' + arr[i] + '</span></p>';
								} else {
									arr[i] = '未知';
									div += '<p>' + arr[i] + '</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'tel', //字段名
					title: '手机号', //标题
					width: 130,
					templet: function(d) {
						if (d.tel !== null) {
							var div = '<div>';
							var arr = d.tel.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'nation', //字段名
					title: '民族', //标题
					width: 100,
					templet: function(d) {
						if (d.nation !== null) {
							var div = '<div>';
							var arr = d.nation.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'birthDate', //字段名
					title: '出生日期', //标题
					width: 150,
					templet: function(d) {
						if (d.birthDate !== null) {
							var div = '<div>';
							var arr = d.birthDate.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'permanentAddress', //字段名
					title: '户籍地址', //标题
					width: 200,
					templet: function(d) {
						if (d.permanentAddress !== null) {
							var div = '<div>';
							var arr = d.permanentAddress.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'createTime', //字段名
					title: '创建时间', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'checkInTime', //字段名
					title: '入住时间', //标题
					width: 200,
					templet: function(d) {
						if (d.checkInTime !== null) {
							var div = '<div>';
							var arr = d.checkInTime.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'checkOutTime', //字段名
					title: '退房时间', //标题
					width: 200,
					templet: function(d) {
						if (d.checkOutTime !== null) {
							var div = '<div>';
							var arr = d.checkOutTime.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'realCheckOutTime', //字段名
					title: '实际退房时间', //标题
					width: 200,
					templet: function(d) {
						if (d.realCheckOutTime !== null) {
							var div = '<div>';
							var arr = d.realCheckOutTime.split(',');
							for (var i = 0; i < arr.length; i++) {
								if (arr[i] != 'null') {
									div += '<p>' + arr[i] + '</p>';
								} else {
									div += '<p>未知</p>';
								}
							}
							div += '</div>';
							return div;
						} else {
							return '未知'
						}
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
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
		laydate.render({
			elem: '#createStartTime',
			type: 'datetime',
			done: function(value) {
				vm.q.createStartTime = value
			}
		});
		laydate.render({
			elem: '#createEndTime',
			type: 'datetime',
			done: function(value) {
				vm.q.createEndTime = value
			}
		});
	});
	//实名状态下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(state)', function(data) {
			vm.q.state = data.value;
		});
		form.on('select(realType)', function(data) {
			vm.q.realType = data.value;
		});
		form.on('select(checkInState)', function(data) {
			vm.q.checkInState = data.value;
		});
		form.on('select(certType)', function(data) {
			vm.q.certType = data.value;
		});
		form.on('select(upload)', function(data) {
			vm.q.upload = data.value;
		});
	});
})
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			name: '',
			no: '',
			houseResourcesName: '',
			startTime: '',
			endTime: '',
			state: '',
			realType: '',
			checkInState: '',
			certType: '',
			upload: '',
			createStartTime: '',
			createEndTime: ''
		},
		showList: true,
		title: null,
		passengerInfoMerge: {
			id: null,
			state: null,
			realType: null,
			checkInTime: null,
			checkOutTime: null,
			realCheckOutTime: null,
			no: null,
			roomName: null,
			houseResourcesName: null,
			name: null
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
			vm.passengerInfoMerge = {};
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
			var url = vm.passengerInfoMerge.id ? "hsPassengerInfo/editPassengerInfoMerge" :
				"hsPassengerInfo/savePassengerInfoMerge";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.passengerInfoMerge),
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
					url: baseURL + "hsPassengerInfo/deletePassengerInfoMergeList",
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
				url: baseURL + "hsPassengerInfo/queryPassengerInfoMergeList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.passengerInfoMerge = r.resultList[0];
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
