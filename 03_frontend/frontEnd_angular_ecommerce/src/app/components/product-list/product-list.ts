import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css',
})


export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    console.log('Starting to fetch products...');
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      });
  }
}
