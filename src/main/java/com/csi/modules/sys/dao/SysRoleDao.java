package com.csi.modules.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.csi.mapper.base.BaseMappper;
import com.csi.modules.sys.entity.SysRoleEntity;

/**
 * 角色管理
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2016年9月18日 上午9:33:33
 */
@Mapper
public interface SysRoleDao extends BaseMappper<SysRoleEntity,Long> {
	
	List<SysRoleEntity> queryRoleEntitiesByDeptId(@Param("deptIds")List<Long> deptIds);
	
}
