import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../../services/search.service';

import * as searchAnswer from 'src/mocked/search-response.json'

import { SearchResultPageComponent } from './search-result-page.component';
import { of, pipe, switchMap } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('SearchResultPageComponent', () => {
  let component: SearchResultPageComponent;
  let router: Router;
  let mockSearchService: any;
  let mockActivatedRoute: any;

  beforeEach(() => {
    mockSearchService = jasmine.createSpyObj('SearchService',{
      'getVideos': of(searchAnswer),
      'changeState': 'true',
      'handleError': 'PIPIPUPU'
    });
    mockActivatedRoute = { 
      queryParams: of({query: 'search'})
    };
    component = new SearchResultPageComponent(mockSearchService, mockActivatedRoute, router);
  });


  it('should get a value from the service and set it correctly', () => {
    mockSearchService.getVideos.and.returnValue(of(searchAnswer));

    (component as any)._getSearchData();

    expect(component.videoList).toEqual(searchAnswer);
    expect(mockSearchService.getVideos).toHaveBeenCalledWith('search');
  });
});