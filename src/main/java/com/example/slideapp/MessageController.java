package com.example.slideapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {
    @GetMapping("/api/message")
    public String getMessage() {
        return "Welcome to SlideApp with Spring Boot + React!";
    }
}


