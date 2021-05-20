package com.fang.fen.blog.apigateway.security.repository;

import com.fang.fen.blog.apigateway.security.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {


    User findByAccount(String account);

}
