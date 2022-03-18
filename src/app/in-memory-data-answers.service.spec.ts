import { TestBed } from '@angular/core/testing';

import { InMemoryDataAnswersService } from './in-memory-data-answers.service';

describe('InMemoryDataAnswersService', () => {
  let service: InMemoryDataAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
