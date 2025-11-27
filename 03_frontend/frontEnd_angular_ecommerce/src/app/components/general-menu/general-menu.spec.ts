import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMenu } from './general-menu';

describe('GeneralMenu', () => {
  let component: GeneralMenu;
  let fixture: ComponentFixture<GeneralMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
