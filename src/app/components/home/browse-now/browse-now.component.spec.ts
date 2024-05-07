import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseNowComponent } from './browse-now.component';

describe('BrowseNowComponent', () => {
  let component: BrowseNowComponent;
  let fixture: ComponentFixture<BrowseNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
