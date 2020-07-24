package com.csi.modules.sys.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.common.annotation.DataSource;
import com.csi.common.baseenum.DataSourceEnum;
import com.csi.modules.sys.dao.SysLogDao;
import com.csi.modules.sys.entity.SysLogEntity;
import com.csi.modules.sys.service.SysLogService;


@Service("sysLogService")
public class SysLogServiceImpl implements SysLogService {
	@Autowired
	private SysLogDao sysLogDao;
	
	@Override
	public SysLogEntity queryObject(Long id){
		return sysLogDao.queryObject(id);
	}
	
	@Override
	public List<SysLogEntity> queryList(Map<String, Object> map){
		return sysLogDao.queryList(map);
	}
	
	@Override
	public int queryTotal(Map<String, Object> map){
		return sysLogDao.queryTotal(map);
	}
	
	@Override
	@DataSource(DataSourceEnum.DATASOURCE_MASTER)
	public void save(SysLogEntity sysLog){
		sysLogDao.insert(sysLog);
	}
	
	@Override
	public void delete(Long id){
		sysLogDao.delete(id);
	}
	
	@Override
	public void deleteBatch(Long[] ids){
		sysLogDao.deleteBatch(ids);
	}
	
}
