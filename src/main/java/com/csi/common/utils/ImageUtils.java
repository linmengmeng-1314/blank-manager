package com.csi.common.utils;

import org.apache.commons.codec.binary.Base64;

import com.csi.common.aspect.ContextLog;
import com.csi.common.exception.CheckException;

public class ImageUtils {
	public static byte[]  imageBase64ToByteArray(String base64Str,int size) {
		if (base64Str.contains(",")) {
			base64Str = base64Str.split(",")[1];
		}
		byte[] decodeFromString = Base64.decodeBase64(base64Str);
		ContextLog.info("验证base64图片大小","base64:"+ base64Str+" 限制大小："+size, "com.csi.common.utils.ImageUtils.imageBase64Limit", ImageUtils.class, true);
		if (decodeFromString.length / 1024 > size) {
			throw new CheckException("图片过大");
		}
		return decodeFromString;
	}
	
}
