package com.csi.modules.sdk.aliyun;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.Date;

import com.aliyun.oss.OSSClient;
import com.aliyun.oss.model.CannedAccessControlList;
import com.aliyun.oss.model.ObjectMetadata;
import com.csi.common.aspect.ContextLog;
import com.csi.common.utils.ImageUtils;


public class  OSSUtils{
	// Endpoint以杭州为例，其它Region请按实际情况填写。
	final static String endpoint = "oss-cn-beijing.aliyuncs.com";
	// 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建RAM账号。
	final static String accessKeyId = "";
	final static String   accessKeySecret = "";
	
	public final static String HX_IP = "http://xx.com";
	
	//public final static String MS_IP = "https://bjcsiyun.com";
	public final static String MS_IP = "https://xx.com";
	
	public final static String HX_DIRECTORY = "xx";
	
	public final static String MS_DIRECTORY = "xx";
	
	public static void uploadImg(String directory, String base64,String name) {
		// 创建OSSClient实例。
		OSSClient ossClient = new OSSClient(endpoint, accessKeyId,accessKeySecret);
		
		// 上传Byte数组。
		byte[] imageBase64ToByteArray = ImageUtils.imageBase64ToByteArray(base64, 1024*1027*4);
		
		ossClient.putObject(directory, name, new ByteArrayInputStream(imageBase64ToByteArray));
		// 关闭OSSClient。
		ossClient.shutdown();
	}
	
	/**
	 * 
	 * @param str 字符串
	 * @param name 文件名字
	 */
	public static void upload(String directory, String str,String name) {
		// 创建OSSClient实例。
		OSSClient ossClient = new OSSClient(endpoint, accessKeyId,accessKeySecret);
		
		ossClient.putObject(directory, name,new ByteArrayInputStream(str.getBytes()));
		// 关闭OSSClient。
		ossClient.shutdown();
	}
	
	/**
	 * 上传文件
	 * @param directory  
	 * @param inputStream
	 * @param name
	 * @param accessControl  控制权限
	 * 	继承Bucket	文件遵循存储空间的访问权限。	CannedAccessControlList.Default
	 * 	私有			文件的拥有者和授权用户有该文件的读写权限，其他用户没有权限操作该文件。	CannedAccessControlList.Private
	 * 	公共读		文件的拥有者和授权用户有该文件的读写权限，其他用户只有文件的读权限。请谨慎使用该权限。	CannedAccessControlList.PublicRead
	 * 	公共读写		所有用户都有该文件的读写权限。请谨慎使用该权限。	CannedAccessControlList.PublicReadWrite
	 */
	public static void upload(String directory, InputStream inputStream,String name, CannedAccessControlList accessControl) {
		// 创建OSSClient实例。
		OSSClient ossClient = new OSSClient(endpoint, accessKeyId,accessKeySecret);
		ContextLog.info("开始上传文件：", name, "com.csi.modules.sdk.aliyun.OSSUtils.upload", OSSUtils.class, false);
		ossClient.putObject(directory, name,inputStream);
		if (accessControl != null) {
			ossClient.setObjectAcl(directory, name, accessControl);
		}
		ContextLog.info("上传完成：", name, "com.csi.modules.sdk.aliyun.OSSUtils.upload", OSSUtils.class, false);
		// 关闭OSSClient。
		ossClient.shutdown();
	}
	
	public static void uploadPdf(String directory, InputStream inputStream,String name,String fileName) {
		// 创建OSSClient实例。
		// 创建上传Object的Metadata
		ObjectMetadata meta = new ObjectMetadata();
		meta.setContentDisposition("attachment;filename="+fileName+".pdf");
		// 设置上传文件长度
//		meta.setContentLength(content.length());
		// 设置上传MD5校验
//		String md5 = BinaryUtil.toBase64String(BinaryUtil.calculateMd5(content.getBytes()));
//		meta.setContentMD5(md5);
		// 设置上传内容类型
//		meta.setContentType("text/plain");
		OSSClient ossClient = new OSSClient(endpoint, accessKeyId,accessKeySecret);
		ossClient.putObject(directory, name,inputStream,meta);
		// 关闭OSSClient。
		ossClient.shutdown();
	}
	
	public static String getUrl(String directory, String ObjectName) {
		// 创建OSSClient实例。
		OSSClient ossClient = new OSSClient(endpoint, accessKeyId,accessKeySecret);
		// 设置URL过期时间为1小时。
		Date expiration = new Date(new Date().getTime() + 900 * 1000);
		// 生成以GET方法访问的签名URL，访客可以直接通过浏览器访问相关内容。
		URL url = ossClient.generatePresignedUrl(directory, ObjectName, expiration);
		// 关闭OSSClient。
		ossClient.shutdown();
		return HX_IP + url.getFile();
	}
	
	/**
	 * 
	 * @param ObjectName
	 * @param minute 过期时间秒
	 * @return
	 */
	public static String getUrl(String directory, String ObjectName,long millisecond) {
		// 创建OSSClient实例。
		OSSClient ossClient = new OSSClient(endpoint, accessKeyId,accessKeySecret);
		// 设置URL过期时间为1小时。
		Date expiration = new Date(new Date().getTime() + millisecond);
		// 生成以GET方法访问的签名URL，访客可以直接通过浏览器访问相关内容。
		URL url = ossClient.generatePresignedUrl(directory, ObjectName, expiration);
		// 关闭OSSClient。
		ossClient.shutdown();
		return HX_IP + url.getFile();
	}
	
}

