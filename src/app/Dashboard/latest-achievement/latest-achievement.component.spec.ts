import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAchievementComponent } from './latest-achievement.component';

describe('LatestAchievementComponent', () => {
  let component: LatestAchievementComponent;
  let fixture: ComponentFixture<LatestAchievementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestAchievementComponent]
    });
    fixture = TestBed.createComponent(LatestAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
