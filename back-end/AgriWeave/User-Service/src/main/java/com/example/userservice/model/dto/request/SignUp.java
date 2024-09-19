package com.example.userservice.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import lombok.Setter;


import java.util.Set;
import java.util.Set;

@Setter
@Getter
@RequiredArgsConstructor
public class SignUp {
    private String name;
    

    private String password;

    private String email;
    

    private String phone;

    private String profileImg;

    private Set<String> roles;

}
