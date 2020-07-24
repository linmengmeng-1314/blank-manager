$(function() {
	//表格
	layui.use(['table', 'form'], function() {
		var table = layui.table;
		var form = layui.form;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-100',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsAppVersion/queryAppVersionList', //?page=1&limit=10（该参数可通过 request 自定义）
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
						hide: true,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'theme', //字段名
						title: '主题', //标题
						width: 110,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'type', //字段名
						title: '更新策略', //标题
						width: 110,
						templet: function(d) {
							if (d.type == 0) {
								return '平滑更新'
							} else if (d.type == 1) {
								return '强制更新'
							} else {
								return '未知'
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'model', //字段名
						title: '终端类型', //标题
						width: 110,
						templet: function(d) {
							if (d.model == 0) {
								return '安卓'
							} else if (d.model == 1) {
								return 'ios'
							} else if (d.model == 2) {
								return '大屏'
							} else {
								return '未知'
							}
						},
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'version', //字段名
						title: '版本号', //标题
						width: 110,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'url', //字段名
						title: '下载地址', //标题
						width: 400,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'commet', //字段名
						title: '描述', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'createTime', //字段名
						title: '创建时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'updateTime', //字段名
						title: '更新时间', //标题
						width: 200,
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}, {
						field: 'status', //字段名
						title: '状态', //标题
						width: 120,
						templet: '#switchState',
						sort: true //是否允许排序 默认：false
						//fixed: 'left' //固定列
					}
				]
			]
		});

		//监听状态操作
		form.on('switch(status)', function(obj) {
			var status;
			var id = this.getAttribute('data-id');
			var versionOptimizedLock = this.getAttribute('data-versionOptimizedLock');
			if (obj.elem.checked) {
				status = 1;
			} else {
				status = 0;
			}
			var data = {
				id: id,
				status: status,
				versionOptimizedLock: versionOptimizedLock
			}
			$.ajax({
				type: "POST",
				url: baseURL + "hsAppVersion/editAppVersionStatus",
				contentType: "application/json",
				data: JSON.stringify(data),
				success: function(r) {
					if (r.code == 200) {
						layer.msg(r.msg);
						vm.reload();
					} else {
						alert(r.msg);
					}
				}
			});
		});
	});
	//下拉框
	layui.use('form', function() {
		var form = layui.form;
		form.on('select(type)', function(data) {
			vm.q.type = data.value;
		});
		form.on('select(appVersionType)', function(data) {
			vm.appVersion.type = data.value;
		});
		//文件上传
		form.on('radio(radioChange)', function(data) {
			vm.uploadParms.type = data.value;
		});
		form.on('radio(modelChange)', function(data) {
			vm.uploadParms.model = data.value;
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
var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			theme: '',
			version: '',
			type: '',
			startTime: '',
			endTime: ''
		},
		uploadParms: {
			type: 0,
			model: 0,
		},
		showList: true,
		title: null,
		appVersion: {
			id: null,
			theme: null,
			type: '',
			version: null,
			url: null,
			commet: null,
			createTime: null,
			updateTime: null
		}
	},
	methods: {
		onSubmit: function() {
			return false;
		},
		query: function() {
			vm.reload();
		},
		publish: function() {
			var fileNameHide = document.getElementById('fileNameHide');
			var fileNameShow = document.getElementById('fileNameShow');
			var startUpload = document.getElementById('startUpload');
			//打开弹窗
			layer.open({
				type: 1,
				title: '请选择后缀为apk的文件',
				area: ['430px', '380px'], //宽高
				content: $('#fileBox'),
				end: function() {
					fileNameHide.style.display = 'block';
					fileNameShow.style.display = 'none';
					vm.uploadParms.type = 0;
				}
			});
			//上传
			layui.use('upload', function() {
				var upload = layui.upload;
				//执行实例
				var uploadInst = upload.render({
					elem: '#upload',
					url: baseURL + 'hsAppVersion/publishAppVersion',
					data: vm.uploadParms,
					accept: 'file', //允许上传的文件类型 file（所有文件）
					exts: 'apk', //允许上传的文件后缀
					auto: false, //是否选完文件后自动上传
					bindAction: '#startUpload',
					choose: function(obj) {
						//选择文件后的回调函数
						//将每次选择的文件追加到文件队列
						//var files = obj.pushFile();
						//预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
						obj.preview(function(index, file, result) {
							if (file) {
								var fileName = file.name;
								if (fileName.indexOf('.apk') > -1) {
									fileNameHide.style.display = 'none';
									fileNameShow.style.display = 'block';
									fileNameShow.innerText = fileName;
								} else {
									alert('请选择后缀为.apk的文件！');
								}
							}
						});
					},
					before: function(obj) {
						//文件提交上传前的回调
						layer.load(); //上传loading
					},
					done: function(res, index, upload) {
						//上传完毕回调
						layer.closeAll('loading'); //关闭loading
						if (res.code == 0) {
							alert(res.msg, function(index) {
								layer.closeAll();
								vm.reload();
							});
						} else {
							alert(res.msg);
						}
					},
					error: function(index, upload) {
						//请求异常回调
						layer.closeAll('loading'); //关闭loading
						alert('网络异常，请稍后重试！');
					}
				});
			});
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.appVersion = {
				id: null,
				theme: null,
				type: '',
				version: null,
				url: null,
				commet: null,
				createTime: null,
				updateTime: null
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
			var url = vm.appVersion.id ? "hsAppVersion/editAppVersion" : "hsAppVersion/saveAppVersion";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.appVersion),
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
					url: baseURL + "hsAppVersion/deleteAppVersionList",
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
				url: baseURL + "hsAppVersion/queryAppVersionList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.appVersion = r.resultList[0];
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
			$('#appVersionType .layui-unselect').val('');
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
