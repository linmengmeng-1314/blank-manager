package com.csi.modules.qzdy.entity;
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
 * @date 2020-07-28 11:25:56
 */
public class QZDYEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//没有描述
	private String dwdm;
	//没有描述
	private Long xh;
	//没有描述
	private String cxd;
	//没有描述
	private String qzzl;
	//没有描述
	private String zhxgr;
	//没有描述
	private String qh;
	//没有描述
	private Date zhxgsj;
	//没有描述
	private Date lrsj;
	//没有描述
	private Date scrq;
	//没有描述
	private String lrip;
	//没有描述
	private String qzxh;
	//没有描述
	private String lrr;
	//没有描述
	private String zhxgip;
	//没有描述
	private String zt;
	//没有描述
	private String qzzt;
	//没有描述
	private Date gmrq;
	//没有描述
	private String sccj;

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
		builder.append("com.csi.entity.QZDYEntity [")
		.append(",dwdm=").append(dwdm)
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
		.append(",startTime=").append(startTime)
		.append(",endTime=").append(endTime)
		.append("]");
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
}
