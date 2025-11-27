import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from './services/product-service';
import { ProductList } from './components/product-list/product-list';
import { ProductCategoryMenu } from './components/product-category-menu/product-category-menu';
import { GeneralMenu } from './components/general-menu/general-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ProductList, ProductCategoryMenu, GeneralMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ProductService]
})
export class App {
  protected readonly title = signal('frontEnd_angular_ecommerce');
}
