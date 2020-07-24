package com.csi.modules.sys.service;

import java.util.List;
import java.util.Map;

import com.csi.modules.sys.entity.SysDeptEntity;
import com.csi.modules.sys.entity.SysDeptMergeEntity;

/**
 * 部门管理
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-06-20 15:23:47
 */
public interface SysDeptService {
	
	SysDeptEntity queryObject(Long deptId);
	
	/**
	 * 超级管理员  查看所有的部门
	 * @return
	 */
	List<SysDeptEntity> queryAllDept();
	
	List<SysDeptEntity> queryDeptByUserId(Long userId);
	
	List<SysDeptEntity> queryList(Map<String, Object> map);

	void save(SysDeptEntity sysDept);
	
	void update(SysDeptEntity sysDept);
	
	void delete(Long deptId);

	/**
	 * 查询子部门ID列表
	 * @param parentId  上级部门ID
	 */
	List<Long> queryDetpIdList(Long parentId);

	/**
	 * 获取子部门ID(包含本部门ID)，用于数据过滤
	 */
	String getSubDeptIdList(Long deptId);

	/**
	 * 获取省市联动的JSON
	 * @param map
	 * @return
	 */
	List<SysDeptEntity> queryDetpByParentId(Long parentId);
	
	public List<SysDeptMergeEntity> queryAllDeptJsonData();
	
	List<SysDeptEntity> queryByTypeAndParentId(Integer parentId,Integer type);
	
}
