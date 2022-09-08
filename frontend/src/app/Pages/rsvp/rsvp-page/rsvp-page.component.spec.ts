import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpPageComponent } from './rsvp-page.component';

describe('RsvpPageComponent', () => {
  let component: RsvpPageComponent;
  let fixture: ComponentFixture<RsvpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsvpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
