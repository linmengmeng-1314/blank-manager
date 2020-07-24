package com.csi.modules.testCase.vo;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.csi.common.baseenum.BaseEnum.ReturnMsgEnum;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.utils.DateUtils;
import com.csi.modules.testCase.entity.TestCaseEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-24 16:56:24
 */
@ApiModel("查询参数")
public class TestCaseQueryVO {
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
	
	@ApiModelProperty(value="创建时间 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="创建时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
//	@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	private Date createTime;
	
	@ApiModelProperty(value="修改时间 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="修改时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
//	@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date updateTime;
	
	@DecimalMin(value="0",message="乐观锁值应大于0")
	@DecimalMax(value="9999999999999999999",message="乐观锁值应小于9999999999999999999")
	@ApiModelProperty(value="乐观锁",example="填写例子")
	@ApiParam(value="乐观锁",defaultValue="填写例子")
	private Long versionOptimizedLock;
	
	
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
	public TestCaseQResultVO ok(List<TestCaseEntity> testCaseEntityList) {
		return TestCaseQResultVO.ok(testCaseEntityList,this);
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("com.csi.modules.testCase.vo.TestCaseQueryVO ={")
		.append("id=").append(id)
		.append(",tableName=").append(tableName)
		.append(",comment=").append(comment)
		.append(",createTime=").append(DateUtils.format(createTime, DateUtils.DATE_TIME_PATTERN))
		.append(",updateTime=").append(DateUtils.format(updateTime, DateUtils.DATE_TIME_PATTERN))
		.append(",versionOptimizedLock=").append(versionOptimizedLock)
		.append(",startTime=").append(DateUtils.format(startTime, DateUtils.DATE_TIME_PATTERN))
		.append(",endTime=").append(DateUtils.format(endTime, DateUtils.DATE_TIME_PATTERN))
		.append(",page=").append(page)
		.append(",rows=").append(rows)
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
	
	@ApiModel("查询结果集")
	public static class TestCaseQResultVO {

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
		
		public TestCaseQResultVO(String code,String msg){
			this.code = code;
			this.msg = msg;
		}
		public TestCaseQResultVO(){
		}
		
		@ApiModelProperty(value="查询列表")
		private List<TestCaseResult> resultList;
		public TestCaseQResultVO(List<TestCaseEntity> testCaseEntityList){
			this.code = ReturnMsgEnum.SUCCESS.getCode();
			this.msg =ReturnMsgEnum.SUCCESS.getMsg();
			if(testCaseEntityList==null||testCaseEntityList.size()==0){
				return;
			}
			TestCaseResult result = null;
			resultList = new ArrayList<TestCaseResult>(testCaseEntityList.size());
			for (TestCaseEntity tempEntity : testCaseEntityList) {
				result = new TestCaseResult();
				BeanCopierUtils.copyProperties( tempEntity,result);
				resultList.add(result);
			}
		}
		
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.testCase.vo.TestCaseQResultVO ={")
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
		
		public List<TestCaseResult> getResultList() {
			return resultList;
		}
		
		public void setResultList(List<TestCaseResult> resultList) {
			this.resultList = resultList;
		}
		
		public String getCode() {
			return code;
		}
	
		public void setCode(String code) {
			this.code = code;
		}
		public static TestCaseQResultVO ok(List<TestCaseEntity> testCaseEntityList,TestCaseQueryVO testCaseQueryVO) {
			TestCaseQResultVO testCaseQResultVO = new TestCaseQResultVO(testCaseEntityList);
			testCaseQResultVO.setPage(testCaseQueryVO.getPage());
			testCaseQResultVO.setRows(testCaseQueryVO.getRows());
			return testCaseQResultVO;
		}
	
		public static TestCaseQResultVO  fail() {
			 TestCaseQResultVO vo = new TestCaseQResultVO(null);
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
	public static class TestCaseResult {
		
		@ApiModelProperty(value="系统主键",example="填写例子")
		@ApiParam(value="系统主键",defaultValue="填写例子")
		private Long id;
		@ApiModelProperty(value="表名",example="填写例子")
		@ApiParam(value="表名",defaultValue="填写例子")
		private String tableName;
		@ApiModelProperty(value="备注",example="填写例子")
		@ApiParam(value="备注",defaultValue="填写例子")
		private String comment;
		@ApiModelProperty(value="创建时间 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
		@ApiParam(value="创建时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子") 
		@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
		private Date createTime;
		@ApiModelProperty(value="修改时间 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
		@ApiParam(value="修改时间 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子") 
		@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
		private Date updateTime;
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
			builder.append("com.csi.modules.testCase.vo.TestCaseResult ={")
			.append("id=").append(id)
			.append(",tableName=").append(tableName)
			.append(",comment=").append(comment)
			.append(",createTime=").append(createTime)
			.append(",updateTime=").append(updateTime)
			.append(",versionOptimizedLock=").append(versionOptimizedLock)
			.append("}");
			return builder.toString();
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
