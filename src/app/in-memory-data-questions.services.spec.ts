import { TestBed } from '@angular/core/testing';

import { InMemoryDataQuestionsService } from './in-memory-data-questions.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDataQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
