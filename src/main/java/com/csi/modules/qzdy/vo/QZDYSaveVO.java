package com.csi.modules.qzdy.vo;
import com.csi.common.baseenum.BaseEnum.ReturnMsgEnum;
import com.csi.modules.qzdy.entity.QZDYEntity;
import java.io.Serializable;
import java.util.ArrayList;
import com.csi.common.utils.BeanCopierUtils;
import com.csi.common.utils.DateUtils;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;
import java.sql.Timestamp;
import java.util.Date;
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
 * @date 2020-07-28 10:57:12
 */
@ApiModel("保存参数")
public class QZDYSaveVO {

	@Size(min=0,max=32,message="null长度为0-32个字符")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String dwdm;
	
	@NotNull(message="null不能为空")
	@DecimalMin(value="0",message="null值应大于0")
	@DecimalMax(value="9999999999",message="null值应小于9999999999")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private Long xh;
	
	@Size(min=0,max=1,message="null长度为0-1个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String cxd;
	
	@Size(min=0,max=2,message="null长度为0-2个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qzzl;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String zhxgr;
	
	@Size(min=0,max=20,message="null长度为0-20个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qh;
	
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Date zhxgsj;
	
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Date lrsj;
	
	
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Date scrq;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String lrip;
	
	@Size(min=0,max=4,message="null长度为0-4个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qzxh;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String lrr;
	
	@Size(min=0,max=50,message="null长度为0-50个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String zhxgip;
	
	@Size(min=0,max=1,message="null长度为0-1个字符")
	@NotNull(message="null不能为空")
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String zt;
	
	@Size(min=0,max=1,message="null长度为0-1个字符")
	
	@ApiModelProperty(value="没有描述",example="填写例子")
	@ApiParam(value="没有描述",defaultValue="填写例子")
	private String qzzt;
	
	
	@ApiModelProperty(value="没有描述 格式yyyy-MM-dd HH:mm:ss",example="填写例子")
	@ApiParam(value="没有描述 格式yyyy-MM-dd HH:mm:ss",defaultValue = "填写例子")  
	private Date gmrq;
	
	@Size(min=0,max=100,message="null长度为0-100个字符")
	@NotNull(message="null不能为空")
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
		builder.append("com.csi.modules.qzdy.vo.QZDYSaveVO ={")
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
	
	@ApiModel("保存信息,返回执行结果")
	public static class QZDYSResultVO {
		private static QZDYSResultVO fail = new QZDYSResultVO(ReturnMsgEnum.FAIL.getCode(),ReturnMsgEnum.FAIL.getMsg());

		private static QZDYSResultVO success= new QZDYSResultVO(ReturnMsgEnum.SUCCESS.getCode(),ReturnMsgEnum.SUCCESS.getMsg());

		@ApiModelProperty(value="状态码",allowableValues="200:成功,其他表示失败")
		private String code;
		@ApiModelProperty(value="返回保存结果信息")
		private String msg;
		
		public QZDYSResultVO(String code,String msg){
			this.code = code;
			this.msg = msg;
		}
		
		@Override
		public String toString(){
			StringBuilder builder = new StringBuilder();
			builder.append("com.csi.modules.qzdy.vo.QZDYSResultVO ={")
			.append("code=").append(code)
			.append(",msg=").append(msg)
			.append("}");
			return builder.toString();
		}
		public QZDYSResultVO(){
		}
		
		public String getCode() {
			return code;
		}
	
		public void setCode(String code) {
			this.code = code;
		}
		public static QZDYSResultVO ok() {
			return success;
		}
	
		public static QZDYSResultVO  fail() {
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
