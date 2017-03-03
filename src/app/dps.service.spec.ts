import { TestBed, inject } from '@angular/core/testing';

import { DpsService } from './dps.service';

describe('DpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DpsService]
    });
  });

  it('should ...', inject([DpsService], (service: DpsService) => {
    expect(service).toBeTruthy();
  }));
});
