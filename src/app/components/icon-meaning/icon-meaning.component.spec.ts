import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMeaningComponent } from './icon-meaning.component';

describe('IconMeaningComponent', () => {
  let component: IconMeaningComponent;
  let fixture: ComponentFixture<IconMeaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMeaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
