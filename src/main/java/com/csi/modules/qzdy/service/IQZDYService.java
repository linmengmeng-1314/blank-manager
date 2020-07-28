package com.csi.modules.qzdy.service;

import com.csi.modules.qzdy.entity.QZDYEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-28 11:25:56
 */
public interface IQZDYService {

	List<QZDYEntity> queryQZDYEntityListForPage(QZDYEntity qZDYEntity,Long startRow, Long endRow);
	
	Long queryQZDYEntityListForPageCount(QZDYEntity qZDYEntity);
	
	List<QZDYEntity> queryQZDYEntityListAll(QZDYEntity qZDYEntity);
	
	int saveQZDYEntity(QZDYEntity qZDYEntity);
	
	int saveQZDYEntity(List<QZDYEntity> qZDYEntitys);
	
	int editQZDYEntity(QZDYEntity qZDYEntity);
	
	int editQZDYEntity(List<QZDYEntity> qZDYEntitys);
	
	int removeQZDYEntity(QZDYEntity qZDYEntity);
	
	int removeQZDYEntity(List<QZDYEntity> qZDYEntity);
}
