$(function() {
	//表格
	layui.use('table', function() {
		var table = layui.table;
		table.render({
			elem: '#layuiTable',
			id: 'tableId',
			height: 'full-100',
			method: 'get', //接口http请求类型，默认：get
			url: baseURL + 'hsHouseResources/queryHouseResourcesMergeList', //?page=1&limit=10（该参数可通过 request 自定义）
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
					field: 'resourcesName', //字段名
					title: '民宿名称', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'province', //字段名
					title: '省市县', //标题
					width: 200,
					templet: function(d) {
						var province = provinceCityArea[d.fkDeptIdP];
						var city = provinceCityArea[d.fkDeptIdU];
						var area = provinceCityArea[d.fkDeptIdA];
						return province + city + area;
					},
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'detailAddress', //字段名
					title: '详细地址', //标题
					width: 300,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'mobile', //字段名
					title: '手机号', //标题
					width: 120,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'typeCount', //字段名
					title: '房型数量', //标题
					width: 100,
					templet: '#typeCount',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'roomCount', //字段名
					title: '房间数量', //标题
					width: 100,
					templet: '#roomCount',
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'comment', //字段名
					title: '备注', //标题
					width: 200,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkDeptIdP', //字段名
					title: '省', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkDeptIdU', //字段名
					title: '市', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'fkDeptIdA', //字段名
					title: '区', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'longitude', //字段名
					title: '精度', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'latitude', //字段名
					title: '维度', //标题
					width: 200,
					hide: true,
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
					field: 'state', //字段名
					title: '状态[0:已续费,1:待续费,2:费用已过期]', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'resourcesId', //字段名
					title: '房型Id', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'city', //字段名
					title: '市', //标题
					width: 200,
					hide: true,
					sort: true //是否允许排序 默认：false
					//fixed: 'left' //固定列
				}, {
					field: 'area', //字段名
					title: '区', //标题
					width: 200,
					hide: true,
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
	});

	getFilterProvince();
})

//房型数量
function typeCount(resourcesName) {
	localStorage.setItem("houseResourceName", resourcesName);
	parent.location.href = baseURL + '#modules/hsRoom/roomMerge.html';
}
//房间数量
function roomCount(resourcesName) {
	localStorage.setItem("houseResourceName", resourcesName);
	parent.location.href = baseURL + '#modules/hsRoom/roomMerge.html';
}

//获取过滤后的省市县
function getFilterProvince() {
	$.ajax({
		type: "POST",
		//url: baseURL + "sys/dept/getDeptData",
		url: baseURL + "hsProvinceCityLink/queryProvinceCityLinkList",
		contentType: "application/json",
		data: JSON.stringify({
			token: localStorage.getItem('token')
		}),
		success: function(r) {
			if (r.code == 0) {
				if (r.data != '') {
					var provinceList = JSON.parse(r.data);
					showProvince(provinceList);
				}
			} else {
				alert(r.msg);
			}
		}
	});
}

//显示省市县
function showProvince(provinceList) {
	layui.use('form', function() {
		var form = layui.form;

		var province = $("#province"),
			city = $("#city"),
			area = $("#area");

		//初始将省份数据赋予
		for (var i = 0; i < provinceList.length; i++) {
			addEle(province, provinceList[i].name, provinceList[i].code);
		}

		//赋予完成 重新渲染select
		form.render('select');

		//向select中 追加内容
		function addEle(ele, value, code) {
			var optionStr = "";
			optionStr = "<option value=" + code + " >" + value + "</option>";
			ele.append(optionStr);
		}

		//移除select中所有项 赋予初始值
		function removeEle(ele) {
			ele.find("option").remove();
			var optionStar = '<option value="">请选择</option>';
			ele.append(optionStar);
		}

		var provinceText,
			cityText,
			cityItem;

		//选定省份后 将该省份的数据读取追加上
		form.on('select(province)', function(data) {
			provinceText = data.value;
			$.each(provinceList, function(i, item) {
				if (provinceText == item.code) {
					cityItem = i;
					return cityItem;
				}
			});
			removeEle(city);
			removeEle(area);
			$.each(provinceList[cityItem].cityList, function(i, item) {
				addEle(city, item.name, item.code);
			})
			//重新渲染select 
			form.render('select');
		})

		//选定市或直辖县后 将对应的数据读取追加上
		form.on('select(city)', function(data) {
			cityText = data.value;
			removeEle(area);
			$.each(provinceList, function(i, item) {
				if (provinceText == item.code) {
					cityItem = i;
					return cityItem;
				}
			});
			$.each(provinceList[cityItem].cityList, function(i, item) {
				if (cityText == item.code) {
					for (var n = 0; n < item.areaList.length; n++) {
						addEle(area, item.areaList[n].name, item.areaList[n].code);
					}
				}
			})
			//重新渲染select 
			form.render('select');
		})

	})
}

var vm = new Vue({
	el: '#rrapp',
	data: {
		q: {
			fkDeptIdP: '',
			fkDeptIdU: '',
			fkDeptIdA: '',
			resourcesName: '',
			mobile: '',
			startTime: '',
			endTime: ''
		},
		showList: true,
		title: null,
		houseResourcesMerge: {
			comment: null,
			fkDeptIdP: null,
			fkDeptIdU: null,
			fkDeptIdA: null,
			longitude: null,
			latitude: null,
			fkUserId: null,
			state: null,
			detailAddress: null,
			mobile: null,
			area: null,
			roomcount: null,
			city: null,
			resourcesName: null,
			resourcesId: null,
			province: null,
			typecount: null
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
			vm.houseResourcesMerge = {};
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
			var url = vm.houseResourcesMerge.comment ? "hsHouseResources/editHouseResourcesMerge" :
				"hsHouseResources/saveHouseResourcesMerge";
			$.ajax({
				type: "POST",
				url: baseURL + url,
				contentType: "application/json",
				data: JSON.stringify(vm.houseResourcesMerge),
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
			var comments = getSelectedMoreRow();
			if (comments == undefined) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "hsHouseResources/deleteHouseResourcesMergeList",
					contentType: "application/json",
					data: JSON.stringify(comments),
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
				url: baseURL + "hsHouseResources/queryHouseResourcesMergeList",
				contentType: "application/x-www-form-urlencoded",
				data: rowData,
				success: function(r) {
					if (r.code == 200) {
						if (!r.resultList || r.resultList.length == 0) {
							alert("数据不存在");
							return;
						}
						vm.houseResourcesMerge = r.resultList[0];
					} else {
						alert(r.msg);
					}
				}
			});
		},
		reload: function(event) {
			vm.q.fkDeptIdP = $("#province").val();
			vm.q.fkDeptIdU = $("#city").val();
			vm.q.fkDeptIdA = $("#area").val();
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
