package com.csi.modules.loginInfo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import com.csi.modules.loginInfo.vo.LoginInfoMergeQueryVO;
import com.csi.modules.loginInfo.dao.LoginInfoMergeDao;
import com.csi.modules.loginInfo.entity.LoginInfoMergeEntity;
import com.csi.modules.loginInfo.service.ILoginInfoMergeService;
import com.csi.common.utils.ShiroUtils;
import com.csi.common.annotation.AutoRetry;
import com.csi.common.exception.AutoRetryException;




@Service("loginInfoMergeService")
public class LoginInfoMergeServiceImpl implements ILoginInfoMergeService {
	@Autowired
	private LoginInfoMergeDao loginInfoMergeDao;
	@Override
	public List<LoginInfoMergeEntity> queryLoginInfoMergeEntityListForPage(LoginInfoMergeEntity loginInfoMergeEntity,Long startRow, Long endRow){
		return loginInfoMergeDao.selectEntityListForPage(loginInfoMergeEntity,startRow,endRow);
	}
	
	@Override
	public Long queryLoginInfoMergeEntityListForPageCount(LoginInfoMergeEntity loginInfoMergeEntity){
		return loginInfoMergeDao.selectEntityListForPageCount(loginInfoMergeEntity);
	}
}
