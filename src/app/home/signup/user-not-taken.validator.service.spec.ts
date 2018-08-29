import { TestBed, inject } from '@angular/core/testing';

import { UserNotTaken.ValidatorService } from './user-not-taken.validator.service';

describe('UserNotTaken.ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTaken.ValidatorService]
    });
  });

  it('should be created', inject([UserNotTaken.ValidatorService], (service: UserNotTaken.ValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
