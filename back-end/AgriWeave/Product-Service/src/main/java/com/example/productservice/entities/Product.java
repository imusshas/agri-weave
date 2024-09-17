package com.example.productservice.entities;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;
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
@Builder
@Getter
@Setter
@AllArgsConstructor
@ToString
@RequiredArgsConstructor

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

    @Column(name = "status" , nullable = false )
    private Boolean status;



    @Column(name = "seller_id", nullable = false)
    private Long sellerId;


    @Column(name = "unit")
    private String unit;

    @Column(name = "sold_unit")
    private Double soldUnit;

    @Column(name = "stock")
    private Integer stock;

    @CreatedDate
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @Column(name = "created_at")
    private Instant createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "description")
    private String description;


    @Column(name = "sku")
    private String sku;

    @Column(name = "dhaka_shipping_charge")
    private double dhakaShipping;

    @Column(name = "outside_dhaka_shipping_charge")
    private double outsideDhakaShipping;



    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinColumn(name = "category_id", nullable = false) // This defines the foreign key
    private Category category;


    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private ProductType type;



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

