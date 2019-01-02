import { TestBed } from '@angular/core/blogs';

import { BlogService } from './blog.service';

describe('BlogService', () => {
  beforeEach(() => TestBed.configureissuesModule({}));

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });
});
