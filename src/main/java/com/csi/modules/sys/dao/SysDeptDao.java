package com.csi.modules.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.csi.mapper.base.BaseMappper;
import com.csi.modules.sys.entity.SysDeptEntity;
import com.csi.modules.sys.entity.SysDeptMergeEntity;
import com.csi.modules.sys.entity.SysDeptTypeCount;

/**
 * 部门管理
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-06-20 15:23:47
 */
@Mapper
public interface SysDeptDao extends BaseMappper<SysDeptEntity,Long> {

	/**
	 * 超级管理员  查看所有的部门
	 * @return
	 */
	List<SysDeptEntity> selectAllDept();
	
	/**
	 * 普通管理员只能查看自己所在的部门
	 * @return
	 */
	List<SysDeptEntity> selectDeptByUserId(Long userId);
	
    /**
     * 查询子部门ID列表
     * @param parentId  上级部门ID
     */
    List<Long> queryDetpIdList(Long parentId);
    
    /**
     * 查询子部门name列表
     * @param parentId  上级部门ID
     */
    List<SysDeptEntity> selectDeptByParentId(Long parentId);
    
    List<SysDeptEntity> selectByTypeAndParentId(@Param("parentId")Integer parentId,@Param("type")Integer type);
    
    List<SysDeptEntity> selectAllEntity();
    
    List<SysDeptEntity> selectDeptByRoleId(List<Long> roleIdList);
    
    List<SysDeptMergeEntity> selectAllDeptMerge();
    
    List<SysDeptTypeCount> selectDeptTypeCount();
}
