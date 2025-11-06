import { Component, Input } from '@angular/core';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  // Optional: Add methods for handling cart actions
  addToCart() {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', this.product);
  }
}
