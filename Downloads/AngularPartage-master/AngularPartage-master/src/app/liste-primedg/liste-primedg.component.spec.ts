import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePrimedgComponent } from './liste-primedg.component';

describe('ListePrimedgComponent', () => {
  let component: ListePrimedgComponent;
  let fixture: ComponentFixture<ListePrimedgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePrimedgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePrimedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
