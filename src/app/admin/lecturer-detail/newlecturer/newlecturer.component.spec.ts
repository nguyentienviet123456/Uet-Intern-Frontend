import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlecturerComponent } from './newlecturer.component';

describe('NewlecturerComponent', () => {
  let component: NewlecturerComponent;
  let fixture: ComponentFixture<NewlecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
