package com.csi.modules.loginInfo.vo;
import com.csi.common.baseenum.BaseEnum.ReturnMsgEnum;
import com.csi.modules.loginInfo.entity.LoginInfoEntity;
import java.io.Serializable;
import java.util.ArrayList;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.utils.DateUtils;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;
import java.sql.Timestamp;
import java.util.Date;
import java.sql.Timestamp;
import java.math.BigDecimal;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;

import java.math.BigDecimal;
/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-09 02:29:22
 */
@ApiModel("修改参数")
public class LoginInfoEditVO {

	@NotNull(message="不能为空")
	@DecimalMin(value="0",message="值应大于0")
	@DecimalMax(value="9999999999999999999",message="值应小于9999999999999999999")
	@ApiModelProperty(value="",example="填写例子")
	@ApiParam(value="",defaultValue="填写例子")
	private Long userId;
	
	@Size(min=0,max=64,message="用户名长度为0-64个字符")
	@NotNull(message="用户名不能为空")
	@ApiModelProperty(value="用户名",example="填写例子")
	@ApiParam(value="用户名",defaultValue="填写例子")
	private String username;
	
	@Size(min=0,max=64,message="联系人长度为0-64个字符")
	@NotNull(message="联系人不能为空")
	@ApiModelProperty(value="联系人",example="填写例子")
	@ApiParam(value="联系人",defaultValue="填写例子")
	private String contacts;
	
	
	@Min(value=0,message="状态  1：禁用   0：正常值应大于0")
	@Max(value=999,message="状态  1：禁用   0：正常值应小于999")
	@ApiModelProperty(value="状态  1：禁用   0：正常",example="填写例子")
	@ApiParam(value="状态  1：禁用   0：正常",defaultValue="填写例子")
	private Integer status;
	
	@Size(min=0,max=100,message="token长度为0-100个字符")
	@NotNull(message="token不能为空")
	@ApiModelProperty(value="token",example="填写例子")
	@ApiParam(value="token",defaultValue="填写例子")
	private String token;
	
	
	@ApiModelProperty(value="过期时间 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="过期时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Timestamp expireTime;
	
	
	@ApiModelProperty(value="更新时间 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="更新时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Timestamp updateTime;
	


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
		builder.append("com.csi.modules.loginInfo.vo.LoginInfoEditVO ={")
		.append("userId=").append(userId)
		.append(",username=").append(username)
		.append(",contacts=").append(contacts)
		.append(",status=").append(status)
		.append(",token=").append(token)
		.append(",expireTime=").append(DateUtils.format(expireTime, DateUtils.DATE_TIME_PATTERN))
		.append(",updateTime=").append(DateUtils.format(updateTime, DateUtils.DATE_TIME_PATTERN))
		.append("}");
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
	
	@ApiModel("修改信息,返回执行结果")
	public static class LoginInfoEResultVO {

		private static LoginInfoEResultVO success = new LoginInfoEResultVO(ReturnMsgEnum.SUCCESS.getCode(),ReturnMsgEnum.SUCCESS.getMsg());
		private static LoginInfoEResultVO fail = new LoginInfoEResultVO(ReturnMsgEnum.FAIL.getCode(),ReturnMsgEnum.FAIL.getMsg());
		@ApiModelProperty(value="状态码",allowableValues="200:成功,其他表示失败")
		private String code;
		@ApiModelProperty(value="返回修改结果信息")
		private String msg;
		
		public LoginInfoEResultVO(String code,String msg){
			this.code = code;
			this.msg = msg;
		}
		
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.loginInfo.vo.LoginInfoEResultVO ={")
			.append("code=").append(code)
			.append(",msg=").append(msg)
			.append("}");
			return builder.toString();
		}
		public LoginInfoEResultVO(){
		}
		
		public String getCode() {
			return code;
		}
	
		public void setCode(String code) {
			this.code = code;
		}
		public static LoginInfoEResultVO ok() {
			return success;
		}
	
		public static LoginInfoEResultVO fail() {
			return fail;
		}
		
		public String getMsg() {
			return msg;
		}
	
		public void setMsg(String msg) {
			this.msg = msg;
		}
	}
}
