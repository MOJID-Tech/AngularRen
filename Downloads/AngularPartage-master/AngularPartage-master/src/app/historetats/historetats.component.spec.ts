import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoretatsComponent } from './historetats.component';

describe('HistoretatsComponent', () => {
  let component: HistoretatsComponent;
  let fixture: ComponentFixture<HistoretatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoretatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoretatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
