import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complex-search-product',
  standalone: true,
  imports: [],
  templateUrl: './complex-search-product.html',
  styleUrl: './complex-search-product.css',
})
export class ComplexSearchProduct {
  @ViewChild('myInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) { }

  ngOnInit() { }

  performSearchProduct(value: string) {
    console.log(`Perform a complex search for: ${value}`);
    if (value) {
      console.log(`Navigating to complexSearchProduct/${value}`);
      this.router.navigate(['complexSearchProduct', value]).then(success => {
        console.log('Navigation result:', success);
        if (success && this.searchInput) {
          this.searchInput.nativeElement.value = '';
        }
      });
    } else {
      console.warn('Search value is empty or whitespace');
    }
  }
}
