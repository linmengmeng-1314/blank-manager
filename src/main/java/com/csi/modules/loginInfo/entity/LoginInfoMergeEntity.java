package com.csi.modules.loginInfo.entity;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-10 09:20:30
 */
public class LoginInfoMergeEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//
	private Long userId;
	//用户名
	private String username;
	//联系人
	private String contacts;
	//状态  1：禁用   0：正常
	private Integer status;
	//创建时间
	private Timestamp createTime;
	//token
	private String token;
	//过期时间
	private Timestamp expireTime;
	//更新时间
	private Timestamp updateTime;
	//别名
	private String ip;
	//别名
	private Timestamp endTime;
	//别名
	private Long count;
	//别名
	private Integer type;
	//别名
	private Timestamp startTime;


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
	 * 设置：创建时间
	 */
	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}
	/**
	 * 获取：创建时间
	 */
	public Timestamp getCreateTime() {
		return createTime;
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
	/**
	 * 设置：别名
	 */
	public void setIp(String ip) {
		this.ip = ip;
	}
	/**
	 * 获取：别名
	 */
	public String getIp() {
		return ip;
	}
	/**
	 * 设置：别名
	 */
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}
	/**
	 * 获取：别名
	 */
	public Timestamp getEndTime() {
		return endTime;
	}
	/**
	 * 设置：别名
	 */
	public void setCount(Long count) {
		this.count = count;
	}
	/**
	 * 获取：别名
	 */
	public Long getCount() {
		return count;
	}
	/**
	 * 设置：别名
	 */
	public void setType(Integer type) {
		this.type = type;
	}
	/**
	 * 获取：别名
	 */
	public Integer getType() {
		return type;
	}
	/**
	 * 设置：别名
	 */
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}
	/**
	 * 获取：别名
	 */
	public Timestamp getStartTime() {
		return startTime;
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("com.csi.entity.LoginInfoMergeEntity [")
		.append(",userId=").append(userId)
		.append(",username=").append(username)
		.append(",contacts=").append(contacts)
		.append(",status=").append(status)
		.append(",createTime=").append(createTime)
		.append(",token=").append(token)
		.append(",expireTime=").append(expireTime)
		.append(",updateTime=").append(updateTime)
		.append(",ip=").append(ip)
		.append(",endTime=").append(endTime)
		.append(",count=").append(count)
		.append(",type=").append(type)
		.append(",startTime=").append(startTime)
		.append(",startTime=").append(startTime)
		.append(",endTime=").append(endTime)
		.append("]");
		return builder.toString();
	}
	
	public static enum LoginInfoMergeEnum{
		user_id("userId",""),
		username("username","用户名"),
		contacts("contacts","联系人"),
		status("status","状态  1：禁用   0：正常"),
		create_time("createTime","创建时间"),
		token("token","token"),
		expire_time("expireTime","过期时间"),
		update_time("updateTime","更新时间"),
		ip("ip","别名"),
		end_time("endTime","别名"),
		count("count","别名"),
		type("type","别名"),
		start_time("startTime","别名");
		private String fieldName;
		private String remark;
		LoginInfoMergeEnum(String fieldName,String remark){
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
