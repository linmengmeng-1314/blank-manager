package com.csi.modules.api.controller;


import org.springframework.web.bind.annotation.*;

import com.csi.common.utils.R;
import com.csi.modules.api.annotation.AuthIgnore;
import com.csi.modules.api.annotation.LoginUser;
import com.csi.modules.api.entity.TokenEntity;
import com.csi.modules.api.entity.UserEntity;

/**
 * API测试接口
 *
 * @author wanghonghui
 * @email 448697783@qq.com
 * @date 2017-03-23 15:47
 */
@RestController
@RequestMapping("/api")
public class ApiTestController {

    /**
     * 获取用户信息
     */
    @GetMapping("userInfo")
    public R userInfo(@LoginUser UserEntity user){
        return R.ok().put("user", user);
    }

    /**
     * 忽略Token验证测试
     */
    @AuthIgnore
    @GetMapping("notToken")
    public R notToken(){
        return R.ok().put("msg", "无需token也能访问。。。");
    }

    /**
     * 接收JSON数据
     */
    @PostMapping("jsonData")
    public R jsonData(@LoginUser UserEntity user, @RequestBody TokenEntity token){
        return R.ok().put("user", user).put("token", token);
    }
}
