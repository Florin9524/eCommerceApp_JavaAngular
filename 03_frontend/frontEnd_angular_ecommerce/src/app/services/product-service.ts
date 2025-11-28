import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs'
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

//rxjs = reactive java script 

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private baseUrl = 'http://florinApp.home.ro:4209/api/products?size=100';  // Înlocuiește cu IP-ul tău real
  // private readonly serverIp = '192.168.1.97';
  // private readonly serverPort = '8080';

  private readonly serverIp = 'florinApp.home.ro';
  private readonly serverPort = '4209';

  private readonly productsAPI = `http://${this.serverIp}:${this.serverPort}/api/products`;
  private readonly productCategoryAPI = `http://${this.serverIp}:${this.serverPort}/api/product-category`;

  private readonly searchByProductCategory = `${this.productsAPI}/search/findByCategoryId?id=`;
  private readonly searchComplexSearch = `${this.productsAPI}/search/findByNameContainingOrCategoryCategoryNameContainingOrDescriptionContaining?`;

  private readonly defaultSize = 120;
  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = theCategoryId === 0
      ? this.productsAPI + "?size=120"
      : `${this.searchByProductCategory}${theCategoryId}`;

    console.log('Calling API:', searchUrl, "category id is ", theCategoryId);


    return this.httpClient.get<GetProductsList>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }



  getProductCategoriesList(): Observable<ProductCategory[]> {

    const searchUrl = this.productCategoryAPI;

    console.log('Calling API:', searchUrl);

    return this.httpClient.get<GetProductCategoriesList>(searchUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  getComplexSearchResult(text: string): Observable<Product[]> {
    const searchUrl = this.searchComplexSearch +
      `name=${text}` +
      `&category_name=${text}` +
      `&description=${text}` +
      `&size=${this.defaultSize}`

    console.log('Calling API:', searchUrl);

    return this.httpClient.get<GetProductsList>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

}

interface GetProductsList {
  _embedded: {
    products: Product[];
  }
}

interface GetProductCategoriesList {
  _embedded: {
    productCategory: ProductCategory[];
  }
}