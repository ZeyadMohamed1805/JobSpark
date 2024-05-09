import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenVacanciesComponent } from './open-vacancies.component';

describe('OpenVacanciesComponent', () => {
  let component: OpenVacanciesComponent;
  let fixture: ComponentFixture<OpenVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenVacanciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
