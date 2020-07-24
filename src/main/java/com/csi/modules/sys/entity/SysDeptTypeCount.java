package com.csi.modules.sys.entity;

public class SysDeptTypeCount {

	private Integer type;
	private Integer count;
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "{\"type\":\"" + type + "\",\"count\":\"" + count + "\"}\n";
	}
}
