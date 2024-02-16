import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalseLinkComponent } from './false-link.component';

describe('FalseLinkComponent', () => {
  let component: FalseLinkComponent;
  let fixture: ComponentFixture<FalseLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FalseLinkComponent]
    });
    fixture = TestBed.createComponent(FalseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
