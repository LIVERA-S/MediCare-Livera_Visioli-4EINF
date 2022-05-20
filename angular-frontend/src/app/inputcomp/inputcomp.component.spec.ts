import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcompComponent } from './inputcomp.component';

describe('InputcompComponent', () => {
  let component: InputcompComponent;
  let fixture: ComponentFixture<InputcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
