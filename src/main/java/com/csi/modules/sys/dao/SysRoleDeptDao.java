package com.csi.modules.sys.dao;

import org.apache.ibatis.annotations.Mapper;

import com.csi.mapper.base.BaseMappper;
import com.csi.modules.sys.entity.SysRoleDeptEntity;

import java.util.List;

/**
 * 角色与部门对应关系
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017年6月21日 23:33:46
 */
@Mapper
public interface SysRoleDeptDao extends BaseMappper<SysRoleDeptEntity,Long> {
	
	/**
	 * 根据角色ID，获取部门ID列表
	 */
	List<Long> queryDeptIdList(Long roleId);

	List<SysRoleDeptEntity> querySysRoleDeptBacth(List<Long> roleIdList);
}
