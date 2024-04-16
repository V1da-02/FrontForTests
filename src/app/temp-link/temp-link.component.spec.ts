import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempLinkComponent } from './temp-link.component';

describe('TempLinkComponent', () => {
  let component: TempLinkComponent;
  let fixture: ComponentFixture<TempLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempLinkComponent]
    });
    fixture = TestBed.createComponent(TempLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
