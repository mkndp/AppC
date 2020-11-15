import { TestBed } from '@angular/core/testing';

import { ConferenceapiService } from './conferenceapi.service';

describe('ConferenceapiService', () => {
  let service: ConferenceapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConferenceapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
