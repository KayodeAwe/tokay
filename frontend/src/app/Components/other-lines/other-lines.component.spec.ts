import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLinesComponent } from './other-lines.component';

describe('OtherLinesComponent', () => {
  let component: OtherLinesComponent;
  let fixture: ComponentFixture<OtherLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
