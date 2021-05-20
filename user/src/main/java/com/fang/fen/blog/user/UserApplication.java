package com.fang.fen.blog.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableAutoConfiguration
@EntityScan
@EnableTransactionManagement
@EnableEurekaClient
public class UserApplication {



	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

}
