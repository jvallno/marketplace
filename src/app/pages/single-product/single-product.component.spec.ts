import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProduct } from './single-product.component';

describe('SingleProduct', () => {
  let component: SingleProduct;
  let fixture: ComponentFixture<SingleProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProduct ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
