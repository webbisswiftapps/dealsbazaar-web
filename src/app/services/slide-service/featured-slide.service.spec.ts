import { TestBed, inject } from '@angular/core/testing';

import { FeaturedSlideService } from './featured-slide.service';

describe('FeaturedSlideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedSlideService]
    });
  });

  it('should be created', inject([FeaturedSlideService], (service: FeaturedSlideService) => {
    expect(service).toBeTruthy();
  }));
});
