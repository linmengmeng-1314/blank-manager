package com.csi.modules.sys.dao;

import org.apache.ibatis.annotations.Mapper;

import com.csi.mapper.base.BaseMappper;
import com.csi.modules.sys.entity.SysUserTokenEntity;

/**
 * 系统用户Token
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-03-23 15:22:07
 */
@Mapper
public interface SysUserTokenDao extends BaseMappper<SysUserTokenEntity,Long> {
    
    SysUserTokenEntity queryByUserId(Long userId);

    SysUserTokenEntity queryByToken(String token);
	
}
