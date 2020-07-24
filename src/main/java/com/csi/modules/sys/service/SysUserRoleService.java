package com.csi.modules.sys.service;

import java.util.List;

import com.csi.modules.sys.entity.SysUserRoleEntity;



/**
 * 用户与角色对应关系
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2016年9月18日 上午9:43:24
 */
public interface SysUserRoleService {
	
	void saveOrUpdate(Long userId, List<Long> roleIdList);
	
	/**
	 * 根据用户ID，获取角色ID列表
	 */
	List<Long> queryRoleIdList(Long userId);
	
	List<String> queryRoleNameList(Integer userId);
	
	void delete(Long userId);
	
	void save(SysUserRoleEntity userRoleEntity);
}
