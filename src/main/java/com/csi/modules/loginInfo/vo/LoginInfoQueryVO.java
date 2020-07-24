package com.csi.modules.loginInfo.vo;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import com.csi.common.baseenum.BaseEnum.ReturnMsgEnum;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.utils.DateUtils;
import com.csi.modules.loginInfo.entity.LoginInfoEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
/**
 * 
 * 
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2019-07-09 02:29:22
 */
@ApiModel("查询参数")
public class LoginInfoQueryVO {
	@DecimalMin(value="0",message="值应大于0")
	@DecimalMax(value="9999999999999999999",message="值应小于9999999999999999999")
	@ApiModelProperty(value="",example="填写例子")
	@ApiParam(value="",defaultValue="填写例子")
	private Long userId;
	
	@Size(min=0,max=64,message="用户名长度为0-64个字符")
	@ApiModelProperty(value="用户名",example="填写例子")
	@ApiParam(value="用户名",defaultValue="填写例子")
	private String username;
	
	@Size(min=0,max=64,message="联系人长度为0-64个字符")
	@ApiModelProperty(value="联系人",example="填写例子")
	@ApiParam(value="联系人",defaultValue="填写例子")
	private String contacts;
	
	@Min(value=0,message="状态  1：禁用   0：正常值应大于0")
	@Max(value=999,message="状态  1：禁用   0：正常值应小于999")
	@ApiModelProperty(value="状态  1：禁用   0：正常",example="填写例子")
	@ApiParam(value="状态  1：禁用   0：正常",defaultValue="填写例子")
	private Integer status;
	
	@Size(min=0,max=100,message="token长度为0-100个字符")
	@ApiModelProperty(value="token",example="填写例子")
	@ApiParam(value="token",defaultValue="填写例子")
	private String token;
	
