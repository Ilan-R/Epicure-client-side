import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsEditFormComponent } from './restaurants-edit-form.component';

describe('RestaurantsEditFormComponent', () => {
  let component: RestaurantsEditFormComponent;
  let fixture: ComponentFixture<RestaurantsEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
