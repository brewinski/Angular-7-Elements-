import { TestBed } from '@angular/core/testing';

import { MadeWithLoveService } from './made-with-love.service';

xdescribe('MadeWithLoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MadeWithLoveService = TestBed.get(MadeWithLoveService);
    expect(service).toBeTruthy();
  });
});
