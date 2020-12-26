import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleComponent } from './detaille.component';

describe('DetailleComponent', () => {
  let component: DetailleComponent;
  let fixture: ComponentFixture<DetailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
