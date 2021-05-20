package com.fang.fen.blog.user.controller;

import com.fang.fen.blog.user.dto.UserDTO;
import com.fang.fen.blog.user.service.UserService;
import com.fang.fen.blog.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private UserService userService;


    @PostMapping(path = "/create")
    public void create(@RequestBody UserDTO userDTO) {
        userService.create(userDTO);
    }

    @GetMapping(path = "/getByUserName/{userName}")
    public UserVO getByUserName(@PathVariable("userName") String userName) {
        return userService.findByName(userName);
    }

    @GetMapping(path = "/list")
    public List<UserVO> list() {
        return userService.list();
    }

}
