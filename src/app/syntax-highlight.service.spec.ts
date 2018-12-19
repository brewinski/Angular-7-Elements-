import { TestBed } from '@angular/core/testing';

import { SyntaxHighlightService } from './syntax-highlight.service';

describe('SyntaxHighlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyntaxHighlightService = TestBed.get(SyntaxHighlightService);
    expect(service).toBeTruthy();
  });
});
