import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBookletComponent } from './program-booklet.component';

describe('ProgramBookletComponent', () => {
  let component: ProgramBookletComponent;
  let fixture: ComponentFixture<ProgramBookletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramBookletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBookletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