	@ApiModelProperty(value="过期时间 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="过期时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	private Timestamp expireTime;
	
	@ApiModelProperty(value="更新时间 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="更新时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	private Timestamp updateTime;
	
	
	/**
	* 默认第一页
	**/
	@ApiModelProperty(value="第几页",example="1")
	@ApiParam(value="第几页",defaultValue="1")
	private Long page=1L;
	
	/**
	* 默认100行数据
	**/
	@ApiModelProperty(value="一页展示多少条数据",example="100")
	@ApiParam(value="一页展示多少条数据",defaultValue="100")
	private Long rows=100L;
	
	//当需要根据时间范围查询时使用,不适用时请删除
	@ApiModelProperty(value="开始时间 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="开始时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	private Timestamp startTime;
	
	//当需要根据时间范围查询时使用,不适用时请删除
	@ApiModelProperty(value="结束时间 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="结束时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
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
	public LoginInfoQResultVO ok(List<LoginInfoEntity> loginInfoEntityList) {
		return LoginInfoQResultVO.ok(loginInfoEntityList,this);
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("com.csi.modules.loginInfo.vo.LoginInfoQueryVO ={")
		.append("userId=").append(userId)
		.append(",username=").append(username)
		.append(",contacts=").append(contacts)
		.append(",status=").append(status)
		.append(",token=").append(token)
		.append(",expireTime=").append(DateUtils.format(expireTime, DateUtils.DATE_TIME_PATTERN))
		.append(",updateTime=").append(DateUtils.format(updateTime, DateUtils.DATE_TIME_PATTERN))
		.append(",startTime=").append(DateUtils.format(startTime, DateUtils.DATE_TIME_PATTERN))
		.append(",endTime=").append(DateUtils.format(endTime, DateUtils.DATE_TIME_PATTERN))
		.append(",page=").append(page)
		.append(",rows=").append(rows)
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
	
	@ApiModel("查询结果集")
	public static class LoginInfoQResultVO {

		@ApiModelProperty(value="状态码",allowableValues="200:成功,其他表示失败")
		private String code;
		@ApiModelProperty(value="返回信息描述")
		private String msg;
		/**
		* 默认第一页
		**/
		@ApiModelProperty(value="一页展示数量",example="1")
		@ApiParam(value="一页展示数量",defaultValue="1")
		private Long page=1L;
		
		/**
		* 默认100行数据
		**/
		@ApiModelProperty(value="一页展示多少条数据",example="100")
		@ApiParam(value="一页展示多少条数据",defaultValue="100")
		private Long rows=100L;
		
		/**
		* 总行数
		**/
		@ApiModelProperty(value="总行数",example="100")
		@ApiParam(value="总行数",defaultValue="100")
		private Long count;
		
		public LoginInfoQResultVO(String code,String msg){
			this.code = code;
			this.msg = msg;
		}
		public LoginInfoQResultVO(){
		}
		
		@ApiModelProperty(value="查询列表")
		private List<LoginInfoResult> resultList;
		public LoginInfoQResultVO(List<LoginInfoEntity> loginInfoEntityList){
			this.code = ReturnMsgEnum.SUCCESS.getCode();
			this.msg =ReturnMsgEnum.SUCCESS.getMsg();
			if(loginInfoEntityList==null||loginInfoEntityList.size()==0){
				return;
			}
			LoginInfoResult result = null;
			resultList = new ArrayList<LoginInfoResult>(loginInfoEntityList.size());
			for (LoginInfoEntity tempEntity : loginInfoEntityList) {
				result = new LoginInfoResult();
				BeanCopierUtils.copyProperties( tempEntity,result);
				resultList.add(result);
			}
		}
		
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.loginInfo.vo.LoginInfoQResultVO ={")
			.append("code=").append(code)
			.append(",msg=").append(msg)
			.append(",page=").append(page)
			.append(",rows=").append(rows)
			.append(",resultList ={")
			.append(resultList)
			.append("}")
			.append("}");
			return builder.toString();
		}
		
		public List<LoginInfoResult> getResultList() {
			return resultList;
		}
		
		public void setResultList(List<LoginInfoResult> resultList) {
			this.resultList = resultList;
		}
		
		public String getCode() {
			return code;
		}
	
		public void setCode(String code) {
			this.code = code;
		}
		public static LoginInfoQResultVO ok(List<LoginInfoEntity> loginInfoEntityList,LoginInfoQueryVO loginInfoQueryVO) {
			LoginInfoQResultVO loginInfoQResultVO = new LoginInfoQResultVO(loginInfoEntityList);
			loginInfoQResultVO.setPage(loginInfoQueryVO.getPage());
			loginInfoQResultVO.setRows(loginInfoQueryVO.getRows());
			return loginInfoQResultVO;
		}
	
		public static LoginInfoQResultVO  fail() {
			 LoginInfoQResultVO vo = new LoginInfoQResultVO(null);
			 vo.setCode(ReturnMsgEnum.FAIL.getCode());
			 vo.setMsg(ReturnMsgEnum.FAIL.getMsg());
			 return vo;
		}
		
		public String getMsg() {
			return msg;
		}
	
		public void setMsg(String msg) {
			this.msg = msg;
		}
		
		public Long getPage() {
			return page;
		}
		public void setPage(Long page) {
			this.page = page;
		}
		public Long getRows() {
			return rows;
		}
		public void setRows(Long rows) {
			this.rows = rows;
		}
		public Long getCount() {
			return count;
		}
		public Long getTotalPage() {
			return (count+rows-1)/rows;
		}
		public void setCount(Long count) {
			this.count = count;
		}
	}
		/**
	 * 回执说明
	 * 
	 */
	@ApiModel("返回字段说明")
	public static class LoginInfoResult {
		
		@ApiModelProperty(value="",example="填写例子")
		@ApiParam(value="",defaultValue="填写例子")
		private Long userId;
		@ApiModelProperty(value="用户名",example="填写例子")
		@ApiParam(value="用户名",defaultValue="填写例子")
		private String username;
		@ApiModelProperty(value="联系人",example="填写例子")
		@ApiParam(value="联系人",defaultValue="填写例子")
		private String contacts;
		@ApiModelProperty(value="状态  1：禁用   0：正常",example="填写例子")
		@ApiParam(value="状态  1：禁用   0：正常",defaultValue="填写例子")
		private Integer status;
		@ApiModelProperty(value="token",example="填写例子")
		@ApiParam(value="token",defaultValue="填写例子")
		private String token;
		@ApiModelProperty(value="过期时间",example="填写例子")
		@ApiParam(value="过期时间",defaultValue="填写例子")
		private Timestamp expireTime;
		@ApiModelProperty(value="更新时间",example="填写例子")
		@ApiParam(value="更新时间",defaultValue="填写例子")
		private Timestamp updateTime;
		@ApiModelProperty(value="错误次数",example="填写例子")
		@ApiParam(value="错误次数",defaultValue="填写例子")
		private Integer count;
	
		//当需要根据时间范围查询时使用,不适用时请删除
		private Timestamp startTime;
		
		//当需要根据时间范围查询时使用,不适用时请删除
		private Timestamp endTime;
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
			builder.append("com.csi.modules.loginInfo.vo.LoginInfoResult ={")
			.append("userId=").append(userId)
			.append(",username=").append(username)
			.append(",contacts=").append(contacts)
			.append(",status=").append(status)
			.append(",token=").append(token)
			.append(",expireTime=").append(expireTime)
			.append(",updateTime=").append(updateTime)
			.append("}");
			return builder.toString();
		}

		public Timestamp getStartTime() {
			return startTime;
		}

		public void setStartTime(Timestamp startTime) {
			this.startTime = startTime;
		}

		public Timestamp getEndTime() {
			return endTime;
		}

		public void setEndTime(Timestamp endTime) {
			this.endTime = endTime;
		}

		public Integer getCount() {
			return count;
		}

		public void setCount(Integer count) {
			this.count = count;
		}
	}
	
	public long getPage() {
		// TODO Auto-generated method stub
		return page;
	}

	public void setPage(long page) {
		this.page = page;
	}

	public long getRows() {
		// TODO Auto-generated method stub
		return rows;
	}

	public void setRows(long rows) {
		this.rows = rows;
	}
	
	public long getStartRow() {
		return (page-1)*rows;
	}
	
	public long getEndRow() {
		return (page-1)*rows+rows;
	}
}
