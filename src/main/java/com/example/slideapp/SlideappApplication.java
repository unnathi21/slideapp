package com.example.slideapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SlideappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SlideappApplication.class, args);
	}

	// 👇 Add this method below the main method
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/")
						.allowedOrigins("http://localhost:3000");
			}
  };
}
}