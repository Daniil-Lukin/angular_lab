import { TestBed } from '@angular/core/testing';

import { RelatedVideosResolver } from './related-videos.resolver';

describe('RelatedVideosResolver', () => {
  let resolver: RelatedVideosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RelatedVideosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
