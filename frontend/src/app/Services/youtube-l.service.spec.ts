import { TestBed } from '@angular/core/testing';

import { YoutubeLService } from './youtube-l.service';

describe('YoutubeLService', () => {
  let service: YoutubeLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
