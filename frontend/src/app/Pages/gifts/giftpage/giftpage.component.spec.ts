import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftpageComponent } from './giftpage.component';

describe('GiftpageComponent', () => {
  let component: GiftpageComponent;
  let fixture: ComponentFixture<GiftpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
