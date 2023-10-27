import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetComponent } from './skill-set.component';

describe('SkillSetComponent', () => {
  let component: SkillSetComponent;
  let fixture: ComponentFixture<SkillSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillSetComponent]
    });
    fixture = TestBed.createComponent(SkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
