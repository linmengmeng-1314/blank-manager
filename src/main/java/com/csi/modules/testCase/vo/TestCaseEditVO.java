package com.csi.modules.testCase.vo;
import com.csi.common.baseenum.BaseEnum.ReturnMsgEnum;
import com.csi.modules.testCase.entity.TestCaseEntity;
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
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-24 16:56:24
 */
@ApiModel("修改参数")
public class TestCaseEditVO {

	@NotNull(message="系统主键不能为空")
	@DecimalMin(value="0",message="系统主键值应大于0")
	@DecimalMax(value="9999999999999999999",message="系统主键值应小于9999999999999999999")
	@ApiModelProperty(value="系统主键",example="填写例子")
	@ApiParam(value="系统主键",defaultValue="填写例子")
	private Long id;
	
	@Size(min=0,max=128,message="表名长度为0-128个字符")
	
	@ApiModelProperty(value="表名",example="填写例子")
	@ApiParam(value="表名",defaultValue="填写例子")
	private String tableName;
	
	@Size(min=0,max=128,message="备注长度为0-128个字符")
	
	@ApiModelProperty(value="备注",example="填写例子")
	@ApiParam(value="备注",defaultValue="填写例子")
	private String comment;
	
	
	@ApiModelProperty(value="创建时间 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="创建时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Date createTime;
	
	
	@ApiModelProperty(value="修改时间 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="修改时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Date updateTime;
	
	
	@DecimalMin(value="0",message="乐观锁值应大于0")
	@DecimalMax(value="9999999999999999999",message="乐观锁值应小于9999999999999999999")
	@ApiModelProperty(value="乐观锁",example="填写例子")
	@ApiParam(value="乐观锁",defaultValue="填写例子")
	private Long versionOptimizedLock;
	


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
		builder.append("com.csi.modules.testCase.vo.TestCaseEditVO ={")
		.append("id=").append(id)
		.append(",tableName=").append(tableName)
		.append(",comment=").append(comment)
		.append(",createTime=").append(DateUtils.format(createTime, DateUtils.DATE_TIME_PATTERN))
		.append(",updateTime=").append(DateUtils.format(updateTime, DateUtils.DATE_TIME_PATTERN))
		.append(",versionOptimizedLock=").append(versionOptimizedLock)
		.append("}");
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
	
	@ApiModel("修改信息,返回执行结果")
	public static class TestCaseEResultVO {

		private static TestCaseEResultVO success = new TestCaseEResultVO(ReturnMsgEnum.SUCCESS.getCode(),ReturnMsgEnum.SUCCESS.getMsg());
		private static TestCaseEResultVO fail = new TestCaseEResultVO(ReturnMsgEnum.FAIL.getCode(),ReturnMsgEnum.FAIL.getMsg());
		@ApiModelProperty(value="状态码",allowableValues="200:成功,其他表示失败")
		private String code;
		@ApiModelProperty(value="返回修改结果信息")
		private String msg;
		
		public TestCaseEResultVO(String code,String msg){
			this.code = code;
			this.msg = msg;
		}
		
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.testCase.vo.TestCaseEResultVO ={")
			.append("code=").append(code)
			.append(",msg=").append(msg)
			.append("}");
			return builder.toString();
		}
		public TestCaseEResultVO(){
		}
		
		public String getCode() {
			return code;
		}
	
		public void setCode(String code) {
			this.code = code;
		}
		public static TestCaseEResultVO ok() {
			return success;
		}
	
		public static TestCaseEResultVO fail() {
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
