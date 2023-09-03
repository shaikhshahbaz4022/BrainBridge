import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularAnnounceComponent } from './particular-announce.component';

describe('ParticularAnnounceComponent', () => {
  let component: ParticularAnnounceComponent;
  let fixture: ComponentFixture<ParticularAnnounceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularAnnounceComponent]
    });
    fixture = TestBed.createComponent(ParticularAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
