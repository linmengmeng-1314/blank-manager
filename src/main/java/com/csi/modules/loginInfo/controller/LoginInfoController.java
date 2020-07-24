package com.csi.modules.loginInfo.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.csi.common.annotation.CtrlLog;
import com.csi.common.annotation.DataSource;
import com.csi.common.baseenum.DataSourceEnum;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.validator.ValidatorUtils;
import com.csi.modules.loginInfo.entity.LoginInfoEntity;
import com.csi.modules.loginInfo.service.ILoginInfoService;
import com.csi.modules.loginInfo.vo.LoginInfoDeleteVO;
import com.csi.modules.loginInfo.vo.LoginInfoDeleteVO.LoginInfoDResultVO;
import com.csi.modules.loginInfo.vo.LoginInfoEditVO;
import com.csi.modules.loginInfo.vo.LoginInfoEditVO.LoginInfoEResultVO;
import com.csi.modules.loginInfo.vo.LoginInfoSaveVO;
import com.csi.modules.loginInfo.vo.LoginInfoSaveVO.LoginInfoSResultVO;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '记录登陆信息', 'modules/loginInfo/loginInfo.html', NULL, 1, 'fa fa-file-code-o', 1);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '查看', NULL, 'loginInfo:queryLoginInfoList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '新增', NULL, 'loginInfo:saveLoginInfo,loginInfo:saveLoginInfoList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '修改', NULL, 'loginInfo:editLoginInfo,loginInfo:editLoginInfoList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '删除', NULL, 'loginInfo:deleteLoginInfo,loginInfo:deleteLoginInfoList', 2, NULL, 0);


/**
 * 记录登陆信息
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-05 09:59:36
 */
@RestController
@Api(value="记录登陆信息",tags={"记录登陆信息"})
@RequestMapping("loginInfo/")
public class LoginInfoController {
	@Autowired
	private ILoginInfoService loginInfoService;

	
	
	/**
	 * 保存
	 */
	@RequestMapping(value="/saveLoginInfo",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("保存记录登陆信息")
	@RequiresPermissions("loginInfo:saveLoginInfo")
	@ApiOperation(value="保存记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoSResultVO saveLoginInfo(@ApiParam("保存记录登陆信息参数")@RequestBody(required=false) LoginInfoSaveVO  loginInfoSaveVO){
		ValidatorUtils.validateEntity(loginInfoSaveVO);
		LoginInfoEntity loginInfoEntity = new LoginInfoEntity();
		BeanCopierUtils.copyProperties(loginInfoSaveVO, loginInfoEntity);
	
		loginInfoService.saveLoginInfoEntity(loginInfoEntity);
		
		return LoginInfoSResultVO.ok();
	}
	
	/**
	 * 批量保存
	 */
	@RequestMapping(value="/saveLoginInfoList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("保存记录登陆信息")
	@RequiresPermissions("loginInfo:saveLoginInfoList")
	@ApiOperation(value="保存记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoSResultVO saveLoginInfoList(@ApiParam("保存记录登陆信息参数")@RequestBody(required=false) List<LoginInfoSaveVO>  loginInfoSaveVOList){
		ValidatorUtils.validateEntity(loginInfoSaveVOList);
		
		LoginInfoEntity entity = null;
		List<LoginInfoEntity> entitys = new ArrayList<LoginInfoEntity>(loginInfoSaveVOList.size());
		for (LoginInfoSaveVO tempVO : loginInfoSaveVOList) {
			entity = new LoginInfoEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
	
		loginInfoService.saveLoginInfoEntity(entitys);
		
		return LoginInfoSResultVO.ok();
	}
	
	/**
	 * 修改
	 */
	@RequestMapping(value="/editLoginInfo",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("更新记录登陆信息")
	@RequiresPermissions("loginInfo:editLoginInfo")
	@ApiOperation(value="更新记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoEResultVO editLoginInfo(@ApiParam("更新记录登陆信息参数")@RequestBody(required=false)LoginInfoEditVO loginInfoEditVO){
		ValidatorUtils.validateEntity(loginInfoEditVO);
		LoginInfoEntity loginInfoEntity = new LoginInfoEntity();
		BeanCopierUtils.copyProperties(loginInfoEditVO, loginInfoEntity);
	
		loginInfoService.editLoginInfoEntity(loginInfoEntity);
		
		return  LoginInfoEResultVO.ok();
	}
	
	/**
	 * 批量修改
	 */
	@RequestMapping(value="/updateLoginInfoList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("更新记录登陆信息")
	@RequiresPermissions("loginInfo:editLoginInfoList")
	@ApiOperation(value="更新记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoEResultVO editLoginInfoList(@ApiParam("更新记录登陆信息参数")@RequestBody(required=false) List<LoginInfoEditVO> loginInfoEditVOList){
		ValidatorUtils.validateEntity(loginInfoEditVOList);
		LoginInfoEntity entity = null;
		List<LoginInfoEntity> entitys = new ArrayList<LoginInfoEntity>(loginInfoEditVOList.size());
		for (LoginInfoEditVO tempVO : loginInfoEditVOList) {
			entity = new LoginInfoEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
	
		loginInfoService.editLoginInfoEntity(entitys);
		
		return  LoginInfoEResultVO.ok();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value="/deleteLoginInfo",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("删除记录登陆信息")
	@RequiresPermissions("loginInfo:deleteLoginInfo")
	@ApiOperation(value="删除记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoDResultVO deleteLoginInfo(@ApiParam("更新记录登陆信息参数") LoginInfoDeleteVO loginInfoDeleteVO){
		ValidatorUtils.validateEntity(loginInfoDeleteVO);
		LoginInfoEntity loginInfoEntity = new LoginInfoEntity();
		BeanCopierUtils.copyProperties( loginInfoDeleteVO,loginInfoEntity);
	
		loginInfoService.removeLoginInfoEntity(loginInfoEntity);
		
		return LoginInfoDResultVO.ok();
	}
	
	/**
	 * 批量删除
	 */
	@RequestMapping(value="/deleteLoginInfoList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("删除记录登陆信息")
	@RequiresPermissions("loginInfo:deleteLoginInfoList")
	@ApiOperation(value="删除记录登陆信息",notes="注意问题点")
	@ResponseBody
	@DataSource(DataSourceEnum.DATASOURCE_MARS)
	public LoginInfoDResultVO deleteLoginInfoList(@ApiParam("更新记录登陆信息参数") @RequestBody List<LoginInfoDeleteVO> loginInfoDeleteVOList){
		ValidatorUtils.validateEntity(loginInfoDeleteVOList);
		LoginInfoEntity entity = null;
		List<LoginInfoEntity> entitys = new ArrayList<LoginInfoEntity>(loginInfoDeleteVOList.size());
		for (LoginInfoDeleteVO tempVO : loginInfoDeleteVOList) {
			entity = new LoginInfoEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
		
		loginInfoService.removeLoginInfoEntity(entitys);
		
		return LoginInfoDResultVO.ok();
	}
}
