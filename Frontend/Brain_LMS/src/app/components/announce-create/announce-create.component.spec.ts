import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceCreateComponent } from './announce-create.component';

describe('AnnounceCreateComponent', () => {
  let component: AnnounceCreateComponent;
  let fixture: ComponentFixture<AnnounceCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnounceCreateComponent]
    });
    fixture = TestBed.createComponent(AnnounceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
