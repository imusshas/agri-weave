package com.example.userservice.apis;

import com.example.userservice.model.dto.request.BuyerSignUp;
import com.example.userservice.model.dto.response.BuyerRegisterDto;
import com.example.userservice.model.dto.response.ResponseMessage;
import com.example.userservice.services.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import reactor.core.publisher.Mono;

@RequestMapping("user/auth")
@Controller
public class Auth {

    private final BuyerService buyerService;

    @Autowired
    public Auth(BuyerService buyerService) {
        this.buyerService = buyerService;
    }
    @PostMapping("/buyer/register")
    public ResponseEntity<ResponseMessage> registerBuyer(@RequestBody BuyerSignUp buyerSignUp) {
        ResponseMessage responseMessage = buyerService.registerBuyer(buyerSignUp);
        return ResponseEntity.ok(responseMessage);
    }
    @PostMapping("/buyer/login")
    public Mono<ResponseEntity<ResponseMessage>> loginBuyer(@RequestBody BuyerSignUp buyerSignUp) {
        return Mono.just(ResponseEntity.ok(buyerService.registerBuyer(buyerSignUp)));
    }

}
