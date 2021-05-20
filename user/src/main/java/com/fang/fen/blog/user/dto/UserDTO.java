package com.fang.fen.blog.user.dto;

import com.fang.fen.blog.user.domain.User;
import com.fang.fen.blog.user.vo.UserVO;

import java.io.Serializable;
import java.util.Date;

public class UserDTO implements Serializable {

    private String account;

    private String name;

    private String password;

    private String mobile;

    private String email;


    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
