package com.csi.modules.testCase.service;

import com.csi.modules.testCase.entity.TestCaseEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-24 16:56:24
 */
public interface ITestCaseService {

	List<TestCaseEntity> queryTestCaseEntityListForPage(TestCaseEntity testCaseEntity,Long startRow, Long endRow);
	
	Long queryTestCaseEntityListForPageCount(TestCaseEntity testCaseEntity);
	
	List<TestCaseEntity> queryTestCaseEntityListAll(TestCaseEntity testCaseEntity);
	
	int saveTestCaseEntity(TestCaseEntity testCaseEntity);
	
	int saveTestCaseEntity(List<TestCaseEntity> testCaseEntitys);
	
	int editTestCaseEntity(TestCaseEntity testCaseEntity);
	
	int editTestCaseEntity(List<TestCaseEntity> testCaseEntitys);
	
	int removeTestCaseEntity(TestCaseEntity testCaseEntity);
	
	int removeTestCaseEntity(List<TestCaseEntity> testCaseEntity);
}
