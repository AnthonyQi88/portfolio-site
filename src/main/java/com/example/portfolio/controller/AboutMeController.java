package com.example.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.stereotype.Controller;

@Controller
public class AboutMeController {
    @Value("${portfolio.twitter.url}")
    private String twitterUrl;

    @Value("${portfolio.email}")
    private String email;

    @GetMapping("/aboutMe")
    public String about(Model model) {
        model.addAttribute("twitterUrl", twitterUrl);
        model.addAttribute("email", email);
        return "aboutMe";
    }
}
