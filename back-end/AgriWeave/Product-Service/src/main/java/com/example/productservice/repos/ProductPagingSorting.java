package com.example.productservice.repos;

import com.example.productservice.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductPagingSorting extends PagingAndSortingRepository<Product, Long> {



        // Paging and sorting by product title
        Page<Product> findAllByOrderByNameAsc(Pageable pageable);
        Page<Product> findAllByOrderByNameDesc(Pageable pageable);

        // Paging and sorting by price
        Page<Product> findAllByOrderByPriceAsc(Pageable pageable);
        Page<Product> findAllByOrderByPriceDesc(Pageable pageable);

        // Paging and sorting by createdAt
        Page<Product> findAllByOrderByCreatedAtAsc(Pageable pageable);
        Page<Product> findAllByOrderByCreatedAtDesc(Pageable pageable);

        // Paging and sorting by updatedAt
        Page<Product> findAllByOrderByUpdatedAtAsc(Pageable pageable);
        Page<Product> findAllByOrderByUpdatedAtDesc(Pageable pageable);

        // Paging and sorting by min_quantity
        Page<Product> findAllByOrderByMinQuantityAsc(Pageable pageable);
        Page<Product> findAllByOrderByMinQuantityDesc(Pageable pageable);

        // Paging and sorting by sold units
        Page<Product> findAllByOrderBySoldUnitAsc(Pageable pageable);
        Page<Product> findAllByOrderBySoldUnitDesc(Pageable pageable);

        // Paging and sorting by unit
        Page<Product> findAllByOrderByUnitAsc(Pageable pageable);
        Page<Product> findAllByOrderByUnitDesc(Pageable pageable);

        // Paging and sorting by category
        Page<Product> findAllByOrderByCategoryAsc(Pageable pageable);
        Page<Product> findAllByOrderByCategoryDesc(Pageable pageable);


}
