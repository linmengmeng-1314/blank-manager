package com.csi.modules.sys.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csi.modules.sys.dao.SysDeptDao;
import com.csi.modules.sys.entity.SysDeptEntity;
import com.csi.modules.sys.entity.SysDeptMergeEntity;
import com.csi.modules.sys.entity.SysDeptTypeCount;
import com.csi.modules.sys.service.SysDeptService;



@Service("sysDeptService")
public class SysDeptServiceImpl implements SysDeptService {
	@Autowired
	private SysDeptDao sysDeptDao;
	
	/**
	 * 超级管理员  查看所有的部门
	 * @return
	 */
	@Override
	public List<SysDeptEntity> queryAllDept(){
		return sysDeptDao.selectAllDept();
	}
	
	/**
	 * 普通管理员只能查看自己所在的部门
	 * @return
	 */
	@Override
	public List<SysDeptEntity> queryDeptByUserId(Long userId){
		return sysDeptDao.selectDeptByUserId(userId);
	}
	
	@Override
	public SysDeptEntity queryObject(Long deptId){
		return sysDeptDao.queryObject(deptId);
	}
	
	@Override
	public List<SysDeptEntity> queryList(Map<String, Object> map){
		return sysDeptDao.queryList(map);
	}
	
	@Override
	public void save(SysDeptEntity sysDept){
		if (sysDept.getParentId() == 0) {
			sysDept.setType(0);
		}else {
			SysDeptEntity parentDept = queryObject(sysDept.getParentId());
			sysDept.setType(parentDept.getType() + 1);
		}
		if (sysDept.getOrderNum() == null) {
			sysDept.setOrderNum(0);
		}
		sysDeptDao.insert(sysDept);
	}
	
	@Override
	public void update(SysDeptEntity sysDept){
		if (sysDept.getOrderNum() == null) {
			sysDept.setOrderNum(0);
		}
		sysDeptDao.update(sysDept);
	}
	
	@Override
	public void delete(Long deptId){
		sysDeptDao.delete(deptId);
	}

	@Override
	public List<Long> queryDetpIdList(Long parentId) {
		return sysDeptDao.queryDetpIdList(parentId);
	}

	@Override
	public String getSubDeptIdList(Long deptId){
		String deptFilter = StringUtils.join(getSubDeptIdListTemp(deptId), ",");
		return deptFilter;
	}
	
	public List<Long> getSubDeptIdListTemp(Long deptId){
		//部门及子部门ID列表
		List<Long> deptIdList = new ArrayList<>();

		//获取子部门ID
		List<Long> subIdList = queryDetpIdList(deptId);
		getDeptTreeList(subIdList, deptIdList);

		//添加本部门
		deptIdList.add(deptId);

		return deptIdList;
	}

	/**
	 * 递归
	 */
	public void getDeptTreeList(List<Long> subIdList, List<Long> deptIdList){
		for(Long deptId : subIdList){
			List<Long> list = queryDetpIdList(deptId);
			if(list.size() > 0){
				getDeptTreeList(list, deptIdList);
			}

			deptIdList.add(deptId);
		}
	}
	
	@Override
	public List<SysDeptEntity> queryDetpByParentId(Long parentId){
		return sysDeptDao.selectDeptByParentId(parentId);
	}
	
