package com.csi.modules.testCase.controller;

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
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.validator.ValidatorUtils;
import com.csi.modules.testCase.entity.TestCaseEntity;
import com.csi.modules.testCase.service.ITestCaseService;
import com.csi.modules.testCase.vo.TestCaseDeleteVO;
import com.csi.modules.testCase.vo.TestCaseDeleteVO.TestCaseDResultVO;
import com.csi.modules.testCase.vo.TestCaseEditVO;
import com.csi.modules.testCase.vo.TestCaseEditVO.TestCaseEResultVO;
import com.csi.modules.testCase.vo.TestCaseQueryVO;
import com.csi.modules.testCase.vo.TestCaseQueryVO.TestCaseQResultVO;
import com.csi.modules.testCase.vo.TestCaseSaveVO;
import com.csi.modules.testCase.vo.TestCaseSaveVO.TestCaseSResultVO;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '', 'modules/testCase/testCase.html', NULL, 1, 'fa fa-file-code-o', 1);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '查看', NULL, 'testCase:queryTestCaseList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '新增', NULL, 'testCase:saveTestCase,testCase:saveTestCaseList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '修改', NULL, 'testCase:editTestCase,testCase:editTestCaseList', 2, NULL, 0);
//INSERT INTO `sys_menu` (`parent_id`, `name`, `url`, `perms`, `type`, `icon`, `order_num`) VALUES ( 1, '删除', NULL, 'testCase:deleteTestCase,testCase:deleteTestCaseList', 2, NULL, 0);


/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-24 16:56:24
 */
@RestController
@Api(value="",tags={""})
@RequestMapping("testCase/")
public class TestCaseController {
	@Autowired
	private ITestCaseService testCaseService;

