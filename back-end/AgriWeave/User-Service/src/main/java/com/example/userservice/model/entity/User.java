package com.example.userservice.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users")
@SequenceGenerator(name = "user_seq", sequenceName = "user_seq", initialValue = 1000000000, allocationSize = 1)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @Column(name = "user_id", nullable = false, unique = true)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String phone;

    @JsonIgnore
    private String password;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name= "address")
    private String address;

    private String companyName;
    private String nid;
    private String paymentInfo;

    private RoleName role;
    private String vehicle;



}
