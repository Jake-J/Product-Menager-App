import { TestBed, inject } from '@angular/core/testing';

import { DistributorsService } from './distributors.service';

describe('DistributorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributorsService]
    });
  });

  it('should be created', inject([DistributorsService], (service: DistributorsService) => {
    expect(service).toBeTruthy();
  }));
});
