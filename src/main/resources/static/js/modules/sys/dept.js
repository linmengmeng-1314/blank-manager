layui.config({
	base: '../../plugins/'
}).extend({
	treetable: 'treetable'
});

var layout = [{
		name: '部门ID',
		field: 'id',
		headerClass: 'value_col',
		colClass: 'value_col',
		style: ''
	},
	{
		name: '部门名称',
		field: 'name',
		treeNodes: true,
		headerClass: 'value_col',
		colClass: 'value_col',
		style: ''
	},
	{
		name: '上级部门',
		field: 'parentName',
		headerClass: 'value_col',
		colClass: 'value_col',
		style: ''
	},
	{
		name: '上级部门ID',
		field: 'parentId',
		headerClass: 'value_col',
		colClass: 'value_col',
		style: ''
	},
	{
		name: '排序号',
		field: 'orderNum',
		headerClass: 'value_col',
		colClass: 'value_col',
		style: ''
	}
];

function renderTable() {
	layui.use(['form', 'treetable', 'layer'], function() {
		var layer = layui.layer,
			form = layui.form,
			$ = layui.jquery;
		layer.load(2);
		$.ajax({
			type: "POST",
			url: baseURL + "sys/dept/getDeptDataNew",
			contentType: "application/json",
			success: function(r) {
				if (r.code === 0) {
					var nodes = r.resultList;
					tableTree = layui.treetable({
						elem: '#layuiTable', //传入元素选择器
						spreadable: false, //设置是否全展开，默认不展开
						checkbox: true,
						nodes: nodes,
						layout: layout
					});
					form.render();
					layer.closeAll('loading');
				} else {
					alert(r.msg);
				}
			}
		});
	});
}
renderTable();

//var renderTable;
var selected;

var setting = {
	data: {
		simpleData: {
			enable: true,
			idKey: "deptId",
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
		dept: {
			parentName: null,
			parentId: 0,
			orderNum: 0
		}
	},
	methods: {
		getDept: function() {
			//加载部门树
			$.get(baseURL + "sys/dept/select", function(r) {
				ztree = $.fn.zTree.init($("#deptTree"), setting, r.deptList);
				var node = ztree.getNodeByParam("deptId", vm.dept.parentId);
				ztree.selectNode(node);

				vm.dept.parentName = node.name;
			})
		},
		add: function() {
			vm.showList = false;
			vm.title = "新增";
			vm.dept = {
				parentName: null,
				parentId: 0,
				orderNum: 0
			};
			vm.getDept();
		},
		update: function() {
			var deptId = getDeptId();
			if (!deptId) {
				return;
			}
			$.get(baseURL + "sys/dept/info/" + deptId, function(r) {
				selected = '';
				vm.showList = false;
				vm.title = "修改";
				vm.dept = r.dept;

				vm.getDept();
			});
		},
		del: function() {
			var deptId = getDeptId();
			if (!deptId) {
				return;
			}
			confirm('确定要删除选中的记录？', function() {
				$.ajax({
					type: "POST",
					url: baseURL + "sys/dept/delete",
					data: "deptId=" + deptId,
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
			var url = vm.dept.deptId == null ? "sys/dept/save" : "sys/dept/update";
			layui.use('form', function() {
				var form = layui.form;
				//监听提交
				form.on('submit(saveBtn)', function(data) {
					$.ajax({
						type: "POST",
						url: baseURL + url,
						contentType: "application/json",
						data: JSON.stringify(vm.dept),
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
		deptTree: function() {
			layer.open({
				type: 1,
				offset: '50px',
				skin: 'layui-layer-molv',
				title: "选择部门",
				area: ['300px', '450px'],
				shade: 0,
				shadeClose: false,
				content: jQuery("#deptLayer"),
				btn: ['确定', '取消'],
				btn1: function(index) {
					var node = ztree.getSelectedNodes();
					//选择上级部门
					vm.dept.parentId = node[0].deptId;
					vm.dept.parentName = node[0].name;

					layer.close(index);
				}
			});
		},
		reload: function() {
			tableTree.destory();
			vm.showList = true;
			renderTable();
		}
	}
});

function getDeptId() {
	var getSelected = tableTree.getSelected();
	if (getSelected.length == 0) {
		alert("请选择一条记录！");
		return;
	}
	if (getSelected.length > 1) {
		alert("只能选择一条记录！");
		return;
	}
	return getSelected[0].id;
}
