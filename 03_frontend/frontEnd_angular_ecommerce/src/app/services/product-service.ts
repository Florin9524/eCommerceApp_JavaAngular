import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs'
import { Product } from '../common/product';

//rxjs = reactive java script 

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://192.168.1.13:8080/api/products?size=100';  // Înlocuiește cu IP-ul tău real

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    console.log('Calling API:', this.baseUrl);


    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
