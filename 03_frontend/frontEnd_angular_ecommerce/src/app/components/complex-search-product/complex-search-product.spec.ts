import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSearchProduct } from './complex-search-product';

describe('ComplexSearchProduct', () => {
  let component: ComplexSearchProduct;
  let fixture: ComponentFixture<ComplexSearchProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexSearchProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexSearchProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
