package com.csi.modules.api.service.impl;


import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.common.exception.CheckException;
import com.csi.common.validator.Assert;
import com.csi.modules.api.dao.UserDao;
import com.csi.modules.api.entity.UserEntity;
import com.csi.modules.api.service.UserService;



@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	
	@Override
	public UserEntity queryObject(Long userId){
		return userDao.queryObject(userId);
	}
	
	@Override
	public List<UserEntity> queryList(Map<String, Object> map){
		return userDao.queryList(map);
	}
	
	@Override
	public int queryTotal(Map<String, Object> map){
		return userDao.queryTotal(map);
	}
	
	@Override
	public void save(String mobile, String password){
		UserEntity user = new UserEntity();
		user.setMobile(mobile);
		user.setUsername(mobile);
		user.setPassword(DigestUtils.sha256Hex(password));
		user.setCreateTime(new Date());
		userDao.insert(user);
	}
	
	@Override
	public void update(UserEntity user){
		userDao.update(user);
	}
	
	@Override
	public void delete(Long userId){
		userDao.delete(userId);
	}
	
	@Override
	public void deleteBatch(Long[] userIds){
		userDao.deleteBatch(userIds);
	}

	@Override
	public UserEntity queryByMobile(String mobile) {
		return userDao.queryByMobile(mobile);
	}

	@Override
	public long login(String mobile, String password) {
		UserEntity user = queryByMobile(mobile);
		Assert.isNull(user, "手机号或密码错误");

		//密码错误
		if(!user.getPassword().equals(DigestUtils.sha256Hex(password))){
			throw new CheckException("手机号或密码错误");
		}

		return user.getUserId();
	}
}
