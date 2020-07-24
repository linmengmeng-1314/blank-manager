package com.csi.modules.loginInfo.service;

import com.csi.modules.loginInfo.entity.LoginInfoMergeEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-10 09:20:30
 */
public interface ILoginInfoMergeService {

	List<LoginInfoMergeEntity> queryLoginInfoMergeEntityListForPage(LoginInfoMergeEntity loginInfoMergeEntity,Long startRow, Long endRow);
	
	Long queryLoginInfoMergeEntityListForPageCount(LoginInfoMergeEntity loginInfoMergeEntity);
}
