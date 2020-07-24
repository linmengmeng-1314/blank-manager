package com.csi.modules.loginInfo.controller;

import java.util.List;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.csi.common.annotation.CtrlLog;
import com.csi.common.annotation.DataSource;
import com.csi.common.baseenum.DataSourceEnum;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.validator.ValidatorUtils;
import com.csi.modules.loginInfo.entity.LoginInfoMergeEntity;
import com.csi.modules.loginInfo.service.ILoginInfoMergeService;
import com.csi.modules.loginInfo.vo.LoginInfoMergeQueryVO;
import com.csi.modules.loginInfo.vo.LoginInfoMergeQueryVO.LoginInfoMergeQResultVO;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '', 'modules/loginInfo/loginInfoMerge.html', NULL, 1, 'fa fa-file-code-o', 1);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '查看', NULL, 'loginInfo:queryLoginInfoMergeList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '新增', NULL, 'loginInfo:saveLoginInfoMerge,loginInfo:saveLoginInfoMergeList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '修改', NULL, 'loginInfo:editLoginInfoMerge,loginInfo:editLoginInfoMergeList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '删除', NULL, 'loginInfo:deleteLoginInfoMerge,loginInfo:deleteLoginInfoMergeList', 2, NULL, 0);


/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-10 09:20:30
 */
@RestController
@Api(value="",tags={""})
@RequestMapping("loginInfo/")
public class LoginInfoMergeController {
	@Autowired
	private ILoginInfoMergeService loginInfoMergeService;

	/**
	 * 查询列表
	 */
	@RequestMapping(value="/queryLoginInfoList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("查询记录登陆信息")
	@RequiresPermissions("loginInfo:queryLoginInfoList")
	@ApiOperation(value="查询记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoMergeQResultVO queryLoginInfoMergeList(@ApiParam("查询参数")LoginInfoMergeQueryVO  loginInfoMergeQueryVO){
		ValidatorUtils.validateEntity(loginInfoMergeQueryVO);
		LoginInfoMergeEntity loginInfoMergeEntity = new LoginInfoMergeEntity();
		BeanCopierUtils.copyProperties(loginInfoMergeQueryVO, loginInfoMergeEntity);
		List<LoginInfoMergeEntity> loginInfoMergeList = loginInfoMergeService.queryLoginInfoMergeEntityListForPage(loginInfoMergeEntity,loginInfoMergeQueryVO.getStartRow(),loginInfoMergeQueryVO.getRows());
		//统计行数,如果数据量比较大可以才线程同时处理两个语句
		Long count= loginInfoMergeService.queryLoginInfoMergeEntityListForPageCount(loginInfoMergeEntity);
		LoginInfoMergeQResultVO loginInfoMergeQResultVO = loginInfoMergeQueryVO.ok(loginInfoMergeList);
		loginInfoMergeQResultVO.setCount(count);
		return loginInfoMergeQResultVO;
	}
}
