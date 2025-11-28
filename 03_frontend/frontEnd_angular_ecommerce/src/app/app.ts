import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';
import { GeneralMenu } from './components/general-menu/general-menu';
import { ComplexSearchProduct } from './components/complex-search-product/complex-search-product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCategoryMenu, ComplexSearchProduct, GeneralMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ProductService]
})
export class App {
  protected readonly title = signal('frontEnd_angular_ecommerce');
}
