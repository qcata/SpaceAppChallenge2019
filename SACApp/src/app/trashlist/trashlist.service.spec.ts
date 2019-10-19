import { TestBed } from '@angular/core/testing';

import { TrashlistService } from './trashlist.service';

describe('TrashlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrashlistService = TestBed.get(TrashlistService);
    expect(service).toBeTruthy();
  });
});
