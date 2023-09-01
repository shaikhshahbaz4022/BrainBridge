import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrNavbarComponent } from './instr-navbar.component';

describe('InstrNavbarComponent', () => {
  let component: InstrNavbarComponent;
  let fixture: ComponentFixture<InstrNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrNavbarComponent]
    });
    fixture = TestBed.createComponent(InstrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
