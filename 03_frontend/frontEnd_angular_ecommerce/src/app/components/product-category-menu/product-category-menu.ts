import { Component } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product-service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-category-menu.html',
  styleUrl: './product-category-menu.css',
  providers: [ProductService]
})
export class ProductCategoryMenu {

  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    console.log('Starting to fetch products...');

    this.productService.getProductCategoriesList().subscribe(
      data => {
        this.productCategories = data;
        console.log("Products categories received");
        console.log("Products Categories: ", data);
      });
  }
}


