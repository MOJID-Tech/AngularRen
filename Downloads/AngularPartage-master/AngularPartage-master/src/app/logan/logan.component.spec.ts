import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoganComponent } from './logan.component';

describe('LoganComponent', () => {
  let component: LoganComponent;
  let fixture: ComponentFixture<LoganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
