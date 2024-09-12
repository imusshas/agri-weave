package com.example.productservice.repos;

import com.example.productservice.entities.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CategoryRepository extends JpaRepository<Category,Long> {

    Page<Category> findAll(Pageable pageable);
    Page<Category> findByCategoryTitleContaining(String categoryTitle, Pageable pageable);

}
