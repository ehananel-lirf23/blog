package com.fang.fen.blog.user.repository;

import com.fang.fen.blog.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {


    User findByName(String name);

}
