import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBodyComponent } from './library-body.component';

describe('LibraryBodyComponent', () => {
  let component: LibraryBodyComponent;
  let fixture: ComponentFixture<LibraryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
