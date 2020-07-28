package com.csi.modules.qzdy.vo;
import com.csi.common.baseenum.BaseEnum.ReturnMsgEnum;
import com.csi.modules.qzdy.entity.QZDYEntity;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.utils.DateUtils;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;
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

import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
/**
 * 
 * 
 * @author linmengmeng
 * @email 1632284989@qq.com
 * @date 2020-07-28 11:25:56
 */
@ApiModel("查询参数")
public class QZDYQueryVO {
	@Size(min=0,max=32,message="null长度为0-32个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String dwdm;
	
	@DecimalMin(value="0",message="null值应大于0")
	@DecimalMax(value="9999999999",message="null值应小于9999999999")
	@ApiModelProperty(value="没有描述",example="123")
	@ApiParam(value="没有描述",defaultValue="123")
	private Long xh;
	
	@Size(min=0,max=1,message="null长度为0-1个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String cxd;
	
	@Size(min=0,max=2,message="null长度为0-2个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qzzl;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String zhxgr;
	
	@Size(min=0,max=20,message="null长度为0-20个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qh;
	
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	//@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date zhxgsj;
	
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	//@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date lrsj;
	
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	//@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date scrq;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String lrip;
	
	@Size(min=0,max=4,message="null长度为0-4个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qzxh;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String lrr;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String zhxgip;
	
	@Size(min=0,max=1,message="null长度为0-1个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String zt;
	
	@Size(min=0,max=1,message="null长度为0-1个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qzzt;
	
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="2018-10-18 18:18:18")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "2018-10-18 18:18:18") 
	//@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date gmrq;
	
	@Size(min=0,max=100,message="null长度为0-100个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String sccj;
	
	
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
	 * 设置：没有描述
	 */
	public void setDwdm(String dwdm) {
		this.dwdm = dwdm;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getDwdm() {
		return dwdm;
	}

	/**
	 * 设置：没有描述
	 */
	public void setXh(Long xh) {
		this.xh = xh;
	}
	
	/**
	 * 获取：没有描述
	 */
	public Long getXh() {
		return xh;
	}

	/**
	 * 设置：没有描述
	 */
	public void setCxd(String cxd) {
		this.cxd = cxd;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getCxd() {
		return cxd;
	}

	/**
	 * 设置：没有描述
	 */
	public void setQzzl(String qzzl) {
		this.qzzl = qzzl;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getQzzl() {
		return qzzl;
	}

	/**
	 * 设置：没有描述
	 */
	public void setZhxgr(String zhxgr) {
		this.zhxgr = zhxgr;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getZhxgr() {
		return zhxgr;
	}

	/**
	 * 设置：没有描述
	 */
	public void setQh(String qh) {
		this.qh = qh;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getQh() {
		return qh;
	}

	/**
	 * 设置：没有描述
	 */
	public void setZhxgsj(Date zhxgsj) {
		this.zhxgsj = zhxgsj;
	}
	
	/**
	 * 获取：没有描述
	 */
	public Date getZhxgsj() {
		return zhxgsj;
	}

	/**
	 * 设置：没有描述
	 */
	public void setLrsj(Date lrsj) {
		this.lrsj = lrsj;
	}
	
	/**
	 * 获取：没有描述
	 */
	public Date getLrsj() {
		return lrsj;
	}

	/**
	 * 设置：没有描述
	 */
	public void setScrq(Date scrq) {
		this.scrq = scrq;
	}
	
	/**
	 * 获取：没有描述
	 */
	public Date getScrq() {
		return scrq;
	}

	/**
	 * 设置：没有描述
	 */
	public void setLrip(String lrip) {
		this.lrip = lrip;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getLrip() {
		return lrip;
	}

	/**
	 * 设置：没有描述
	 */
	public void setQzxh(String qzxh) {
		this.qzxh = qzxh;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getQzxh() {
		return qzxh;
	}

	/**
	 * 设置：没有描述
	 */
	public void setLrr(String lrr) {
		this.lrr = lrr;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getLrr() {
		return lrr;
	}

	/**
	 * 设置：没有描述
	 */
	public void setZhxgip(String zhxgip) {
		this.zhxgip = zhxgip;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getZhxgip() {
		return zhxgip;
	}

	/**
	 * 设置：没有描述
	 */
	public void setZt(String zt) {
		this.zt = zt;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getZt() {
		return zt;
	}

	/**
	 * 设置：没有描述
	 */
	public void setQzzt(String qzzt) {
		this.qzzt = qzzt;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getQzzt() {
		return qzzt;
	}

	/**
	 * 设置：没有描述
	 */
	public void setGmrq(Date gmrq) {
		this.gmrq = gmrq;
	}
	
	/**
	 * 获取：没有描述
	 */
	public Date getGmrq() {
		return gmrq;
	}

	/**
	 * 设置：没有描述
	 */
	public void setSccj(String sccj) {
		this.sccj = sccj;
	}
	
	/**
	 * 获取：没有描述
	 */
	public String getSccj() {
		return sccj;
	}
	public QZDYQResultVO ok(List<QZDYEntity> qZDYEntityList) {
		return QZDYQResultVO.ok(qZDYEntityList,this);
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder();
		builder.append("com.csi.modules.qzdy.vo.QZDYQueryVO ={")
		.append("dwdm=").append(dwdm)
		.append(",xh=").append(xh)
		.append(",cxd=").append(cxd)
		.append(",qzzl=").append(qzzl)
		.append(",zhxgr=").append(zhxgr)
		.append(",qh=").append(qh)
		.append(",zhxgsj=").append(DateUtils.format(zhxgsj, DateUtils.DATE_TIME_PATTERN))
		.append(",lrsj=").append(DateUtils.format(lrsj, DateUtils.DATE_TIME_PATTERN))
		.append(",scrq=").append(DateUtils.format(scrq, DateUtils.DATE_TIME_PATTERN))
		.append(",lrip=").append(lrip)
		.append(",qzxh=").append(qzxh)
		.append(",lrr=").append(lrr)
		.append(",zhxgip=").append(zhxgip)
		.append(",zt=").append(zt)
		.append(",qzzt=").append(qzzt)
		.append(",gmrq=").append(DateUtils.format(gmrq, DateUtils.DATE_TIME_PATTERN))
		.append(",sccj=").append(sccj)
		.append(",startTime=").append(DateUtils.format(startTime, DateUtils.DATE_TIME_PATTERN))
		.append(",endTime=").append(DateUtils.format(endTime, DateUtils.DATE_TIME_PATTERN))
		.append(",page=").append(page)
		.append(",rows=").append(rows)
		.append("}");
		return builder.toString();
	}
	
	public static enum QZDYEnum{
		DWDM("dwdm","没有描述"),
		XH("xh","没有描述"),
		CXD("cxd","没有描述"),
		QZZL("qzzl","没有描述"),
		ZHXGR("zhxgr","没有描述"),
		QH("qh","没有描述"),
		ZHXGSJ("zhxgsj","没有描述"),
		LRSJ("lrsj","没有描述"),
		SCRQ("scrq","没有描述"),
		LRIP("lrip","没有描述"),
		QZXH("qzxh","没有描述"),
		LRR("lrr","没有描述"),
		ZHXGIP("zhxgip","没有描述"),
		ZT("zt","没有描述"),
		QZZT("qzzt","没有描述"),
		GMRQ("gmrq","没有描述"),
		SCCJ("sccj","没有描述");
		private String fieldName;
		private String remark;
		QZDYEnum(String fieldName,String remark){
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
	public static class QZDYQResultVO {

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
		
		public QZDYQResultVO(String code,String msg){
			this.code = code;
			this.msg = msg;
		}
		public QZDYQResultVO(){
		}
		
		@ApiModelProperty(value="查询列表")
		private List<QZDYResult> resultList;
		public QZDYQResultVO(List<QZDYEntity> qZDYEntityList){
			this.code = ReturnMsgEnum.SUCCESS.getCode();
			this.msg =ReturnMsgEnum.SUCCESS.getMsg();
			if(qZDYEntityList==null||qZDYEntityList.size()==0){
				return;
			}
			QZDYResult result = null;
			resultList = new ArrayList<QZDYResult>(qZDYEntityList.size());
			for (QZDYEntity tempEntity : qZDYEntityList) {
				result = new QZDYResult();
				BeanCopierUtils.copyProperties( tempEntity,result);
				resultList.add(result);
			}
		}
		
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.qzdy.vo.QZDYQResultVO ={")
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
		
		public List<QZDYResult> getResultList() {
			return resultList;
		}
		
		public void setResultList(List<QZDYResult> resultList) {
			this.resultList = resultList;
		}
		
		public String getCode() {
			return code;
		}
	
		public void setCode(String code) {
			this.code = code;
		}
		public static QZDYQResultVO ok(List<QZDYEntity> qZDYEntityList,QZDYQueryVO qZDYQueryVO) {
			QZDYQResultVO qZDYQResultVO = new QZDYQResultVO(qZDYEntityList);
			qZDYQResultVO.setPage(qZDYQueryVO.getPage());
			qZDYQResultVO.setRows(qZDYQueryVO.getRows());
			return qZDYQResultVO;
		}
	
		public static QZDYQResultVO  fail() {
			 QZDYQResultVO vo = new QZDYQResultVO(null);
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
	public static class QZDYResult {
		
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String dwdm;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private Long xh;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String cxd;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String qzzl;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String zhxgr;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String qh;
		@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
		@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子") 
		@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
		private Date zhxgsj;
		@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
		@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子") 
		@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
		private Date lrsj;
		@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
		@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子") 
		@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
		private Date scrq;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String lrip;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String qzxh;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String lrr;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String zhxgip;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String zt;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String qzzt;
		@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
		@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子") 
		@JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
		private Date gmrq;
		@ApiModelProperty(value="没有描述",example="填写例子")
		@ApiParam(value="没有描述",defaultValue="填写例子")
		private String sccj;
	
		
		/**
		 * 设置：没有描述
		 */
		public void setDwdm(String dwdm) {
			this.dwdm = dwdm;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getDwdm() {
			return dwdm;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setXh(Long xh) {
			this.xh = xh;
		}
		
		/**
		 * 获取：没有描述
		 */
		public Long getXh() {
			return xh;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setCxd(String cxd) {
			this.cxd = cxd;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getCxd() {
			return cxd;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setQzzl(String qzzl) {
			this.qzzl = qzzl;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getQzzl() {
			return qzzl;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setZhxgr(String zhxgr) {
			this.zhxgr = zhxgr;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getZhxgr() {
			return zhxgr;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setQh(String qh) {
			this.qh = qh;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getQh() {
			return qh;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setZhxgsj(Date zhxgsj) {
			this.zhxgsj = zhxgsj;
		}
		
		/**
		 * 获取：没有描述
		 */
		public Date getZhxgsj() {
			return zhxgsj;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setLrsj(Date lrsj) {
			this.lrsj = lrsj;
		}
		
		/**
		 * 获取：没有描述
		 */
		public Date getLrsj() {
			return lrsj;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setScrq(Date scrq) {
			this.scrq = scrq;
		}
		
		/**
		 * 获取：没有描述
		 */
		public Date getScrq() {
			return scrq;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setLrip(String lrip) {
			this.lrip = lrip;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getLrip() {
			return lrip;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setQzxh(String qzxh) {
			this.qzxh = qzxh;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getQzxh() {
			return qzxh;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setLrr(String lrr) {
			this.lrr = lrr;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getLrr() {
			return lrr;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setZhxgip(String zhxgip) {
			this.zhxgip = zhxgip;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getZhxgip() {
			return zhxgip;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setZt(String zt) {
			this.zt = zt;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getZt() {
			return zt;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setQzzt(String qzzt) {
			this.qzzt = qzzt;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getQzzt() {
			return qzzt;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setGmrq(Date gmrq) {
			this.gmrq = gmrq;
		}
		
		/**
		 * 获取：没有描述
		 */
		public Date getGmrq() {
			return gmrq;
		}
	
		/**
		 * 设置：没有描述
		 */
		public void setSccj(String sccj) {
			this.sccj = sccj;
		}
		
		/**
		 * 获取：没有描述
		 */
		public String getSccj() {
			return sccj;
		}
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.qzdy.vo.QZDYResult ={")
			.append("dwdm=").append(dwdm)
			.append(",xh=").append(xh)
			.append(",cxd=").append(cxd)
			.append(",qzzl=").append(qzzl)
			.append(",zhxgr=").append(zhxgr)
			.append(",qh=").append(qh)
			.append(",zhxgsj=").append(zhxgsj)
			.append(",lrsj=").append(lrsj)
			.append(",scrq=").append(scrq)
			.append(",lrip=").append(lrip)
			.append(",qzxh=").append(qzxh)
			.append(",lrr=").append(lrr)
			.append(",zhxgip=").append(zhxgip)
			.append(",zt=").append(zt)
			.append(",qzzt=").append(qzzt)
			.append(",gmrq=").append(gmrq)
			.append(",sccj=").append(sccj)
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
