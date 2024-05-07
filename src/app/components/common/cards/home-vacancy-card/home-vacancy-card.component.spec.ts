import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacancyCardComponent } from './home-vacancy-card.component';

describe('HomeVacancyCardComponent', () => {
  let component: HomeVacancyCardComponent;
  let fixture: ComponentFixture<HomeVacancyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeVacancyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeVacancyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
