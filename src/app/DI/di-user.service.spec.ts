import { TestBed } from '@angular/core/testing';

import { DiUserService } from './di-user.service';

describe('DiUserService', () => {
  let service: DiUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
