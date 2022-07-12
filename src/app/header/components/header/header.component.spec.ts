import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };
  let httpMock: HttpTestingController;

  const MockChild = jasmine.createSpyObj('SearchContainerComponent', {}, {queryArray: ['cats']})

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.searchQuery = '';
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass query cats thru checkProfanity', () => {
    component.searchQuery = 'cats';

    expect(component.checkProfanity()).toBeTrue();
  })

  it('should not pass profanity query thru checkProfanity', () => {
    component.searchQuery = 'simp';

    expect(component.checkProfanity()).toBeFalse();
    
  });

  it('should pass query 123 thru chekDublicate', () => {
    component.searchQuery = '123';
    component.child = MockChild;

    expect(component.checkDublicateReq()).toBeTrue();
  });

  it('should not pass query cats thru chekDublicate', () => {
    component.searchQuery = 'cats';
    component.child = MockChild;

    expect(component.checkDublicateReq()).toBeFalse();
  });

  it('should pass query 123 to queryParams', () => {
    component.searchQuery = '123';
    component.child = MockChild;

    component.onSearchClick();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/search'], {
      queryParams: {query: component.searchQuery}
    });
  })

  it('should not call navigate with cats query', () => {
    component.searchQuery = 'cats';
    component.child = MockChild;

    component.onSearchClick();

    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should rederect to default search page with empty query params', () => {
    component.onHomeClick();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/search'], {
      queryParams : {query: ''}
    });
  });

  it('should toggle displayQueries using onSearchClick method', () => {
    component.displayQueries = false;

    component.onSearchListClick();

    expect(component.displayQueries).toBeTrue();
  });
});
