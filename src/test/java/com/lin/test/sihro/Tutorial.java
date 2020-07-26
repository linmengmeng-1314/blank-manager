package com.lin.test.sihro;

import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csi.modules.sys.shiro.OAuth2Token;

public class Tutorial {

    private static final transient Logger log = LoggerFactory.getLogger(Tutorial.class);

    public static void main(String[] args) {
        log.info("My First Apache Shiro Application");
        
        OAuth2Token oAuth2Token = new OAuth2Token("hello");
        
        Subject subject = SecurityUtils.getSubject();
        
        subject.login(oAuth2Token);
        
        Session session = subject.getSession();
        
        UsernamePasswordCredentials usernamePasswordCredentials = new UsernamePasswordCredentials("admin", "admin");
        
        System.exit(0);
    }
}
