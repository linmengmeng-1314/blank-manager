package com.csi.modules.sys.entity;

import java.io.Serializable;
import java.util.List;

public class SysDeptMergeEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//部门ID
	private Long id;
	//上级部门ID，一级部门为0
	private Long parentId;
	//部门名称
	private String name;
	//上级部门名称
	private String parentName;
	//排序
	private Integer orderNum;
	//类型
	private Integer type;
	
	private List<SysDeptMergeEntity> children;
	
	public List<SysDeptMergeEntity> getChildren() {
		return children;
	}
	public void setChildren(List<SysDeptMergeEntity> children) {
		this.children = children;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getParentId() {
		return parentId;
	}
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	public Integer getOrderNum() {
		return orderNum;
	}
	public void setOrderNum(Integer orderNum) {
		this.orderNum = orderNum;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "{\"id\":\"" + id + "\",\"parentId\":\"" + parentId + "\",\"name\":\"" + name
				+ "\",\"parentName\":\"" + parentName + "\",\"orderNum\":\"" + orderNum + "\",\"type\":\"" + type
				+ "\",\"children\":\"" + children + "\"}\n";
	}
}
