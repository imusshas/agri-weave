package com.example.productservice.mappers;

import com.example.productservice.dtos.ProductDto;
import com.example.productservice.entities.Category;
import com.example.productservice.entities.Product;

import java.util.Set;

public class ProductMapper {

    public static ProductDto toProductDto(Product product) {

        return ProductDto.builder()
                .productId(product.getId())
                .productName(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .imageUrls(fetchProductImageUrls(product.getId()))
                .categoryName(product.getCategory().getCategoryTitle())
                .categoryImageUrl(product.getCategory().getImageUrl())
                .categoryId(product.getCategory().getCategoryId())
                .sku(product.getSku())
                .minQuantity(product.getMinQuantity())
                .status(product.getStatus())
                .sellerId(product.getSellerId())
                .unit(product.getUnit())
                .soldUnit(product.getSoldUnit())
                .stock(product.getStock())
                .createdAt(product.getCreatedAt())
                .updatedAt(product.getUpdatedAt())
                .dhakaShipping(product.getDhakaShipping())
                .outsideDhakaShipping(product.getOutsideDhakaShipping())
                .avgRating(product.getAvgRating())
                .build();
    }

    static Product toProduct(ProductDto productDto) {
        return Product.builder()
                .id(productDto.getProductId())
                .name(productDto.getProductName())
                .description(productDto.getDescription())
                .price(productDto.getPrice())
                .sku(productDto.getSku())
                .minQuantity(productDto.getMinQuantity())
                .status(productDto.getStatus())
                .sellerId(productDto.getSellerId())
                .unit(productDto.getUnit())
                .soldUnit(productDto.getSoldUnit())
                .stock(productDto.getStock())
                .createdAt(productDto.getCreatedAt())
                .updatedAt(productDto.getUpdatedAt())
                .dhakaShipping(productDto.getDhakaShipping())
                .outsideDhakaShipping(productDto.getOutsideDhakaShipping())
                .avgRating(productDto.getAvgRating())
                .category(
                        Category.builder()
                                .categoryId(productDto.getCategoryId())
                                .categoryTitle(productDto.getCategoryName())
                                .imageUrl(productDto.getCategoryImageUrl())
                                .build()
                )
                .build();
    }


    static Set<String> fetchProductImageUrls(Long id)
    {
        return null;
    }
}
