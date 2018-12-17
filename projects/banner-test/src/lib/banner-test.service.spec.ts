import { TestBed } from '@angular/core/testing';

import { BannerTestService } from './banner-test.service';

describe('BannerTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BannerTestService = TestBed.get(BannerTestService);
    expect(service).toBeTruthy();
  });
});
