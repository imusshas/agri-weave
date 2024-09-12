package com.example.productservice.dtos;

import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Builder
public class ProductDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long productId;
    private String productName;
    private Set<String> imageUrls;
    private String sku;
    private Double price;
    private Integer minQuantity;
    private Boolean status;
    private Long sellerId;
    private String unit;
    private Double soldUnit;
    private Integer stock;
    private Instant createdAt;
    private Instant updatedAt;
    private String description;
    private String categoryName;
    private Long categoryId;
    private String categoryImageUrl;
    private Double dhakaShipping;
    private double outsideDhakaShipping;
    private Double avgRating;


}
