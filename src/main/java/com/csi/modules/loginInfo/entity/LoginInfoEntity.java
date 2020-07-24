package com.csi.modules.loginInfo.entity;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import com.csi.modules.sys.entity.SysRoleDeptEntity;

/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-09 02:29:22
 */
public class LoginInfoEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long userId;
	//用户名
	private String username;
	//联系人
	private String contacts;
	private Integer count;
	//状态  1：禁用   0：正常
	private Integer status;
	//token
	private String token;
	//过期时间
	private Timestamp expireTime;
	//更新时间
	private Timestamp updateTime;

	//  数据权限
	private List<SysRoleDeptEntity> sysRoleDeptEntity;
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
	 * 设置：
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	/**
	 * 获取：
	 */
	public Long getUserId() {
		return userId;
	}
	/**
	 * 设置：用户名
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * 获取：用户名
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * 设置：联系人
	 */
	public void setContacts(String contacts) {
		this.contacts = contacts;
	}
	/**
	 * 获取：联系人
	 */
	public String getContacts() {
		return contacts;
	}
	/**
	 * 设置：状态  1：禁用   0：正常
	 */
	public void setStatus(Integer status) {
		this.status = status;
	}
	/**
	 * 获取：状态  1：禁用   0：正常
	 */
	public Integer getStatus() {
		return status;
	}
	/**
	 * 设置：token
	 */
	public void setToken(String token) {
		this.token = token;
	}
	/**
	 * 获取：token
	 */
	public String getToken() {
		return token;
	}
	/**
	 * 设置：过期时间
	 */
	public void setExpireTime(Timestamp expireTime) {
		this.expireTime = expireTime;
	}
	/**
	 * 获取：过期时间
	 */
	public Timestamp getExpireTime() {
		return expireTime;
	}
	/**
	 * 设置：更新时间
	 */
	public void setUpdateTime(Timestamp updateTime) {
		this.updateTime = updateTime;
	}
	/**
	 * 获取：更新时间
	 */
	public Timestamp getUpdateTime() {
		return updateTime;
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("com.csi.entity.LoginInfoEntity [")
		.append(",userId=").append(userId)
		.append(",username=").append(username)
		.append(",contacts=").append(contacts)
		.append(",status=").append(status)
		.append(",token=").append(token)
		.append(",expireTime=").append(expireTime)
		.append(",updateTime=").append(updateTime)
		.append(",startTime=").append(startTime)
		.append(",endTime=").append(endTime)
		.append("]");
		return builder.toString();
	}
	
	public static enum LoginInfoEnum{
		user_id("userId",""),
		username("username","用户名"),
		contacts("contacts","联系人"),
		status("status","状态  1：禁用   0：正常"),
		token("token","token"),
		expire_time("expireTime","过期时间"),
		update_time("updateTime","更新时间");
		private String fieldName;
		private String remark;
		LoginInfoEnum(String fieldName,String remark){
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
	public List<SysRoleDeptEntity> getSysRoleDeptEntity() {
		return sysRoleDeptEntity;
	}

	public void setSysRoleDeptEntity(List<SysRoleDeptEntity> sysRoleDeptEntity) {
		this.sysRoleDeptEntity = sysRoleDeptEntity;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
}
