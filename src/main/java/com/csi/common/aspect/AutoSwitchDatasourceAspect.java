package com.csi.common.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.csi.common.annotation.DataSource;
import com.csi.datasource.MultiDataSource;

@Aspect
@Component
@Order(Integer.MAX_VALUE)
public class AutoSwitchDatasourceAspect {

	
	@Pointcut("@annotation(com.csi.common.annotation.DataSource)")
	public void logPointCut() { 
		
	}
	@Before("logPointCut()&& @annotation(ds)")
	public void before(DataSource ds) {
		MultiDataSource.switchSource(ds.value());
	}
	@After("logPointCut()&& @annotation(ds)")
	public void after(DataSource ds) {
		MultiDataSource.clear();
	}
}
