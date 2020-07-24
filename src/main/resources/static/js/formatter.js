//用户状态
function userStatus(arg) {
	if (arg == 0) {
		return '<span class="layui-badge layui-bg-green">正常</span>'
	} else {
		return '<span class="layui-badge">禁用</span>'
	}
}
//认证状态
function authenStatus(arg, type) {
	if (type == 'table') {
		if (arg == 0) {
			return '<span class="layui-badge layui-bg-green">已认证</span>'
		} else if (arg == 1) {
			return '<span class="layui-badge layui-bg-orange">未认证</span>'
		} else if (arg == 2) {
			return '<span class="layui-badge layui-bg-blue">已申请</span>'
		} else {
			return '<span class="layui-badge">认证不通过</span>'
		}
	} else {
		if (arg == 0) {
			return '已认证'
		} else if (arg == 1) {
			return '未认证'
		} else if (arg == 2) {
			return '已申请'
		} else {
			return '认证不通过'
		}
	}
}
//支付方式
function paymentType(arg) {
	if (arg == 0) {
		return '微信'
	} else if (arg == 1) {
		return '支付宝'
	} else if (arg == 2) {
		return '余额'
	} else {
		return '活动'
	}
}
//报告状态
function reportStatus(arg) {
	if (arg == 0) {
		return '已出报告'
	} else if (arg == 1) {
		return '待支付'
	} else if (arg == 2) {
		return '已支付'
	} else if (arg == 3) {
		return '待授权'
	} else if (arg == 4) {
		return '<span class="layui-badge">调查中</span>'
	} else if (arg == 5) {
		return '被拒绝'
	} else if (arg == 6) {
		return '退款中'
	} else if (arg == 7) {
		return '已退款'
	} else {
		return '部分退款'
	}
}
//交易类型
function transType(arg) {
	if (arg == 0) {
		return '<span class="">充值</span>'
	} else if (arg == 1) {
		return '<span class="">消费</span>'
	} else if (arg == 2) {
		return '<span class="">退款</span>'
	} else if (arg == 3) {
		return '<span class="">调账</span>'
	} else if (arg == 4) {
		return '<span class="">补贴</span>'
	}
}
//优惠类型
function youhuiType(arg) {
	if (arg == 0) {
		return '补贴'
	} else if (arg == 1) {
		return '折扣'
	} else if (arg == 2) {
		return '返现'
	} else {
		return '满减'
	}
}
//登录类型
function loginType(arg) {
	if (arg == 0) {
		return '正常登录'
	} else if (arg == 1) {
		return '密码错误'
	}
}
//请求类型
function requestType(arg) {
	if (arg == 0) {
		return 'http'
	} else if (arg == 1) {
		return 'sdk'
	} else if (arg == 2) {
		return 'rpc'
	} else if (arg == null) {
		return ''
	}
}
//api状态
function apiStatus(arg) {
	if (arg == 0) {
		return '<span class="layui-badge layui-bg-green">正常</span>'
	} else if (arg == 1) {
		return '<span class="layui-badge">关闭</span>'
	} else if (arg == null) {
		return ''
	}
}
//公司类型
function companyType(arg) {
	if (arg == 0) {
		return '国企'
	} else if (arg == 1) {
		return '独资企业'
	} else if (arg == 2) {
		return '合伙企业'
	} else if (arg == 3) {
		return '公司制企业'
	} else if (arg == null) {
		return ''
	}
}
//证件类型
function cardType(arg) {
	if (arg == 0) {
		return '身份证'
	} else if (arg == null) {
		return ''
	}
}
//个人涉诉-状态
function lawsuitInfoState(arg) {
	if (arg == 0) {
		return '<span class="layui-badge layui-bg-green">成功</span>'
	} else if (arg == 1) {
		return '<span class="layui-badge layui-bg-orange">处理中</span>'
	} else {
		return '<span class="layui-badge">失败</span>'
	}
}

//计费-状态
function chargerState(arg) {
	if (arg == 0) {
		return '计费'
	} else if (arg == 1) {
		return '不计费'
	} else {
		return '处理中'
	}
}
//金融黑名单-状态
function financialBlacklistInfo(arg) {
	if (arg == 1) {
		return '命中黑名单'
	} else if (arg == 2) {
		return '未命中黑名单'
	} else {
		return ''
	}
}
//性别-状态
function sexType(arg) {
	if (arg == 0) {
		return '男'
	} else if (arg == 1) {
		return '女'
	} else {
		return ''
	}
}