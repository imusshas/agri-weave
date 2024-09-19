package com.example.userservice.model.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BuyerRegisterDto {
    private Long id;
    private String email;
    private String phone;
    private String name;
    private String address;
    private String paymentInfo;

}
