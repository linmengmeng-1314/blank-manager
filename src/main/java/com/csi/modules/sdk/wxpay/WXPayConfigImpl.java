package com.csi.modules.sdk.wxpay;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.core.io.ClassPathResource;

public class WXPayConfigImpl extends WXPayConfig {
    private String appId = "wx875428f6d16b6ae2";
    private String  mchId = "1534906721";//商户号
    private String key = "voCl6RWGVREWGqj40OFd00TqybgWj8wG";//密钥key
    private byte[] certData;

    private static WXPayConfigImpl INSTANCE;
    
    private WXPayConfigImpl() {
//        String certPath = "D:\\tool\\eclipse\\workspace\\mars\\src\\main\\resources\\apiclient_cert.p12";//证书位置
//        File file = new File(certPath);
        InputStream certStream =null;
        ClassPathResource resource = new ClassPathResource("apiclient_cert.p12");
		try {
			certStream = resource.getInputStream();
	//        InputStream certStream = new FileInputStream(file);
	//        this.certData = new byte[(int) file.length()];
	        ByteArrayOutputStream  output = new ByteArrayOutputStream();
	        byte[] buffer = new byte[1024*4];
	        int n = 0;
	        while (-1 != (n = certStream.read(buffer))) {
	            output.write(buffer, 0, n);
	        }
	        certData = output.toByteArray();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
			if(certStream!=null) {
				try {
					certStream.close();
				} catch (IOException e) {
				}
			}
		}
			
    }

    public static WXPayConfigImpl getInstance() throws Exception{
        if (INSTANCE == null) {
            synchronized (WXPayConfigImpl.class) {
                if (INSTANCE == null) {
                    INSTANCE = new WXPayConfigImpl();
                }
            }
        }
        return INSTANCE;
    }

    public String getAppID() {
        return appId;
    }

    public String getMchID() {
        return mchId;
    }

    public String getKey() {
        return key;
    }

    public InputStream getCertStream() {
        ByteArrayInputStream certBis;
        certBis = new ByteArrayInputStream(this.certData);
        return certBis;
    }


    public int getHttpConnectTimeoutMs() {
        return 2000;
    }

    public int getHttpReadTimeoutMs() {
        return 10000;
    }

	@Override
	IWXPayDomain getWXPayDomain() {
	      // 这个方法需要这样实现, 否则无法正常初始化WXPay
        IWXPayDomain iwxPayDomain = new IWXPayDomain() {
    
            public void report(String domain, long elapsedTimeMillis, Exception ex) {
        
            }
    
            public DomainInfo getDomain(WXPayConfig config) {
                return new IWXPayDomain.DomainInfo(WXPayConstants.DOMAIN_API, true);
            }
        };
        return iwxPayDomain;
    
    }
}
