package com.florinCode.eCommerceApp.dao;

import com.florinCode.eCommerceApp.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.97:4200",
        "http://192.168.1.97:4209","http://florinapp.home.ro:4209"})
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
