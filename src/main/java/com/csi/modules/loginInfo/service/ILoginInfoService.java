package com.csi.modules.loginInfo.service;

import java.util.List;

import com.csi.modules.loginInfo.entity.LoginInfoEntity;

/**
 * 璁板綍鐧婚檰淇℃伅
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-05 09:59:36
 */
public interface ILoginInfoService {

	List<LoginInfoEntity> queryLoginInfoEntityListForPage(LoginInfoEntity loginInfoEntity,Long startRow, Long endRow);
	
	Long queryLoginInfoEntityListForPageCount(LoginInfoEntity loginInfoEntity);
	
	List<LoginInfoEntity> queryLoginInfoEntityListAll(LoginInfoEntity loginInfoEntity);
	
	int saveLoginInfoEntity(LoginInfoEntity loginInfoEntity);
	
	int saveLoginInfoEntity(List<LoginInfoEntity> loginInfoEntitys);
	
	int editLoginInfoEntity(LoginInfoEntity loginInfoEntity);
	
	int editLoginInfoEntity(List<LoginInfoEntity> loginInfoEntitys);
	
	int removeLoginInfoEntity(LoginInfoEntity loginInfoEntity);
	
	int removeLoginInfoEntity(List<LoginInfoEntity> loginInfoEntity);
}
