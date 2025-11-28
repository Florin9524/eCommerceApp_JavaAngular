package com.florinCode.eCommerceApp.dao;

import com.florinCode.eCommerceApp.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.97:4200"})
//@CrossOrigin(origins = "*")
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    Page<Product> findByNameContainingAndCategoryId(String name, Long categoryId, Pageable pageable);

    Page<Product> findByNameContaining(String name, Pageable pageable);

    Page<Product> findByNameContainingAndUnitPriceBetween(
            String name,
            BigDecimal minPrice,
            BigDecimal maxPrice,
            Pageable pageable
    );

    Page<Product> findByNameContainingOrCategoryCategoryNameContainingOrDescriptionContaining(String name, String category_name, String description, Pageable pageable);

//    @Service
//    public Page<Product> searchAProduct(@RequestParam("text") String text,Pageable pageable)
//    {
//        return this
//                .findByNameContainingOrCategoryCategoryNameContainingOrDescriptionContaining(
//                        text, text, text, pageable
//                );
//    }

}
