layui.config({
	base: '../../plugins/'
}).extend({
	treetable: 'treetable-lay/treetable'
}).use(['layer', 'table', 'treetable'], function() {
	var $ = layui.jquery;
	var table = layui.table;
	var layer = layui.layer;
	var treetable = layui.treetable;

	// 渲染表格
	renderTable = function() {
		layer.load(2);
		treetable.render({
			treeColIndex: 2,
			treeSpid: localStorage.getItem("parentId"),
			treeIdName: 'menuId',
			treePidName: 'parentId',
			treeDefaultClose: true,
			treeLinkage: false,
			elem: '#layuiTable',
			id: 'tableId',
			url: baseURL + "sys/menu/list",
			page: false,
			cols: [
				[{
						type: 'radio'
					},
					{
						field: 'menuId',
						title: '菜单ID',
						width: 80
					},
					{
						field: 'name',
						title: '菜单名称',
						width: 200
					},
					{
						field: 'parentName',
						title: '上级菜单',
						width: 200
					},
					{
						field: 'parentId',
						title: 'parentId',
						width: 90
					},
					{
						field: 'icon',
						title: '图标',
						width: 80,
						templet: function(d) {
							return d.icon == null ? '' : '<i class="' + d.icon + ' fa-lg"></i>';
						}
					},
					{
						field: 'type',
						title: '类型',
						width: 80,
						templet: function(d) {
							if (d.type === 0) {
								return '<span class="layui-badge layui-bg-blue">目录</span>';
							}
							if (d.type === 1) {
								return '<span class="layui-badge layui-bg-green">菜单</span>';
							}
							if (d.type === 2) {
								return '<span class="layui-badge layui-bg-orange">按钮</span>';
							}
						}
					},
					{
						field: 'orderNum',
						title: '排序号',
						width: 80
					},
					{
						field: 'url',
						title: '菜单URL',
						width: 450
					},
					{
						field: 'perms',
						title: '授权标识',
						width: 200
					}
				]
			],
			done: function() {
				layer.closeAll('loading');
			}
		});
	};

	renderTable();

	//监听行单击事件（双击事件为：rowDouble）
	table.on('row(test)', function(obj) { //注：test是table原始容器的属性 lay-filter="对应的值"
		var data = obj.data;
		selected = data;
		//选中行样式
		obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
		//选中radio样式
		obj.tr.find('i[class="layui-anim layui-icon"]').trigger("click");
	});
});

var renderTable;
var selected;

layui.use('form', function() {
	var form = layui.form;
	form.on('radio(radioChange)', function(data) {
		vm.menu.type = data.value;
	});
});

var setting = {
	data: {
		simpleData: {
			enable: true,
			idKey: "menuId",
			pIdKey: "parentId",
			rootPId: -1
		},
		key: {
			url: "nourl"
		}
	}
};
var ztree;

var vm = new Vue({
	el: '#rrapp',
	data: {
		showList: true,
		title: null,
		menu: {
			parentName: null,
			parentId: 0,
			type: 1,
			orderNum: 0
		}
	},
	methods: {
		getMenu: function() {
			//加载菜单树
			$.get(baseURL + "sys/menu/select", function(r) {
				ztree = $.fn.zTree.init($("#menuTree"), setting, r.menuList);
				var node = ztree.getNodeByParam("menuId", vm.menu.parentId);
				ztree.selectNode(node);

				vm.menu.parentName = node.name;
			})
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.menu = {
				parentName: null,
				parentId: 0,
				type: 1,
				orderNum: 0
			};
			vm.getMenu();
		},
		update: function() {
			var menuId = getMenuId();
			if (!menuId) {
				return;
			}
			$.get(baseURL + "sys/menu/info/" + menuId, function(r) {
				selected = '';
				vm.showList = false;
				vm.title = "修改";
				vm.menu = r.menu;
				vm.$nextTick(function() {
					layui.use('form', function() {
						var form = layui.form;
						form.render();
					});
				});
				vm.getMenu();
			});
		},
		del: function() {
			var menuId = getMenuId();
			if (!menuId) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "sys/menu/delete",
					data: "menuId=" + menuId,
					success: function(r) {
						selected = '';
						if (r.code === 0) {
							alert('操作成功', function() {
								vm.reload();
							});
						} else {
							alert(r.msg);
						}
					}
				});
			});
		},
		saveOrUpdate: function(event) {
			var url = vm.menu.menuId == null ? "sys/menu/save" : "sys/menu/update";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.menu),
						success: function(r) {
							if (r.code === 0) {
								alert('操作成功', function() {
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
		menuTree: function() {
			layer.open({
				type: 1,
				offset: '50px',
				skin: 'layui-layer-molv',
				title: "选择菜单",
				area: ['300px', '450px'],
				shade: 0,
				shadeClose: false,
				content: jQuery("#menuLayer"),
				btn: ['确定', '取消'],
				btn1: function(index) {
					var node = ztree.getSelectedNodes();
					//选择上级菜单
					vm.menu.parentId = node[0].menuId;
					vm.menu.parentName = node[0].name;

					layer.close(index);
				}
			});
		},
		reload: function() {
			vm.showList = true;
			renderTable();
		}
	}
});

function getMenuId() {
	if (!selected) {
		alert("请选择一条记录");
		return false;
	} else {
		return selected.menuId;
	}
}
