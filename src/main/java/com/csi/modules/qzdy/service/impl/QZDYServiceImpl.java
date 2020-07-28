package com.csi.modules.qzdy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.csi.common.exception.AutoRetryException;
import com.csi.modules.qzdy.dao.QZDYDao;
import com.csi.modules.qzdy.entity.QZDYEntity;
import com.csi.modules.qzdy.service.IQZDYService;




@Service("qZDYService")
public class QZDYServiceImpl implements IQZDYService {
	@Autowired
	private QZDYDao qZDYDao;
	
	@Override
	public List<QZDYEntity> queryQZDYEntityListForPage(QZDYEntity qZDYEntity,Long startRow, Long endRow){
		return qZDYDao.selectEntityListForPage(qZDYEntity,startRow,endRow);
	}
	
	@Override
	public Long queryQZDYEntityListForPageCount(QZDYEntity qZDYEntity){
		return qZDYDao.selectEntityListForPageCount(qZDYEntity);
	}
	
	@Override
	public List<QZDYEntity> queryQZDYEntityListAll(QZDYEntity qZDYEntity){
		return qZDYDao.selectEntityListAll(qZDYEntity);
	}
	
	@Override
	public int saveQZDYEntity(QZDYEntity qZDYEntity){
		return qZDYDao.insertEntity(qZDYEntity);
	}
	
	@Override
	public int saveQZDYEntity(List<QZDYEntity> qZDYEntitys){
		return qZDYDao.batchInsertEntity(qZDYEntitys);
	}
	
	@Override
	public int editQZDYEntity(QZDYEntity qZDYEntity){
		System.out.println("qZDYEntity:" + qZDYEntity);
		System.out.println("qZDYEntity:" + JSON.toJSONString(qZDYEntity));
		int size = qZDYDao.updateEntity(qZDYEntity);
		if(size==0){
			throw new AutoRetryException();
		}
		return size;
	}
	
	@Override
	public int editQZDYEntity(List<QZDYEntity> qZDYEntitys){
		int size = qZDYDao.batchUpdateEntity(qZDYEntitys);
		if(size==qZDYEntitys.size()){
			throw new AutoRetryException();
		}
		return size;
	}
	
	@Override
	public int removeQZDYEntity(QZDYEntity qZDYEntity){
		return qZDYDao.deleteEntity(qZDYEntity);
	}
	
	@Override
	public int removeQZDYEntity(List<QZDYEntity> qZDYEntitys){
		return qZDYDao.batchDeleteEntity(qZDYEntitys);
	}
}
