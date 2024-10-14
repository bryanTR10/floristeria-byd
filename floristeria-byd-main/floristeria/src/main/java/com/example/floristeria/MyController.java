package com.example.floristeria;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @GetMapping("/secured")
    @Secured("ROLE_USER")
    public String securedEndpoint() {
        return "This is a secured endpoint";
    }
}
