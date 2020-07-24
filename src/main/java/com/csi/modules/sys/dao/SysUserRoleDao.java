package com.csi.modules.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.csi.mapper.base.BaseMappper;
import com.csi.modules.sys.entity.SysUserRoleEntity;

/**
 * 用户与角色对应关系
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2016年9月18日 上午9:34:46
 */
@Mapper
public interface SysUserRoleDao extends BaseMappper<SysUserRoleEntity,Long> {
	
	/**
	 * 根据用户ID，获取角色ID列表
	 */
	List<Long> queryRoleIdList(Long userId);
	
	/**
	 * 根据用户ID，获取角色名称列表
	 */
	List<String> selectRoleNameList(Integer userId);
}
