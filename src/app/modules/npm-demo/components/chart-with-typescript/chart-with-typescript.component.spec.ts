import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWithTypescriptComponent } from './chart-with-typescript.component';

describe('ChartWithTypescriptComponent', () => {
  let component: ChartWithTypescriptComponent;
  let fixture: ComponentFixture<ChartWithTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWithTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWithTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
