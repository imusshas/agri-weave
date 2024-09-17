package com.example.productservice.mappers;

import com.example.productservice.dtos.CategoryDto;
import com.example.productservice.entities.Category;

public class CategoryMapper {

    static CategoryDto toCategoryDto(Category category) {
        return CategoryDto.builder()
                .categoryId(category.getCategoryId())
                .categoryTitle(category.getCategoryTitle())
                .imageUrl(category.getImageUrl())
                .build();
    }

    static Category toCategory(CategoryDto categoryDto) {
        return Category.builder()
                .categoryId(categoryDto.getCategoryId())
                .categoryTitle(categoryDto.getCategoryTitle())
                .imageUrl(categoryDto.getImageUrl())
                .build();
    }
}
