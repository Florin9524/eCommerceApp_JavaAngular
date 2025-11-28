import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { ActivatedRoute } from '@angular/router';


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
    console.log('Identify route - paramMap:', this.route.snapshot.paramMap);
    console.log('All params:', this.route.snapshot.paramMap.keys);
    const searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log('Search mode (has keyword):', searchMode);
    if (searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    console.log('[handleSearchProducts]: Starting to fetch products...');
    const keyword = this.route.snapshot.paramMap.get('keyword');
    console.log('[handleSearchProducts]: Keyword is:', keyword);

    if (keyword) {
      this.productService.getComplexSearchResult(keyword).subscribe(
        data => {
          console.log('[handleSearchProducts]: Got data:', data);
          this.products = data;
        },
        error => {
          console.error('[handleSearchProducts]: Error:', error);
        }
      );
    }
  }

  handleListProducts() {
    console.log('[handleListProducts]: Starting to fetch products...');
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
