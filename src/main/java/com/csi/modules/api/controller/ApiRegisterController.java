package com.csi.modules.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csi.common.annotation.CtrlLog;
import com.csi.common.utils.R;
import com.csi.modules.api.annotation.AuthIgnore;
import com.csi.modules.api.service.UserService;

/**
 * 注册
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-03-26 17:27
 */
@RestController
@RequestMapping("/api")
public class ApiRegisterController {
    @Autowired
    private UserService userService;

    /**
     * 注册
     */
    @AuthIgnore
    @RequestMapping("register")
    @CtrlLog("注册")
    public R register(String mobile, String password){
//        Assert.isBlank(mobile, "手机号不能为空");
//        Assert.isBlank(password, "密码不能为空");

        userService.save(mobile, "fds");

        return R.ok();
    }
}
