import { TestBed } from '@angular/core/testing';

import { ListExpensesService } from './list-expenses.service';

describe('ListExpensesService', () => {
  let service: ListExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
