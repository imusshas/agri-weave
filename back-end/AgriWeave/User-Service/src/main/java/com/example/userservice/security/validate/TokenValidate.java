package com.example.userservice.security.validate;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class TokenValidate {

    @Value("${jwt.secret}")
    private String secretKey;

    public boolean validateToken(String token) {
        if (secretKey == null || secretKey.isEmpty()) {
            throw new IllegalArgumentException("Secret key not found in application properties.");
        }

        // Remove "Bearer " prefix if present
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // "Bearer " is 7 characters long
        }

        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            // Check if the token is expired
            return claims.getExpiration().after(new java.util.Date());
        } catch (ExpiredJwtException ex) {
            throw new IllegalArgumentException("Token has expired.", ex);
        } catch (MalformedJwtException ex) {
            throw new IllegalArgumentException("Invalid token.", ex);
        } catch (SignatureException ex) {
            throw new IllegalArgumentException("Token signature validation failed.", ex);
        } catch (IllegalArgumentException ex) {
            throw new IllegalArgumentException("Token validation error: " + ex.getMessage(), ex);
        }
    }
}

