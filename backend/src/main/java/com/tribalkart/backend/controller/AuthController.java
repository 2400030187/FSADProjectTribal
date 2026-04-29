package com.tribalkart.backend.controller;

import com.tribalkart.backend.dto.LoginRequest;
import com.tribalkart.backend.dto.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        // Bypass authentication: any username and password works
        // The role selected on the frontend determines where they go
        return ResponseEntity.ok(new LoginResponse(true, "Login successful", request.getRole()));
    }
}
