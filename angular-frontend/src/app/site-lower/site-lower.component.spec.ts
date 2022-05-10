import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLowerComponent } from './site-lower.component';

describe('SiteLowerComponent', () => {
  let component: SiteLowerComponent;
  let fixture: ComponentFixture<SiteLowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
