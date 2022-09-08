import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmsgComponent } from './regmsg.component';

describe('RegmsgComponent', () => {
  let component: RegmsgComponent;
  let fixture: ComponentFixture<RegmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
