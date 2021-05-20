package com.fang.fen.blog.user.util;

import com.fang.fen.blog.common.exception.SystemErrorException;
import com.fang.fen.blog.user.domain.User;
import com.fang.fen.blog.user.dto.UserDTO;
import com.fang.fen.blog.user.vo.UserVO;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

public class UserUtil {

    public static UserVO convert(User user) {
        UserVO userVO = new UserVO();
        try {
            BeanUtils.copyProperties(userVO, user);
            return userVO;
        } catch (IllegalAccessException e) {
            throw new SystemErrorException(e);
        } catch (InvocationTargetException e) {
            throw new SystemErrorException(e);
        }
    }

    public static List<UserVO> convert(List<User> list) {
        List<UserVO> result = new ArrayList<UserVO>(list.size());
        for (User user : list) {
            result.add(convert(user));
        }
        return result;
    }


    public static User convert(UserDTO userDTO) {
        User user = new User();
        try {
            BeanUtils.copyProperties(user, userDTO);
            return user;
        } catch (IllegalAccessException e) {
            throw new SystemErrorException(e);
        } catch (InvocationTargetException e) {
            throw new SystemErrorException(e);
        }
    }


}
