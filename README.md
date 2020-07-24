blank-manager

# 空白的管理系统后台

## 启动时提示 log.path.prefix 异常

	第一次运行需要添加启动参数 -Dlog.path.prefix=logs
		eclipse 添加启动参数位置在 debug 标志的下拉框的Debug Configurations 项，选中左侧菜单树Java Application下的项目启动类名称，在右侧的Arguments中的VM arguments 中添加-Dlog.path.prefix=logs 
	然后点击apply  debug启动。

## pom中使用了mysql 8.0  如果启动提示mysql连接问题，需要修改mysql的jar包版本

## pom文件 <parent> 报错
	
	eclipse使用了clean Project后 pom文件，如果 <parent> 行提示异常，则右键项目名，使用maven的update项目就好了
