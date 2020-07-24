package com.csi.modules.api.dao;

import org.apache.ibatis.annotations.Mapper;

import com.csi.mapper.base.BaseMappper;
import com.csi.modules.api.entity.UserEntity;

/**
 * 用户
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-03-23 15:22:06
 */
@Mapper
public interface UserDao extends BaseMappper<UserEntity,Long> {

    UserEntity queryByMobile(String mobile);
}
