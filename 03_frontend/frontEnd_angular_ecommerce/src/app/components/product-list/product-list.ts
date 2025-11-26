import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { ActivatedRoute } from '@angular/router';
import is from '@angular/common/locales/is';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css',
})


export class ProductList implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 0;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
    // this.listProducts();
  }

  listProducts() {

    console.log('Starting to fetch products...');

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //get the "id" param string and convert it to a number using + trick
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      //do nothing because we initiliaze currentCategoryId with 0
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      });



    // this.productService.getProductList().subscribe(
    //   data => {
    //     this.products = data;
    //   });
  }
}
