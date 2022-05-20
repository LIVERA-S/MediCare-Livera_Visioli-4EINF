import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputcomp2Component } from './inputcomp2.component';

describe('Inputcomp2Component', () => {
  let component: Inputcomp2Component;
  let fixture: ComponentFixture<Inputcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inputcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
