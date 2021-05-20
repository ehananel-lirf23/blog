package com.fang.fen.blog.user.service;


import com.fang.fen.blog.user.util.UserUtil;
import com.fang.fen.blog.user.domain.User;
import com.fang.fen.blog.user.dto.UserDTO;
import com.fang.fen.blog.user.repository.UserRepository;
import com.fang.fen.blog.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;



    public UserVO create(UserDTO userDTO) {

        User user = UserUtil.convert(userDTO);
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        return  UserUtil.convert(userRepository.save(user));
    }

    public UserVO get(String userId) {

        return UserUtil.convert( userRepository.findOne(userId));
    }

    public UserVO findByName(String userName) {
        return UserUtil.convert( userRepository.findByName(userName));
    }

    public List<UserVO> list() {

        return UserUtil.convert(userRepository.findAll());
    }

}
