import { TestBed } from '@angular/core/testing';

import { VideoResolver } from './video.resolver';

describe('VideoResolver', () => {
  let resolver: VideoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VideoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
