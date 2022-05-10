import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUpperComponent } from './site-upper.component';

describe('SiteUpperComponent', () => {
  let component: SiteUpperComponent;
  let fixture: ComponentFixture<SiteUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteUpperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
