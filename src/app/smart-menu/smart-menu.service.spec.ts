import { TestBed } from '@angular/core/testing';

import { SmartMenuService } from './smart-menu.service';

describe('SmartMenuService', () => {
  let service: SmartMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
