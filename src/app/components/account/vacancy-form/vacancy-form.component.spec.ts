import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyFormComponent } from './vacancy-form.component';

describe('VacancyFormComponent', () => {
  let component: VacancyFormComponent;
  let fixture: ComponentFixture<VacancyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
