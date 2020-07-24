//生成菜单
var menuItem = Vue.extend({
	name: 'menu-item',
	props: {
		item: {},
		index: 0
	},
	template: [
		'<li :class="{active: (item.type===0 && index === 0)}">',
		'<a v-if="item.type === 0" href="javascript:;">',
		'<i v-if="item.icon != null" :class="item.icon"></i>',
		'<span>{{item.name}}</span>',
		'<i class="fa fa-angle-left pull-right"></i>',
		'</a>',
		'<ul v-if="item.type === 0" class="treeview-menu">',
		'<menu-item :item="item" :index="index" v-for="(item, index) in item.list"></menu-item>',
		'</ul>',
		'<a v-if="item.type === 1" :href="\'#\'+item.url" onclick="removeStorge()">' +
		'<i v-if="item.icon != null" :class="item.icon"></i>' +
		'<i v-else class="fa fa-circle-o"></i> {{item.name}}' +
		'</a>',
		'</li>'
	].join('')
});

//iframe自适应
$(window).on('resize', function() {
	var $content = $('.content');
	$content.height($(this).height() - 120);
	$content.find('iframe').each(function() {
		$(this).height($content.height());
	});
}).resize();

//注册菜单组件
Vue.component('menuItem', menuItem);

var vm = new Vue({
	el: '#rrapp',
	data: {
		infoNum: '',
		user: {},
		menuList: {},
		main: "main.html",
		password: '',
		newPassword: '',
		repPassword: '',
		navTitle: "欢迎页"
	},
	methods: {
		getMenuList: function() {
			$.getJSON(baseURL + "sys/menu/nav", function(r) {
				if (r.code == 0) {
					vm.menuList = r.menuList;

					localStorage.setItem('permissions', JSON.stringify(r.permissions))
					if (localStorage.getItem('permissions').indexOf('companyAccountInfo:auditCertification') > -1) {
						document.getElementById('infoLi').style.display = 'block';
						vm.getAccount();
					} else {
						document.getElementById('infoLi').style.display = 'none';
					}

					//路由
					var router = new Router();
					routerList(router, vm.menuList);
					router.start();
				}
			});
		},
		getUser: function() {
			$.getJSON(baseURL + "sys/user/info", function(r) {
				vm.user = r.user;
			});
		},
		updatePassword: function() {
			layer.open({
				type: 1,
				skin: 'layui-layer-molv',
				title: "修改密码",
				area: ['550px', '320px'],
				shadeClose: false,
				content: jQuery("#passwordLayer"),
				btn: ['修改', '取消'],
				btn1: function(index) {
					var passwordReg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{10,20}$/;
					if (!vm.password) {
						alert('请输入原密码！');
						return;
					}
					if (!vm.newPassword) {
						alert('请输入新密码！');
						return;
					}
					if (!passwordReg.test(vm.newPassword)) {
						alert('请输入长度为10-20位包含数字、字母且有特殊字符的密码！');
						return;
					}
					if (!vm.repPassword) {
						alert('请输入确认密码！');
						return;
					}
					if (vm.newPassword != vm.repPassword) {
						alert('两次输入的密码不一样！');
						return;
					}
					var password = md5(vm.password);
					var newPassword = md5(vm.newPassword);
					var data = "password=" + password + "&newPassword=" + newPassword;
					$.ajax({
						type: "POST",
						url: baseURL + "sys/user/password",
						data: data,
						dataType: "json",
						success: function(r) {
							if (r.code == 0) {
								localStorage.setItem('customPassword', 1);
								layer.close(index);
								layer.alert('修改成功', function() {
									location.reload();
								});
							} else {
								layer.alert(r.msg);
							}
						}
					});
				},
				btn2: function(index, layero) {
					if (localStorage.getItem('customPassword') == 0) {
						alert('请修改密码！');
						return false //开启该代码可禁止点击该按钮关闭
					}
				},
				cancel: function() {
					//右上角关闭回调
					if (localStorage.getItem('customPassword') == 0) {
						alert('请修改密码！');
						return false //开启该代码可禁止点击该按钮关闭
					}
				},
				end: function() {
					vm.password = '';
					vm.newPassword = '';
				}
			});
		},
		logout: function() {
			//删除本地token
			localStorage.removeItem("token");
			//删除权限数据
			localStorage.removeItem("permissions");
			//跳转到登录页面
			location.href = baseURL + 'login.html';
		},
		donate: function() {
			layer.open({
				type: 2,
				title: false,
				area: ['806px', '467px'],
				closeBtn: 1,
				shadeClose: false,
				content: ['http://cdn.renren.io/donate.jpg', 'no']
			});
		},
//		getAccount: function() {
//			$.getJSON(baseURL + "companyInfo/queryNotAuditNum", function(r) {
//				vm.infoNum = r.count;
//			});
//		},
		goAccount: function() {
			window.location.href = '#modules/account/account.html';
		}
	},
	created: function() {
		this.getMenuList();
		this.getUser();
	},
	mounted: function() {
		//是否自定义密码 0:未自定义 1:已自定义
		if (localStorage.getItem('customPassword') == 0) {
			this.updatePassword();
		}
	}
});

function routerList(router, menuList) {
	for (var key in menuList) {
		var menu = menuList[key];
		if (menu.type == 0) {
			routerList(router, menu.list);
		} else if (menu.type == 1) {
			router.add('#' + menu.url, function() {
				var url = window.location.hash;

				//替换iframe的url
				vm.main = url.replace('#', '');

				//导航菜单展开
				$(".treeview-menu li").removeClass("active");
				$(".sidebar-menu li").removeClass("active");
				$("a[href='" + url + "']").parents("li").addClass("active");

				vm.navTitle = $("a[href='" + url + "']").text();
			});
		}
	}
}
//移除跳转的页面存储在localStorage里的字段
function removeStorge() {
	for (var i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) == 'id' || localStorage.key(i) == 'companyName' || localStorage.key(i) == 'houseResourceName') {
			localStorage.removeItem(localStorage.key(i));
		}
	}
}
