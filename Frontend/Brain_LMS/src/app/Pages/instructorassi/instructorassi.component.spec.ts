import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorassiComponent } from './instructorassi.component';

describe('InstructorassiComponent', () => {
  let component: InstructorassiComponent;
  let fixture: ComponentFixture<InstructorassiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorassiComponent]
    });
    fixture = TestBed.createComponent(InstructorassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
