package com.csi.modules.sys.shiro;


import org.apache.shiro.authc.AuthenticationToken;

/**
 * 自定义token
 *	
 * @author linmengmeng
 * @date 2018-05-20 14:00
 */
public class OAuth2Token implements AuthenticationToken {
    private String token;

    public OAuth2Token(String token){
        this.token = token;
    }

    @Override
    public String getPrincipal() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }
}
