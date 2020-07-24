package com.csi.modules.testCase.entity;
import com.csi.modules.sys.entity.SysRoleDeptEntity;


import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Date;

/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-24 16:56:24
 */
public class TestCaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//系统主键
	private Long id;
	//表名
	private String tableName;
	//备注
	private String comment;
	//创建时间
	private Date createTime;
	//修改时间
	private Date updateTime;
	//乐观锁
	private Long versionOptimizedLock;

	//当需要根据时间范围查询时使用,不适用时请删除
	private Timestamp startTime;
	
	//当需要根据时间范围查询时使用,不适用时请删除
	private Timestamp endTime;
	
	/**
	 * 设置：开始时间
	 */
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}
	
	/**
	 * 获取：开始时间
	 */
	public Timestamp getStartTime() {
		return startTime;
	}
	
	/**
	 * 设置：结束时间
	 */
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}
	
	/**
	 * 获取：结束时间
	 */
	public Timestamp getEndTime() {
		return endTime;
	}

	/**
	 * 设置：系统主键
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 获取：系统主键
	 */
	public Long getId() {
		return id;
	}
	/**
	 * 设置：表名
	 */
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	/**
	 * 获取：表名
	 */
	public String getTableName() {
		return tableName;
	}
	/**
	 * 设置：备注
	 */
	public void setComment(String comment) {
		this.comment = comment;
	}
	/**
	 * 获取：备注
	 */
	public String getComment() {
		return comment;
	}
	/**
	 * 设置：创建时间
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	/**
	 * 获取：创建时间
	 */
	public Date getCreateTime() {
		return createTime;
	}
	/**
	 * 设置：修改时间
	 */
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	/**
	 * 获取：修改时间
	 */
	public Date getUpdateTime() {
		return updateTime;
	}
	/**
	 * 设置：乐观锁
	 */
	public void setVersionOptimizedLock(Long versionOptimizedLock) {
		this.versionOptimizedLock = versionOptimizedLock;
	}
	/**
	 * 获取：乐观锁
	 */
	public Long getVersionOptimizedLock() {
		return versionOptimizedLock;
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("com.csi.entity.TestCaseEntity [")
		.append(",id=").append(id)
		.append(",tableName=").append(tableName)
		.append(",comment=").append(comment)
		.append(",createTime=").append(createTime)
		.append(",updateTime=").append(updateTime)
		.append(",versionOptimizedLock=").append(versionOptimizedLock)
		.append(",startTime=").append(startTime)
		.append(",endTime=").append(endTime)
		.append("]");
		return builder.toString();
	}
	
	public static enum TestCaseEnum{
		id("id","系统主键"),
		table_name("tableName","表名"),
		comment("comment","备注"),
		create_time("createTime","创建时间"),
		update_time("updateTime","修改时间"),
		version_optimized_lock("versionOptimizedLock","乐观锁");
		private String fieldName;
		private String remark;
		TestCaseEnum(String fieldName,String remark){
			this.fieldName = fieldName;
			this.remark = remark;
		}
		
		public String get(){
			return this.fieldName;
		}
		
		public String getRemark(){
			return this.remark;
		}
	}
}
