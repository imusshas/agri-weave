package com.example.productservice.services;

import com.example.productservice.dtos.ProductDto;
import com.example.productservice.entities.Product;
import com.example.productservice.mappers.ProductMapper;
import com.example.productservice.repos.CategoryRepository;
import com.example.productservice.repos.ProductPagingSorting;
import com.example.productservice.repos.ProductRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class ProductServiceImpl implements ProductService {


    private final ProductRepo productRepository;
    private final ProductPagingSorting productPagingSorting;
    private final CategoryRepository categoryRepository;
    @Autowired
    public ProductServiceImpl(ProductRepo productRepository , ProductPagingSorting productPagingSorting , CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.productPagingSorting = productPagingSorting;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public ProductDto findById(Long productId) {
        System.out.println("fetching pid: "+productId);
        return productRepository.findById(productId)
                .map(ProductMapper::toProductDto)
                .orElseThrow(()-> new Exception("Product not found"));
    }

    @Override
    public ProductDto save(ProductDto productDto) {
        return null;
    }

    @Override
    public ProductDto update(ProductDto productDto) {
        return null;
    }

    @Override
    public ProductDto update(Integer productId, ProductDto productDto) {
        return null;
    }

    @Override
    public void deleteById(Integer productId) {

    }

    @Override
    public Page<Product> getProductsSortedByTitle(int page, int size, boolean asc) {
        return null;
    }

    @Override
    public Page<Product> getProductsSortedByPrice(int page, int size, boolean asc) {
        return null;
    }

    @Override
    public Page<Product> getProductsSortedByRating(int page, int size, boolean asc) {
        return null;
    }

    @Override
    public Page<Product> getProductsSortedByDate(int page, int size, boolean asc) {
        return null;
    }

    @Override
    public Page<Product> getProductsByCategory(int page, int size, int categoryId) {
        return null;
    }
}
