package com.example.userservice.services.impl;

import com.example.userservice.model.dto.request.BuyerSignUp;
import com.example.userservice.model.dto.request.Login;
import com.example.userservice.model.dto.response.ResponseMessage;
import com.example.userservice.model.entity.RoleName;
import com.example.userservice.model.entity.User;
import com.example.userservice.repository.UserRepository;
import com.example.userservice.services.BuyerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import reactor.core.publisher.Mono;

@Service
public class BuyerServiceImpl implements BuyerService {

    UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public BuyerServiceImpl(UserRepository userRepository,
                            ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }
    @Override
    public ResponseMessage registerBuyer(BuyerSignUp buyerSignUp) {
        // Check if the email is already in use
        if (userRepository.existsByEmail(buyerSignUp.getEmail())) {
            return new ResponseMessage("Email is already in use");
        }

        // Create a new user
        User user = new User();
        user.setName(buyerSignUp.getName());
        user.setEmail(buyerSignUp.getEmail());

        user.setPassword(buyerSignUp.getPassword());

        // Set role to BUYER
        user.setRole(RoleName.BUYER);

        // Set buyer-specific fields
        user.setAddress(buyerSignUp.getAddress());

        // Save the user to the repository
        userRepository.save(user);

        return new ResponseMessage("Buyer registered successfully");
    }

    @Override
    public ResponseMessage loginBuyer(Login login) {
        String email = login.getEmail();
        String password = login.getPassword();
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            return new ResponseMessage("User not found");
        }
        if (!user.getPassword().equals(password)) {
            return new ResponseMessage("Incorrect password");
        }
        return new ResponseMessage("Login successful");
    }


}
