package com.example.userservice.services;

import com.example.userservice.model.dto.request.BuyerSignUp;
import com.example.userservice.model.dto.request.Login;
import com.example.userservice.model.dto.response.ResponseMessage;
import com.example.userservice.model.entity.User;
import org.springframework.web.bind.annotation.RequestBody;

public interface BuyerService {

    ResponseMessage registerBuyer(@RequestBody BuyerSignUp buyerSignUp);
    ResponseMessage loginBuyer(@RequestBody Login login);

    ResponseMessage updateBuyer(String email, User newUser);

    ResponseMessage deleteBuyer(String email);
}
