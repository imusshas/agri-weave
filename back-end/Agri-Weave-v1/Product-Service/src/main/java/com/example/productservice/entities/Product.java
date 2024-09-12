package com.example.productservice.entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "products", indexes = {
        @Index(name = "idx_product_id", columnList = "id"),
        @Index(name = "idx_product_name", columnList = "name"),
        @Index(name = "idx_product_price", columnList = "price"),
        @Index(name = "idx_sold_unit", columnList = "sold_unit"),
        @Index(name = "idx_created_at", columnList = "created_at"),
})
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
@RequiredArgsConstructor
@Builder
public class Product implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "item_seq")
    @SequenceGenerator(name = "item_seq", sequenceName = "item_seq", allocationSize = 1, initialValue = 1000000000)
    @Column(name = "id", unique = true, nullable = false, updatable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price", columnDefinition = "decimal")
    private Double price;

    @Column(name = "min_quantity")
    private Integer minQuantity;

    @Column(name = "unit")
    private String unit;

    @Column(name = "sold_unit")
    private Integer soldUnit;

    @Column(name = "stock")
    private Integer stock;

    @CreatedDate

    @Column(name = "created_at")
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "description")
    private String description;


    @Column(name = "sku")
    private String sku;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false) // This defines the foreign key
    private Category category;


    @Column(name = "type")
    private String type;

    @Column(name="avg_rating" )
    private Double avgRating = 0.0;
    // This could be "PRODUCT", "SCHEME", or "CATEGORY"

    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) return false;
        Product product = (Product) o;
        return getId() != null && Objects.equals(getId(), product.getId());
    }

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
    }
}

