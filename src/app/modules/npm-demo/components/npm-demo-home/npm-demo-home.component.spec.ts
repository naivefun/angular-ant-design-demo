import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmDemoHomeComponent } from './npm-demo-home.component';

describe('NpmDemoHomeComponent', () => {
  let component: NpmDemoHomeComponent;
  let fixture: ComponentFixture<NpmDemoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmDemoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