	@Override
	public List<SysDeptMergeEntity> queryAllDeptJsonData() {
		
		List<SysDeptTypeCount> deptTypeCount = sysDeptDao.selectDeptTypeCount();
		
		Map<Long,SysDeptMergeEntity> countryMap = null;
		
		Map<Long,List<SysDeptMergeEntity>> countryIdprovinceListMap = null;
		
		Map<Long,List<SysDeptMergeEntity>> provinceIdCityListMap = null;
		
		Map<Long,List<SysDeptMergeEntity>> cityIdAreaListMap = null;
		
		
		for (SysDeptTypeCount typeCount : deptTypeCount) {
			if (typeCount.getType() == 0) {
				countryMap = new HashMap<Long, SysDeptMergeEntity>(typeCount.getCount());
				countryIdprovinceListMap = new HashMap<Long, List<SysDeptMergeEntity>>(typeCount.getCount());
			}else if (typeCount.getType() == 1) {
				provinceIdCityListMap = new HashMap<Long, List<SysDeptMergeEntity>>(typeCount.getCount());
			}else if (typeCount.getType() == 2) {
				cityIdAreaListMap = new HashMap<Long, List<SysDeptMergeEntity>>(typeCount.getCount());
			}
		}
		
		List<SysDeptMergeEntity> allDeptMerge = sysDeptDao.selectAllDeptMerge();
		
		List<SysDeptMergeEntity> entityList = null;
		
		for (SysDeptMergeEntity entity : allDeptMerge) {
			if (entity.getType() == 0) {
				entityList = countryIdprovinceListMap.get(entity.getId());//省实体列表
				entity.setChildren(entityList);
				entity.setParentName("");
				countryMap.put(entity.getId(), entity);
			}else if (entity.getType() == 1) {
				entityList = provinceIdCityListMap.get(entity.getId());//市实体列表
				entity.setChildren(entityList);
				entityList = countryIdprovinceListMap.get(entity.getParentId());
				if (entityList == null) {
					entityList = new ArrayList<SysDeptMergeEntity>();
				}
				entityList.add(entity);
				countryIdprovinceListMap.put(entity.getParentId(), entityList);
			}else if (entity.getType() == 2) {
				entityList = cityIdAreaListMap.get(entity.getId());//区实体列表
				entity.setChildren(entityList);
				entityList = provinceIdCityListMap.get(entity.getParentId());
				if (entityList == null) {
					entityList = new ArrayList<SysDeptMergeEntity>();
				}
				entityList.add(entity);
				provinceIdCityListMap.put(entity.getParentId(), entityList);
			}else if (entity.getType() == 3) {
				entityList = cityIdAreaListMap.get(entity.getParentId());
				if (entityList == null) {
					entityList = new ArrayList<SysDeptMergeEntity>();
				}
				entityList.add(entity);
				cityIdAreaListMap.put(entity.getParentId(), entityList);
			}
		}
		entityList = new ArrayList<SysDeptMergeEntity>(countryMap.values());
		Collections.sort(entityList,  new Comparator<SysDeptMergeEntity> (){
			@Override
			public int compare(SysDeptMergeEntity entity1, SysDeptMergeEntity entity2) {
				return entity1.getOrderNum().compareTo(entity2.getOrderNum());
			}
		});
		return entityList;
	}
	//没有中国的数据格式
//	public List<Province> queryAllDeptJsonData() {
//		
//		List<SysDeptEntity> allDept = sysDeptDao.selectAllDept();
//		
//		Map<Long,String> provinceIdNameMap = new HashMap<Long, String>();
//		Map<Long,List<Long>> provinceIdCityIdListMap = new HashMap<Long, List<Long>>();
//		
//		Map<Long,SysDeptEntity> cityMap = new HashMap<Long, SysDeptEntity>();
//		Map<Long,List<Long>> cityIdAreaIdListMap = new HashMap<Long, List<Long>>();
//		
//		Map<Long,SysDeptEntity> areaMap = new HashMap<Long, SysDeptEntity>();
//		
//		for (SysDeptEntity entity : allDept) {
//			if (entity.getType() == 1) {
//				provinceIdNameMap.put(entity.getDeptId(), entity.getName());
//			}else if (entity.getType() == 2) {
//				cityMap.put(entity.getDeptId(), entity);
//			}else if (entity.getType() == 3) {
//				areaMap.put(entity.getDeptId(), entity);
//			}
//		}
//		
//		List<Long> areaIdList = null;
//		for (Map.Entry<Long, SysDeptEntity> entity : areaMap.entrySet()) {
//			if (cityIdAreaIdListMap.containsKey(entity.getValue().getParentId())) {
//				areaIdList = cityIdAreaIdListMap.get(entity.getValue().getParentId());
//				areaIdList.add(entity.getKey());
//				cityIdAreaIdListMap.put(entity.getValue().getParentId(), areaIdList);
//			}else {
//				areaIdList = new ArrayList<Long>();
//				areaIdList.add(entity.getKey());
//				cityIdAreaIdListMap.put(entity.getValue().getParentId(), areaIdList);
//			}
//		}
//		
//		List<Long> cityIdList = null;
//		for (Map.Entry<Long, SysDeptEntity> entity : cityMap.entrySet()) {
//			if (provinceIdCityIdListMap.containsKey(entity.getValue().getParentId())) {
//				cityIdList = provinceIdCityIdListMap.get(entity.getValue().getParentId());
//				cityIdList.add(entity.getKey());
//				provinceIdCityIdListMap.put(entity.getValue().getParentId(), cityIdList);
//			}else {
//				cityIdList = new ArrayList<Long>();
//				cityIdList.add(entity.getKey());
//				provinceIdCityIdListMap.put(entity.getValue().getParentId(), cityIdList);
//			}
//		}
//		
//		Province province = null;
//		City city = null;
//		Area area = null;
//		
//		List<Province> privinceList = new ArrayList<Province>();
//		List<City> cityList = new ArrayList<City>();
//		List<Area> areaList = null;
//		
//		HashMap<Long,List<City>> provinceIDStrMap = new HashMap<Long, List<City>>();
//		
//		List<Long> areaIdListTemp = null;
//		for (Map.Entry<Long,SysDeptEntity> entry : cityMap.entrySet()) {
//			areaList = new ArrayList<Area>();
//			city = new City();
//			city.setName(entry.getValue().getName());
//			city.setId(entry.getKey().toString());
//			areaIdListTemp = cityIdAreaIdListMap.get(entry.getKey());
//			for (Long areaIdTemp : areaIdListTemp) {
//				area = new Area();
//				area.setName(areaMap.get(areaIdTemp).getName());
//				area.setId(Long.toString(areaIdTemp));
//				areaList.add(area);
//			}
//			city.setChildren(areaList);
//			
//			if (provinceIDStrMap.containsKey(cityMap.get(entry.getKey()).getParentId())) {
//				cityList = provinceIDStrMap.get(cityMap.get(entry.getKey()).getParentId());
//			}else {
//				cityList = new ArrayList<City>();
//			}
//			cityList.add(city);
//			provinceIDStrMap.put(entry.getKey(), cityList);
//		}
//		
//		List<City> list = null;
//		List<City> listTemp = null;
//		for (Map.Entry<Long,String> entry : provinceIdNameMap.entrySet()) {
//			list = new ArrayList<City>();
//			province = new Province();
//			province.setName(entry.getValue());
//			province.setId(entry.getKey().toString());
//			List<Long> cityIdlist = provinceIdCityIdListMap.get(entry.getKey());
//			for (Long cityId : cityIdlist) {
//				listTemp = provinceIDStrMap.get(cityId);
//				list.addAll(listTemp);
//			}
//			province.setChildren(list);
//			privinceList.add(province);
//		}
//		return privinceList;
//	}

	@Override
	public List<SysDeptEntity> queryByTypeAndParentId(Integer parentId,Integer type) {
		return sysDeptDao.selectByTypeAndParentId(parentId,type);
	}
}
