package com.example.productservice.services;

import com.example.productservice.dtos.ProductDto;
import com.example.productservice.entities.Product;
import org.springframework.data.domain.Page;

public interface ProductService {

    ProductDto findById(final Long productId);
    ProductDto save(final ProductDto productDto);
    ProductDto update(final ProductDto productDto);
    ProductDto update(final Integer productId, final ProductDto productDto);
    void deleteById(final Integer productId);
    public Page<Product> getProductsSortedByTitle(int page, int size, boolean asc);
    public Page<Product> getProductsSortedByPrice(int page, int size, boolean asc);
    public Page<Product> getProductsSortedByRating(int page, int size, boolean asc);
    public Page<Product> getProductsSortedByDate(int page, int size, boolean asc);
    public Page<Product> getProductsByCategory(int page, int size, int categoryId);




}
