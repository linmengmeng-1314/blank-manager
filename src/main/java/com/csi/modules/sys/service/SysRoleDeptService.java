package com.csi.modules.sys.service;

import java.util.List;

import com.csi.modules.sys.entity.SysRoleDeptEntity;


/**
 * 角色与部门对应关系
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017年6月21日 23:42:30
 */
public interface SysRoleDeptService {
	
	void saveOrUpdate(Long roleId, List<Long> deptIdList);
	
	/**
	 * 根据角色ID，获取部门ID列表
	 */
	List<Long> queryDeptIdList(Long roleId);
	
	public List<SysRoleDeptEntity> querySysRoleDeptBacth(List<Long> roleIdList);
	
}
