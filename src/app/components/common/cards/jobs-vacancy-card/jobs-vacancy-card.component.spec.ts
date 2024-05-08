import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsVacancyCardComponent } from './jobs-vacancy-card.component';

describe('JobsVacancyCardComponent', () => {
  let component: JobsVacancyCardComponent;
  let fixture: ComponentFixture<JobsVacancyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsVacancyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsVacancyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
