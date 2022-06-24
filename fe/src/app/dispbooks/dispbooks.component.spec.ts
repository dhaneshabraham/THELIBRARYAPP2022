import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispbooksComponent } from './dispbooks.component';

describe('DispbooksComponent', () => {
  let component: DispbooksComponent;
  let fixture: ComponentFixture<DispbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
