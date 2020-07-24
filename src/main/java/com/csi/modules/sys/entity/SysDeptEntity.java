package com.csi.modules.sys.entity;

import java.io.Serializable;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;


/**
 * 部门管理
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-06-20 15:23:47
 */
public class SysDeptEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//部门ID
	private Long deptId;
	//上级部门ID，一级部门为0
	@NotNull(message = "上级部门不能为空")
	private Long parentId;
	//部门名称
	@NotBlank(message = "部门名称不能为空")
	private String name;
	//上级部门名称
	private String parentName;
	//排序
	private Integer orderNum;
	//排序
	private Integer type;
	/**
	 * ztree属性
	 */
	private Boolean open;

	private List<?> list;


	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public void setDeptId(Long deptId) {
		this.deptId = deptId;
	}

	public Long getDeptId() {
		return deptId;
	}
	/**
	 * 设置：上级部门ID，一级部门为0
	 */
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	/**
	 * 获取：上级部门ID，一级部门为0
	 */
	public Long getParentId() {
		return parentId;
	}
	/**
	 * 设置：部门名称
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 获取：部门名称
	 */
	public String getName() {
		return name;
	}
	/**
	 * 设置：排序
	 */
	public void setOrderNum(Integer orderNum) {
		this.orderNum = orderNum;
	}
	/**
	 * 获取：排序
	 */
	public Integer getOrderNum() {
		return orderNum;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	public Boolean getOpen() {
		return open;
	}

	public void setOpen(Boolean open) {
		this.open = open;
	}

	public List<?> getList() {
		return list;
	}

	public void setList(List<?> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "{\"deptId\":\"" + deptId + "\",\"parentId\":\"" + parentId + "\",\"name\":\"" + name
				+ "\",\"parentName\":\"" + parentName + "\",\"orderNum\":\"" + orderNum + "\",\"open\":\"" + open
				+ "\",\"list\":\"" + list + "\"}\n";
	}
	
	public static class Country{
		private String name;
		private String id;
		private List<Province> children;
		private String text;
		
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public List<Province> getChildren() {
			return children;
		}
		public void setChildren(List<Province> children) {
			this.children = children;
		}
		@Override
		public String toString() {
			return "{\"name\":\"" + name + "\",\"id\":\"" + id + "\",\"children\":\"" + children
					+ "\",\"text\":\"" + text + "\"}\n";
		}
	}
	
	public static class Province{
		private String name;
		private String id;
		private List<City> children;
		private String text;
		
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public List<City> getChildren() {
			return children;
		}
		public void setChildren(List<City> children) {
			this.children = children;
		}
		@Override
		public String toString() {
			return "{\"name\":\"" + name + "\",\"id\":\"" + id + "\",\"children\":\"" + children
					+ "\",\"text\":\"" + text + "\"}\n";
		}
	}
	
	public static class City{
		private String name;
		private String id;
		private List<Area> children;
		private String text;
		
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		
		public List<Area> getChildren() {
			return children;
		}
		public void setChildren(List<Area> children) {
			this.children = children;
		}
		@Override
		public String toString() {
			return "{\"name\":\"" + name + "\",\"id\":\"" + id + "\",\"children\":\"" + children + "\",\"text\":\""
					+ text + "\"}\n";
		}
	}
	
	public static class Area{
		private String name;
		private String id;
		private String text;
		
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}
		@Override
		public String toString() {
			return "{\"name\":\"" + name + "\",\"id\":\"" + id + "\",\"text\":\"" + text + "\"}\n";
		}
	}
	
	public static class metaData{
		private String name;
		private String id;
		private List<metaData> children;
		private String text;
		
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		
		public List<metaData> getChildren() {
			return children;
		}
		public void setChildren(List<metaData> children) {
			this.children = children;
		}
		@Override
		public String toString() {
			return "{\"name\":\"" + name + "\",\"id\":\"" + id + "\",\"children\":\"" + children + "\",\"text\":\""
					+ text + "\"}\n";
		}
	}
}
