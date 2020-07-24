package com.csi.modules.testCase.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.common.exception.AutoRetryException;
import com.csi.modules.testCase.dao.TestCaseDao;
import com.csi.modules.testCase.entity.TestCaseEntity;
import com.csi.modules.testCase.service.ITestCaseService;




@Service("testCaseService")
public class TestCaseServiceImpl implements ITestCaseService {
	@Autowired
	private TestCaseDao testCaseDao;
	
	@Override
	public List<TestCaseEntity> queryTestCaseEntityListForPage(TestCaseEntity testCaseEntity,Long startRow, Long endRow){
		return testCaseDao.selectEntityListForPage(testCaseEntity,startRow,endRow);
	}
	
	@Override
	public Long queryTestCaseEntityListForPageCount(TestCaseEntity testCaseEntity){
		return testCaseDao.selectEntityListForPageCount(testCaseEntity);
	}
	
	@Override
	public List<TestCaseEntity> queryTestCaseEntityListAll(TestCaseEntity testCaseEntity){
		return testCaseDao.selectEntityListAll(testCaseEntity);
	}
	
	@Override
	public int saveTestCaseEntity(TestCaseEntity testCaseEntity){
		return testCaseDao.insertEntity(testCaseEntity);
	}
	
	@Override
	public int saveTestCaseEntity(List<TestCaseEntity> testCaseEntitys){
		return testCaseDao.batchInsertEntity(testCaseEntitys);
	}
	
	@Override
	public int editTestCaseEntity(TestCaseEntity testCaseEntity){
		int size = testCaseDao.updateEntity(testCaseEntity);
		if(size==0){
			throw new AutoRetryException();
		}
		return size;
	}
	
	@Override
	public int editTestCaseEntity(List<TestCaseEntity> testCaseEntitys){
		int size = testCaseDao.batchUpdateEntity(testCaseEntitys);
		if(size==testCaseEntitys.size()){
			throw new AutoRetryException();
		}
		return size;
	}
	
	@Override
	public int removeTestCaseEntity(TestCaseEntity testCaseEntity){
		return testCaseDao.deleteEntity(testCaseEntity);
	}
	
	@Override
	public int removeTestCaseEntity(List<TestCaseEntity> testCaseEntitys){
		return testCaseDao.batchDeleteEntity(testCaseEntitys);
	}
}
