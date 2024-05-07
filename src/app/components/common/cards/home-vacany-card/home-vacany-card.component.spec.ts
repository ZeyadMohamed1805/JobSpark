import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVacanyCardComponent } from './home-vacany-card.component';

describe('HomeVacanyCardComponent', () => {
  let component: HomeVacanyCardComponent;
  let fixture: ComponentFixture<HomeVacanyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeVacanyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeVacanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
