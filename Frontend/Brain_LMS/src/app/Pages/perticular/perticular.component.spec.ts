import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerticularComponent } from './perticular.component';

describe('PerticularComponent', () => {
  let component: PerticularComponent;
  let fixture: ComponentFixture<PerticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerticularComponent]
    });
    fixture = TestBed.createComponent(PerticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
