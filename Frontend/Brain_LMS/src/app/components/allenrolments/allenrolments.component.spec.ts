import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenrolmentsComponent } from './allenrolments.component';

describe('AllenrolmentsComponent', () => {
  let component: AllenrolmentsComponent;
  let fixture: ComponentFixture<AllenrolmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllenrolmentsComponent]
    });
    fixture = TestBed.createComponent(AllenrolmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
