package com.florinCode.eCommerceApp.config;

import com.florinCode.eCommerceApp.entity.Product;

import com.florinCode.eCommerceApp.entity.ProductCategory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class MyDataRESTConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public MyDataRESTConfig(EntityManager theEntityManager)
    {
        entityManager = theEntityManager;

    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

       // RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

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

        //call an internal helper method to expose the ids;
        exposeIds(config);

    }

    private void exposeIds(RepositoryRestConfiguration config)
    {
        //get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        log.info("we have {} entities", entities.size());
        log.info("entities: {}", entities);
        //create an array of entity types
        List<Class> entityClasses = new ArrayList<>();

        //get the entity types for the entities
        for(EntityType tempEntity : entities)
        {
            entityClasses.add(tempEntity.getJavaType());
        }

        log.info("we have {} entityClasses", entityClasses.size());
        log.info("entities: {}", entityClasses);

        //expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
