package com.florinCode.eCommerceApp.dao;

import com.florinCode.eCommerceApp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.13:4200"})
//@CrossOrigin(origins = "*")
public interface ProductRepository extends JpaRepository<Product, Long> {
}
