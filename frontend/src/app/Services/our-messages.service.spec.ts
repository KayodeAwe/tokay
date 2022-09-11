import { TestBed } from '@angular/core/testing';

import { OurMessagesService } from './our-messages.service';

describe('OurMessagesService', () => {
  let service: OurMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
