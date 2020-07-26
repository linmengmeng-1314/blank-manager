blank-manager

# 空白的管理系统后台

	项目版本：
		SpringBoot 2.0.1.RELEASE
		mysql 8.0.11
		shiro	1.3.2
		
	项目结构：
	com.csi.
		comment 包为公共组件，包括定义的注解，切面，以及工具类等信息。
		config 包为项目的配置文件，拦截器。
		datasource 包为多数据源配置。
		mapper.base 基础Mapper类
		modules包下为具体的模块
			sys 为本系统自带的管理系统模块。
			sdk.aliyun 阿里云OSS工具类，支付宝支付
			sdk.wxpay	微信支付，微信小程序等工具
		BlankManagerApplication.java 项目启动类	
		Swagger2.java  集成 swagger2 可自动生成接口文档。
		
	项目采用shiro进行权限控制，可以用来快速开发，作为一个简单的后台管理系统。 采用 RESTful架构，接口返回统一的 json 格式数据，前端采用layUI和Vue框架。
	
	项目定义有全局异常，可以有效拦截异常，防止异常信息暴露至前端 ，以及自定义异常，可以很方便的与前端进行交互。

## doc文件夹说明
	项目sql脚本为doc目录下的blank_manager.sql ，其中dept表中的数据为省市县三级数据，补充了国标中的省市县数据，数据较全面。
	项目中集成支付宝支付时封装了 alipay 相关的jar包，压缩文件sdk.zip 为支付宝支付的相关jar包，解压压缩包内容至本地maven仓库的 com\alipay\sdk 文件夹下即可。

## 启动时提示 log.path.prefix 异常

	第一次运行需要添加启动参数 -Dlog.path.prefix=logs
		eclipse 添加启动参数位置在 debug 标志的下拉框的Debug Configurations 项，选中左侧菜单树Java Application下的项目启动类名称，在右侧的Arguments中的VM arguments 中添加-Dlog.path.prefix=logs 
	然后点击apply  debug启动。

## pom中使用了mysql 8.0  如果启动提示mysql连接问题，需要修改mysql的jar包版本

## pom文件 <parent> 报错
	
	eclipse使用了clean Project后 pom文件，如果 <parent> 行提示异常，则右键项目名，使用maven的update项目就好了

## shiro相关

	可参考《Apache Shiro 1.2.x 参考手册》，虽然目前 Shiro 截止到目前已经发布到 1.5.3 版本，但是该手册可以帮我们快速上手shiro。 https://waylau.com/apache-shiro-1.2.x-reference/index.html

	这里没有使用shiro默认的登录认证方法 login，而是采用自定义的登录方式，这样可以灵活配置多用户种类访问此系统。
	
	如果想要使用shiro默认的登录认证机制，可在登录接口中直接调用shiro的subject.login 方法。
	
	
	请求进来时，会走shiro的web.filter.AccessControlFilter类中，这里自定义实现了此过滤器(OAuth2Filter)，
	
## token机制
	此demo中使用的token为UUID串，验证token机制时，会频繁查询数据库或者缓存进行判断token是否过期等。
	
	优化一：简单的签名机制：
		
		自定义签名规则，将请求数据 + 自定义的字符串值(可根据版本号进行动态绑定)，按照自定义规则进行加密，最简单的就是MD5加密。
		
			比如请求参数按照参数名升序排列并拼接，请求头中添加时间戳字段。
			服务器的路由机制中，可以先判断请求头部中时间戳，如果时间戳小于规定时间，可以直接将请求按照非法请求打回去。
		
	
	优化二：使用JWT (JSON Web Token) ，jwt理论知识参考：https://blog.csdn.net/weixin_42873937/article/details/82460997
	
		JWT由三部分组成，分别是头信息、有效载荷、签名，中间以（.）分隔，如下格式：xxx.yyy.zzz
			
			头信息(header)为json串，使用BaseURL编码，在网络中是公开部分。
			
			有效载荷(Payload): 为常用的用户信息，如微信小程序中的用户头像，微信名等基本信息。此部分数据需要加密。
			
			签名(Signature): 用于验证消息在此过程中未被篡改，必须采用编码的Header，编码的Payload，秘钥，Header中指定的算法，并对其进行签名。
				HMACSHA256(
				base64UrlEncode(header) + "." +
				  base64UrlEncode(payload),
				  secret)
		输出是三个由点分隔的Base64-URL字符串，可以在HTML和HTTP环境中轻松传递。
		
		jwt 用于单点登录思路可参考：https://www.cnblogs.com/xieqing/p/6519907.html
		
## 未完待续。。。。。。