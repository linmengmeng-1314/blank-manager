package com.csi.modules.loginInfo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.common.exception.AutoRetryException;
import com.csi.common.utils.ShiroUtils;
import com.csi.modules.loginInfo.dao.LoginInfoDao;
import com.csi.modules.loginInfo.entity.LoginInfoEntity;
import com.csi.modules.loginInfo.service.ILoginInfoService;
import com.csi.modules.sys.dao.SysRoleDeptDao;
import com.csi.modules.sys.entity.SysRoleDeptEntity;




@Service("loginInfoService")
public class LoginInfoServiceImpl implements ILoginInfoService {
	@Autowired
	private LoginInfoDao loginInfoDao;
	@Autowired
	private SysRoleDeptDao sysRoleDeptDao;
	
	@Override
	public List<LoginInfoEntity> queryLoginInfoEntityListForPage(LoginInfoEntity loginInfoEntity,Long startRow, Long endRow){
        List<SysRoleDeptEntity> sysRoleDeptEntity = sysRoleDeptDao.querySysRoleDeptBacth(ShiroUtils.getUserEntity().getRoleIdList());
        loginInfoEntity.setSysRoleDeptEntity(sysRoleDeptEntity);
		return loginInfoDao.selectEntityListForPage(loginInfoEntity,startRow,endRow);
	}
	
	@Override
	public Long queryLoginInfoEntityListForPageCount(LoginInfoEntity loginInfoEntity){
        List<SysRoleDeptEntity> sysRoleDeptEntity = sysRoleDeptDao.querySysRoleDeptBacth(ShiroUtils.getUserEntity().getRoleIdList());
        loginInfoEntity.setSysRoleDeptEntity(sysRoleDeptEntity);
		return loginInfoDao.selectEntityListForPageCount(loginInfoEntity);
	}
	
	@Override
	public List<LoginInfoEntity> queryLoginInfoEntityListAll(LoginInfoEntity loginInfoEntity){
        List<SysRoleDeptEntity> sysRoleDeptEntity = sysRoleDeptDao.querySysRoleDeptBacth(ShiroUtils.getUserEntity().getRoleIdList());
        loginInfoEntity.setSysRoleDeptEntity(sysRoleDeptEntity);
		return loginInfoDao.selectEntityListAll(loginInfoEntity);
	}
	
	@Override
	public int saveLoginInfoEntity(LoginInfoEntity loginInfoEntity){
//		loginInfoEntity.setDeptId(ShiroUtils.getDeptId());
		return loginInfoDao.insertEntity(loginInfoEntity);
	}
	
	@Override
	public int saveLoginInfoEntity(List<LoginInfoEntity> loginInfoEntitys){
		return loginInfoDao.batchInsertEntity(loginInfoEntitys);
	}
	
	@Override
	public int editLoginInfoEntity(LoginInfoEntity loginInfoEntity){
		int size = loginInfoDao.updateEntity(loginInfoEntity);
		if(size==0){
			throw new AutoRetryException();
		}
		return size;
	}
	
	@Override
	public int editLoginInfoEntity(List<LoginInfoEntity> loginInfoEntitys){
		int size = loginInfoDao.batchUpdateEntity(loginInfoEntitys);
		if(size==loginInfoEntitys.size()){
			throw new AutoRetryException();
		}
		return size;
	}
	
	@Override
	public int removeLoginInfoEntity(LoginInfoEntity loginInfoEntity){
		return loginInfoDao.deleteEntity(loginInfoEntity);
	}
	
	@Override
	public int removeLoginInfoEntity(List<LoginInfoEntity> loginInfoEntitys){
		return loginInfoDao.batchDeleteEntity(loginInfoEntitys);
	}
}
