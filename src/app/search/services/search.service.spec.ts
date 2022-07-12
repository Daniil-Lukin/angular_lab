import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { from, of } from 'rxjs';
import { getTestBed, TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { ISearch } from '../interfaces/ISearch';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController; 
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    service = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get videos using getVideos method', () => {
    const dummyVideos = {
      items: [
        {
          id: '123',
          snippet: 'info',
        },
        {
          id: '321',
          snippet: 'info'
        }
      ]
    };

    service.getVideos('cats').subscribe(videos => {
      expect(videos.length).toBe(2);
      expect(videos).toEqual(dummyVideos.items);
    })

    const req = httpMock.expectOne(`${service.getURL()}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyVideos)
  });

  it('should toggle state using changeState method', () => {
    let state: boolean = true;

    service.isList$.subscribe(view => state = view);
    service.changeState(state);

    expect(state).toBe(false)
  });


});
