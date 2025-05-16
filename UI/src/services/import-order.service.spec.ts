import { TestBed } from '@angular/core/testing';

import { ImportOrderService } from './import-order.service';

describe('ImportOrderService', () => {
  let service: ImportOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
