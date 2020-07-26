package com.csi.modules.sdk.aliyun;

import java.math.BigDecimal;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradeAppPayRequest;

//https://docs.open.alipay.com/api_1/alipay.trade.page.pay
public class AliZfb {
	private static AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.GATEWAY_URL,AlipayConfig.APP_ID,AlipayConfig.APP_PRIVATE_KEY,"json",AlipayConfig.CHARSET,AlipayConfig.ALIPAY_PUBLIC_KEY,AlipayConfig.SIGN_TYPE);
	public static String payment(AlipayTradePagePayRequestVO vo,String url,String returnUrl) throws AlipayApiException {
		//实例化客户端
		
		//实例化具体API对应的request类,类名称和接口名称对应,当前调用接口名称：alipay.open.public.template.message.industry.modify 
		AlipayTradeAppPayRequest alipayRequest = new AlipayTradeAppPayRequest();//创建API对应的request
//		    alipayRequest.setReturnUrl("http://domain.com/CallBack/return_url.jsp");
//		    alipayRequest.setNotifyUrl(AlipayConfig.NOTIFY_URL);//在公共参数中设置回跳和通知地址
		    alipayRequest.setReturnUrl(returnUrl);
		    alipayRequest.setNotifyUrl(url);//在公共参数中设置回跳和通知地址
		    alipayRequest.setBizContent(JSONObject.toJSONString(vo));//填充业务参数
		    
//		    model.setBody(body);
//	        model.setSubject(subject);
//	        model.setOutTradeNo(orderId);
//	        model.setTimeoutExpress("30m");
//	        model.setTotalAmount(amount);
		    alipayRequest.setProdCode("FAST_INSTANT_TRADE_PAY");
//	        request.setBizModel(model);
//	        String serverIp = PropertyConfig.getProperty("SERVER_LOCAL_IP");
//
//	        request.setNotifyUrl(String.format("%s/aliPay/csiAliPayAsyncInfo", serverIp));
		    
//		    alipayRequest.setBizContent("{" +
//		        "    \"out_trade_no\":\"20150320010101001\"," +
//		        "    \"product_code\":\"FAST_INSTANT_TRADE_PAY\"," +
//		        "    \"total_amount\":88.88," +
//		        "    \"subject\":\"Iphone6 16G\"," +
////		        "    \"body\":\"Iphone6 16G\"," +
////		        "    \"passback_params\":\"merchantBizType%3d3C%26merchantBizNo%3d2016010101111\"," +
//		        "    \"extend_params\":{" +
//		        "    \"sys_service_provider_id\":\"\"" +
//		        "    }"+
//		        "  }");//填充业务参数
		    String  form = alipayClient.sdkExecute(alipayRequest).getBody(); //调用SDK生成表单
//	        System.out.print(form);
//		    httpResponse.setContentType("text/html;charset=" + CHARSET);
//		    httpResponse.getWriter().write(form);//直接将完整的表单html输出到页面
//		    httpResponse.getWriter().flush();
//		    httpResponse.getWriter().close();
		    return form;
	}
	
	
	/**
	 * 回调验签
	 * @param params
	 */
	public static void callBackCheckSgin(Map<String,String> params) {
		try {
			boolean rsaCheckSgin = AlipaySignature.rsaCheckV1(params, AlipayConfig.ALIPAY_PUBLIC_KEY, AlipayConfig.CHARSET, AlipayConfig.SIGN_TYPE); //调用SDK验证签名
			if(!rsaCheckSgin) {
//				throw new BusinessException(OrderInfoResultStateEnum.CHECK_SIGN_ERROR.getCode(),OrderInfoResultStateEnum.CHECK_SIGN_ERROR.getMsg());
			}
		} catch (AlipayApiException e) {
//			throw new BusinessException(OrderInfoResultStateEnum.CHECK_SIGN_ERROR.getCode(),OrderInfoResultStateEnum.CHECK_SIGN_ERROR.getMsg());
		}
	}

	
	public static class AlipayTradePagePayRequestVO{
		//订单号
		private String out_trade_no;//QUICK_MSECURITY_PAY
		private final String product_code = "FAST_INSTANT_TRADE_PAY";
		//订单总金额
		private BigDecimal total_amount;
		private String body;
		
		private String passback_params;
		private ExtendParams extend_params;
		private String subject;
		public String getSubject() {
			return subject;
		}
		public void setSubject(String subject) {
			this.subject = subject;
		}
		public String getBody() {
			return body;
		}
		public void setBody(String body) {
			this.body = body;
		}
		public ExtendParams getExtend_params() {
			return extend_params;
		}
		public void setExtend_params(ExtendParams extend_params) {
			this.extend_params = extend_params;
		}
		public String getPassback_params() {
			return passback_params;
		}
		public void setPassback_params(String passback_params) {
			this.passback_params = passback_params;
		}
		public BigDecimal getTotal_amount() {
			return total_amount;
		}
		public void setTotal_amount(BigDecimal total_amount) {
			this.total_amount = total_amount;
		}
		public String getProduct_code() {
			return product_code;
		}
		public String getOut_trade_no() {
			return out_trade_no;
		}
		public void setOut_trade_no(String out_trade_no) {
			this.out_trade_no = out_trade_no;
		}

	}
	
	public static class ExtendParams {
		private String sys_service_provider_id;

		public String getSys_service_provider_id() {
			return sys_service_provider_id;
		}

		public void setSys_service_provider_id(String sys_service_provider_id) {
			this.sys_service_provider_id = sys_service_provider_id;
		}
	}
}

