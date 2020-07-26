package com.csi.modules.sdk.aliyun;
public class AlipayConfig {

	   /**
     * 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
     */
    public static final String APP_ID = "20212342422454379";

    /**
     * 商户私钥，您的PKCS8格式RSA2私钥
     */
    public static final String MERCHANT_PRIVATE_KEY = "YDnpbgrgerhhuV+UZ7W4w==";  

    /**
     * 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
     */
    public static final String ALIPAY_PUBLIC_KEY = "MIIBreAAskiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApW/fXQCOohkYkrmM2RfiPzp1vtTAHqcj934ZdiKuPdjyUnmyRUtgvsAxTYzrCP8fQcFV+yXpgA1GomaDrmeu+RIjvv6X/1s8kIdXlsCXw53hvcojGArLWyoxzBAs0Y07xgcmqJRtk0n+F0bKABAbFrOD/qCf2OIUrjm6rfgW/ecFVNIHGRXV5636oGMf2rBpp0e1RLEzRGr+zyD5Fg36goE8nAF090olVT91Ii2H4T2036J4JAS4uWPN+Ucc8Q8/qRIsGmFaNd4pJ/plfL2batHau8HPiA7l3pns6AW36Kk1UWv8cAEKgntUiyj2dH3qHwQFBZ0fI4WEbpeGonQaUwIDAQAB";

    public static final String APP_PRIVATE_KEY = "MIIESWEFBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC40PRAYCtiOYjXDki6+/VJtDQu6MUnbOxIDla0DLj51D34NJ6DT2PV6ZObW5i66wDWiGn+8ckqOPp2W740rEDYMakkTWmxNskOTQ/lPR2REvBCgzNkyiYXMdF9oCru7pq+8DzVPghT+CQt6UlO2lAp+cX+4FlVGN8ghUlH7hwrUNbRHJO47XCgI6ACAdrU/W4Pn7SLxXZrgQmZ6x1C3FYU8JZwWCzhi13qBJ0WQ18qNc5+QjHIaftrvjdGmc+j/0mkOPD9HNpccD9OtNVJU4gQ8wDRJkGjuGeffSpuTk9bY42z+E7JtXjdZpODdp8Gv99RudjWm4ULSvw2VQ+ON1INAgMBAAECggEBALVSfHC0aZwC6phjsUOSc0MOg6wKP3PAz8iaGMKpQMoLS4k6xtH5j++NLH5dzWiFq9rPF39DZKQCJuj8dY5j+XKitlmhgbKWF4fqX0//OATfWc1Hv6KBGgHjpK7l93lXq4btWCG2rKEFcSmCGaQ9WCz2myTGo55zumXDnvPtTsHG8JqFRttUhyY/21+iGL/2FTnlTC9EpyCQBEvNgMGKgGj5ubroXYrCVO4hJ+/yc686XgrpMwnAjqeBqZEetOidd8/uMy1pSWQmKr+B21kHH7hORWeC5wWdpK469nxyKsm+DgOh5ZMAwgS0lAUqTL+VpFhOtvXR7MsahAN4GX8xZFkCgYEA5j4e2eXTjevohz4R2bbkpj+NJFAXTlG40nN4raWq4/ewNY/XFVwr5Cc08g6f0vtRhcfy5LW359/H/d4MwnChogqLUoH/161c77yL5z2Xd/OOtlbAigypYEItYpezvTntXvxunaVA/wSsHvvttCGKAXjPi6zXFQtkTIhp2FSSzPsCgYEAzX3fuVw/vUh9Dhzu6XOXZOvcbFWCOT99bJsi8J4AF32Fzekm0H7FrlSSeQa4uPO2CczKyEWGSWA2VmHiiphyGAPpWDOi403jxMM3j/PR8SxUipq5v2xsLYgCoACMxCNipHdHBYWb+dhBkzxIsGBU4eibHvvpzhfndEapw73hHpcCgYEAjvU7Sqg89v3nXzHW+4tn5SHIjSd9kQ+E5ob0Az2+IdYE/vzU21pjlkIRycnyyplpQNupoQCDs+Fq1+Irof81HNvXLd+x70ShU+mKJIZFqiD8F5M98XlzIWV1sKXo4DE7haLPO+sDtFQ+Wu6p5RJ+EfPlSiCDW3m7SRnaPowkqkkCgYEAoUzD92kM81RaLWDSvFcqqGJntHXucWd/2WdxJrSvV8EE7dusxw4rt6rVCsEW8L8Ezm59YnUIcsJeBLJzM91z+ZvgZ4aovoneVw3xqEJ4Mjpc5iuL0FGYHKldfiDQXgl0naqvCguVoql4180DNcd3+ZgvY0PUhBzJZsEs8uQyOGMCgYB83YmDn9K+rhC89kYKlEbensJE15UlHEMbKPtaHSceDOd0GUb9H+3+rCC3yvV/pRBwIUpeUT7KfENeqMVAN8wKZhZ/gxbazMoEV6STSgk4ur1hkIgwlWGRMnklQ6ckxjO/RmxDGL551jgXuVnaUYnYjhycnLb6jKndafZv6vJ/jw==";

    
    
    /**
     * 服务器异步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
     */
//    public static final String NOTIFY_URL = "http://www.xx.com/alipay/notify/";
    public static final String APP_URL = "";

    /**
     * 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
     */
    public static final String RETURN_URL = "https://www.baidu.com";

    /**
     * 签名方式
     */
    public static final String SIGN_TYPE = "RSA2";

    /**
     * 字符编码格式
     */
    public static final String CHARSET = "utf-8";

    /**
     * 支付宝网关 - 正式环境
     */
     public static String GATEWAY_URL = "https://openapi.alipay.com/gateway.do";

    /**
     * 支付宝网关 - 沙箱环境
     */
//    public static final String GATEWAY_URL = "https://openapi.alipaydev.com/gateway.do";

    /**
     * 日志存放路径
     */
//    public static final String LOG_PATH = "D:\\181-duanzu\\alipay\\";
}