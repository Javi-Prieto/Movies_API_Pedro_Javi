import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRatedListComponent } from './movie-rated-list.component';

describe('MovieRatedListComponent', () => {
  let component: MovieRatedListComponent;
  let fixture: ComponentFixture<MovieRatedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieRatedListComponent]
    });
    fixture = TestBed.createComponent(MovieRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
