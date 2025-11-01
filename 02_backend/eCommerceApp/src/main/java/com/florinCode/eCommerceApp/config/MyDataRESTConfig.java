package com.florinCode.eCommerceApp.config;

import com.florinCode.eCommerceApp.entity.Product;

import com.florinCode.eCommerceApp.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRESTConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod[] unsupportedRestActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
        // Disable PUT, POST & DELETE for Product
        // forDomainType - specify the Repository - Product Repo
        // withItemExposure - unable methods for a given product item
        // withCollectionExposure - unable methods for collection
        // withAssociationExposure - for relations between tables ex delete one category -> delete all products of that category

        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedRestActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedRestActions));


//        config.getExposureConfiguration()
//                .forDomainType(Product.class)
//                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(HttpMethod.PUT, HttpMethod.DELETE))
//                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable( HttpMethod.PUT, HttpMethod.DELETE));


        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(((metadata, httpMethods) -> httpMethods.disable(unsupportedRestActions)))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedRestActions));

    }
}
