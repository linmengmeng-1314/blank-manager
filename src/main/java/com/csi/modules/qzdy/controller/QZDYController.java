package com.csi.modules.qzdy.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.csi.common.annotation.CtrlLog;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.validator.ValidatorUtils;
import com.csi.modules.qzdy.entity.QZDYEntity;
import com.csi.modules.qzdy.service.IQZDYService;
import com.csi.modules.qzdy.vo.QZDYDeleteVO;
import com.csi.modules.qzdy.vo.QZDYDeleteVO.QZDYDResultVO;
import com.csi.modules.qzdy.vo.QZDYEditVO;
import com.csi.modules.qzdy.vo.QZDYEditVO.QZDYEResultVO;
import com.csi.modules.qzdy.vo.QZDYQueryVO;
import com.csi.modules.qzdy.vo.QZDYQueryVO.QZDYQResultVO;
import com.csi.modules.qzdy.vo.QZDYSaveVO;
import com.csi.modules.qzdy.vo.QZDYSaveVO.QZDYSResultVO;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '', 'modules/qzdy/qZDY.html', NULL, 1, 'fa fa-file-code-o', 1);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '查看', NULL, 'qzdy:queryQZDYList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '新增', NULL, 'qzdy:saveQZDY,qzdy:saveQZDYList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '修改', NULL, 'qzdy:editQZDY,qzdy:editQZDYList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '删除', NULL, 'qzdy:deleteQZDY,qzdy:deleteQZDYList', 2, NULL, 0);


/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-28 11:25:56
 */
@RestController
@Api(value="",tags={""})
@RequestMapping("qzdy/")
public class QZDYController {
	@Autowired
	private IQZDYService qZDYService;

	/**
	 * 查询列表
	 */
	@RequestMapping(value="/queryQZDYList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("查询")
	@RequiresPermissions("qzdy:queryQZDYList")
	@ApiOperation(value="查询",notes="注意问题点")
	@ResponseBody
//	@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYQResultVO queryQZDYList(@ApiParam("查询参数")QZDYQueryVO  qZDYQueryVO){
		System.out.println("qZDYQueryVO:" + JSON.toJSONString(qZDYQueryVO));
		ValidatorUtils.validateEntity(qZDYQueryVO);
		QZDYEntity qZDYEntity = new QZDYEntity();
		BeanCopierUtils.copyProperties(qZDYQueryVO, qZDYEntity);
		List<QZDYEntity> qZDYList = qZDYService.queryQZDYEntityListForPage(qZDYEntity,qZDYQueryVO.getStartRow(),qZDYQueryVO.getEndRow());
		//统计行数,如果数据量比较大可以才线程同时处理两个语句
		Long count= qZDYService.queryQZDYEntityListForPageCount(qZDYEntity);
		QZDYQResultVO qZDYQResultVO = qZDYQueryVO.ok(qZDYList);
		qZDYQResultVO.setCount(count);
		return qZDYQResultVO;
	}
	
	
	/**
	 * 保存
	 */
	@RequestMapping(value="/saveQZDY",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("保存")
	@RequiresPermissions("qzdy:saveQZDY")
	@ApiOperation(value="保存",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYSResultVO saveQZDY(@ApiParam("保存参数")@RequestBody(required=false) QZDYSaveVO  qZDYSaveVO){
		ValidatorUtils.validateEntity(qZDYSaveVO);
		QZDYEntity qZDYEntity = new QZDYEntity();
		BeanCopierUtils.copyProperties(qZDYSaveVO, qZDYEntity);
	
		qZDYService.saveQZDYEntity(qZDYEntity);
		
		return QZDYSResultVO.ok();
	}
	
	/**
	 * 批量保存
	 */
	@RequestMapping(value="/saveQZDYList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("保存")
	@RequiresPermissions("qzdy:saveQZDYList")
	@ApiOperation(value="保存",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYSResultVO saveQZDYList(@ApiParam("保存参数")@RequestBody(required=false) List<QZDYSaveVO>  qZDYSaveVOList){
		ValidatorUtils.validateEntity(qZDYSaveVOList);
		
		QZDYEntity entity = null;
		List<QZDYEntity> entitys = new ArrayList<QZDYEntity>(qZDYSaveVOList.size());
		for (QZDYSaveVO tempVO : qZDYSaveVOList) {
			entity = new QZDYEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
	
		qZDYService.saveQZDYEntity(entitys);
		
		return QZDYSResultVO.ok();
	}
	
	/**
	 * 修改
	 */
	@RequestMapping(value="/editQZDY",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("更新")
	@RequiresPermissions("qzdy:editQZDY")
	@ApiOperation(value="更新",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYEResultVO editQZDY(@ApiParam("更新参数")@RequestBody(required=false)QZDYEditVO qZDYEditVO){
		ValidatorUtils.validateEntity(qZDYEditVO);
		QZDYEntity qZDYEntity = new QZDYEntity();
		BeanCopierUtils.copyProperties(qZDYEditVO, qZDYEntity);
	
		qZDYService.editQZDYEntity(qZDYEntity);
		
		return  QZDYEResultVO.ok();
	}
	
	/**
	 * 批量修改
	 */
	@RequestMapping(value="/updateQZDYList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("更新")
	@RequiresPermissions("qzdy:editQZDYList")
	@ApiOperation(value="更新",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYEResultVO editQZDYList(@ApiParam("更新参数")@RequestBody(required=false) List<QZDYEditVO> qZDYEditVOList){
		ValidatorUtils.validateEntity(qZDYEditVOList);
		QZDYEntity entity = null;
		List<QZDYEntity> entitys = new ArrayList<QZDYEntity>(qZDYEditVOList.size());
		for (QZDYEditVO tempVO : qZDYEditVOList) {
			entity = new QZDYEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
	
		qZDYService.editQZDYEntity(entitys);
		
		return  QZDYEResultVO.ok();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value="/deleteQZDY",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("删除")
	@RequiresPermissions("qzdy:deleteQZDY")
	@ApiOperation(value="删除",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYDResultVO deleteQZDY(@ApiParam("更新参数") QZDYDeleteVO qZDYDeleteVO){
		ValidatorUtils.validateEntity(qZDYDeleteVO);
		QZDYEntity qZDYEntity = new QZDYEntity();
		BeanCopierUtils.copyProperties( qZDYDeleteVO,qZDYEntity);
	
		qZDYService.removeQZDYEntity(qZDYEntity);
		
		return QZDYDResultVO.ok();
	}
	
	/**
	 * 批量删除
	 */
	@RequestMapping(value="/deleteQZDYList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("删除")
	@RequiresPermissions("qzdy:deleteQZDYList")
	@ApiOperation(value="删除",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_MQADMIN)
	public QZDYDResultVO deleteQZDYList(@ApiParam("更新参数") @RequestBody List<QZDYDeleteVO> qZDYDeleteVOList){
		ValidatorUtils.validateEntity(qZDYDeleteVOList);
		QZDYEntity entity = null;
		List<QZDYEntity> entitys = new ArrayList<QZDYEntity>(qZDYDeleteVOList.size());
		for (QZDYDeleteVO tempVO : qZDYDeleteVOList) {
			entity = new QZDYEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
		
		qZDYService.removeQZDYEntity(entitys);
		
		return QZDYDResultVO.ok();
	}
}
