package com.fang.fen.blog.user.domain;


import com.fang.fen.blog.user.constants.SexEnum;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "T_USER")
public class User {

    @Id
    @GeneratedValue(generator = "IdGenerator")
    @GenericGenerator(name = "IdGenerator", strategy = "com.fang.fen.blog.common.id.IdGenerator",
            parameters = {@Parameter(name = "dataCenterId", value = "0"), @Parameter(name = "workerId", value = "0")})
    @Column(name = "id")
    private String id;

    @Column(name = "account")
    private String account;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "email")
    private String email;

    @Column(name = "sex")
    private SexEnum sex;

    @Column(name = "disabled")
    private Boolean disabled;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "create_time")
    private Date createTime;

    @Column(name = "update_time")
    private Date updateTime;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public Boolean getDisabled() {
        return disabled;
    }

    public void setDisabled(Boolean disabled) {
        this.disabled = disabled;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getSex() {
        return sex.toString();
    }

    public void setSex(String sex) {
        this.sex = SexEnum.fromString(sex);
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

//    public static void main(String[] args) {
//        User u = new User();
//        u.setSex("F");
//        System.out.println(u.getSex());
//    }
}
