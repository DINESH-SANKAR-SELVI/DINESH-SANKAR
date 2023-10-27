import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementCounterComponent } from './achivement-counter.component';

describe('AchivementCounterComponent', () => {
  let component: AchivementCounterComponent;
  let fixture: ComponentFixture<AchivementCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchivementCounterComponent]
    });
    fixture = TestBed.createComponent(AchivementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