	/**
	 * 查询列表
	 */
	@RequestMapping(value="/queryTestCaseList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("查询")
	@RequiresPermissions("testCase:queryTestCaseList")
	@ApiOperation(value="查询",notes="注意问题点")
	@ResponseBody
	//@DataSource(DataSourceEnum.DATASOURCE_UNIFIED_CRTIFY) //使用多数据源时使用此注解切换数据库
	public TestCaseQResultVO queryTestCaseList(@ApiParam("查询参数")TestCaseQueryVO  testCaseQueryVO){
		ValidatorUtils.validateEntity(testCaseQueryVO);
		TestCaseEntity testCaseEntity = new TestCaseEntity();
		BeanCopierUtils.copyProperties(testCaseQueryVO, testCaseEntity);
		List<TestCaseEntity> testCaseList = testCaseService.queryTestCaseEntityListForPage(testCaseEntity,testCaseQueryVO.getStartRow(),testCaseQueryVO.getRows());
		//统计行数,如果数据量比较大可以才线程同时处理两个语句
		Long count= testCaseService.queryTestCaseEntityListForPageCount(testCaseEntity);
		TestCaseQResultVO testCaseQResultVO = testCaseQueryVO.ok(testCaseList);
		testCaseQResultVO.setCount(count);
		return testCaseQResultVO;
	}
	
	
	/**
	 * 保存
	 */
	@RequestMapping(value="/saveTestCase",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("保存")
	@RequiresPermissions("testCase:saveTestCase")
	@ApiOperation(value="保存",notes="注意问题点")
	@ResponseBody
	public TestCaseSResultVO saveTestCase(@ApiParam("保存参数")@RequestBody(required=false) TestCaseSaveVO  testCaseSaveVO){
		ValidatorUtils.validateEntity(testCaseSaveVO);
		TestCaseEntity testCaseEntity = new TestCaseEntity();
		BeanCopierUtils.copyProperties(testCaseSaveVO, testCaseEntity);
	
		testCaseService.saveTestCaseEntity(testCaseEntity);
		
		return TestCaseSResultVO.ok();
	}
	
	/**
	 * 批量保存
	 */
	@RequestMapping(value="/saveTestCaseList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("保存")
	@RequiresPermissions("testCase:saveTestCaseList")
	@ApiOperation(value="保存",notes="注意问题点")
	@ResponseBody
	public TestCaseSResultVO saveTestCaseList(@ApiParam("保存参数")@RequestBody(required=false) List<TestCaseSaveVO>  testCaseSaveVOList){
		ValidatorUtils.validateEntity(testCaseSaveVOList);
		
		TestCaseEntity entity = null;
		List<TestCaseEntity> entitys = new ArrayList<TestCaseEntity>(testCaseSaveVOList.size());
		for (TestCaseSaveVO tempVO : testCaseSaveVOList) {
			entity = new TestCaseEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
	
		testCaseService.saveTestCaseEntity(entitys);
		
		return TestCaseSResultVO.ok();
	}
	
	/**
	 * 修改
	 */
	@RequestMapping(value="/editTestCase",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("更新")
	@RequiresPermissions("testCase:editTestCase")
	@ApiOperation(value="更新",notes="注意问题点")
	@ResponseBody
	public TestCaseEResultVO editTestCase(@ApiParam("更新参数")@RequestBody(required=false)TestCaseEditVO testCaseEditVO){
		ValidatorUtils.validateEntity(testCaseEditVO);
		TestCaseEntity testCaseEntity = new TestCaseEntity();
		BeanCopierUtils.copyProperties(testCaseEditVO, testCaseEntity);
	
		testCaseService.editTestCaseEntity(testCaseEntity);
		
		return  TestCaseEResultVO.ok();
	}
	
	/**
	 * 批量修改
	 */
	@RequestMapping(value="/updateTestCaseList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("更新")
	@RequiresPermissions("testCase:editTestCaseList")
	@ApiOperation(value="更新",notes="注意问题点")
	@ResponseBody
	public TestCaseEResultVO editTestCaseList(@ApiParam("更新参数")@RequestBody(required=false) List<TestCaseEditVO> testCaseEditVOList){
		ValidatorUtils.validateEntity(testCaseEditVOList);
		TestCaseEntity entity = null;
		List<TestCaseEntity> entitys = new ArrayList<TestCaseEntity>(testCaseEditVOList.size());
		for (TestCaseEditVO tempVO : testCaseEditVOList) {
			entity = new TestCaseEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
	
		testCaseService.editTestCaseEntity(entitys);
		
		return  TestCaseEResultVO.ok();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value="/deleteTestCase",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("删除")
	@RequiresPermissions("testCase:deleteTestCase")
	@ApiOperation(value="删除",notes="注意问题点")
	@ResponseBody
	public TestCaseDResultVO deleteTestCase(@ApiParam("更新参数") TestCaseDeleteVO testCaseDeleteVO){
		ValidatorUtils.validateEntity(testCaseDeleteVO);
		TestCaseEntity testCaseEntity = new TestCaseEntity();
		BeanCopierUtils.copyProperties( testCaseDeleteVO,testCaseEntity);
	
		testCaseService.removeTestCaseEntity(testCaseEntity);
		
		return TestCaseDResultVO.ok();
	}
	
	/**
	 * 批量删除
	 */
	@RequestMapping(value="/deleteTestCaseList",method= {RequestMethod.POST,RequestMethod.GET})
	@CtrlLog("删除")
	@RequiresPermissions("testCase:deleteTestCaseList")
	@ApiOperation(value="删除",notes="注意问题点")
	@ResponseBody
	public TestCaseDResultVO deleteTestCaseList(@ApiParam("更新参数") @RequestBody List<TestCaseDeleteVO> testCaseDeleteVOList){
		ValidatorUtils.validateEntity(testCaseDeleteVOList);
		TestCaseEntity entity = null;
		List<TestCaseEntity> entitys = new ArrayList<TestCaseEntity>(testCaseDeleteVOList.size());
		for (TestCaseDeleteVO tempVO : testCaseDeleteVOList) {
			entity = new TestCaseEntity();
			BeanCopierUtils.copyProperties( tempVO,entity);
			entitys.add(entity);
		}
		
		testCaseService.removeTestCaseEntity(entitys);
		
		return TestCaseDResultVO.ok();
	}
}
