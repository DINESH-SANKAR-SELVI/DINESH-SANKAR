import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodByeComponent } from './good-bye.component';

describe('GoodByeComponent', () => {
  let component: GoodByeComponent;
  let fixture: ComponentFixture<GoodByeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodByeComponent]
    });
    fixture = TestBed.createComponent(GoodByeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
