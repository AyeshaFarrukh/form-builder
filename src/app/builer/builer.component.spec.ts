import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilerComponent } from './builer.component';

describe('BuilerComponent', () => {
  let component: BuilerComponent;
  let fixture: ComponentFixture<BuilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
