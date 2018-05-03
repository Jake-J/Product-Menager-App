import { TestBed, inject } from '@angular/core/testing';

import { ProductsStoreService } from './products-store.service';

describe('ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsStoreService]
    });
  });

  it('should be created', inject([ProductsStoreService], (service: ProductsStoreService) => {
    expect(service).toBeTruthy();
  }));
});
