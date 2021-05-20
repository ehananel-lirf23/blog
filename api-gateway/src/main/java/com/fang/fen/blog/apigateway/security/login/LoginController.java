package com.fang.fen.blog.apigateway.security.login;

import com.fang.fen.blog.apigateway.security.domain.User;
import com.fang.fen.blog.apigateway.security.service.JwtUserDetailsService;
import com.fang.fen.blog.apigateway.security.util.JwtAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/login", produces = "application/json; charset=UTF-8")
public class LoginController {

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping(value = "/")
    public Map<String, String> login(@RequestBody User user) {

        UsernamePasswordAuthenticationToken upToken = new UsernamePasswordAuthenticationToken(user.getAccount(), user.getPassword());

        Authentication authentication = authenticationManager.authenticate(upToken);

        // 将认证存入当前线程
        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(user.getAccount());

        Map<String, String> res = new HashMap<String, String>();
        res.put("token", JwtAuthenticationToken.generateToken(userDetails));

        return  res;

    }



}
