import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsVacanyCardComponent } from './jobs-vacany-card.component';

describe('JobsVacanyCardComponent', () => {
  let component: JobsVacanyCardComponent;
  let fixture: ComponentFixture<JobsVacanyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsVacanyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsVacanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
