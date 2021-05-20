package com.fang.fen.blog.apigateway.security.service;


import com.fang.fen.blog.apigateway.security.JwtUserDetails;
import com.fang.fen.blog.apigateway.security.domain.User;
import com.fang.fen.blog.apigateway.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JwtUserDetailsService implements UserDetailsService {


    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List<String> roles = new ArrayList<String>();
        roles.add("ADMIN");

        //  通过用户服务获取用户账号返回用户账号和密码，然后构建JwtUserDetails信息
        User user = userRepository.findByAccount(username);

        // TODO 通过用户账号获取角色信息

        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", user.getAccount()));
        }

        return new JwtUserDetails(user.getAccount(), user.getPassword(), mapToGrantedAuthorities(roles));

    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<String> authorities) {
        return authorities.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }
}
