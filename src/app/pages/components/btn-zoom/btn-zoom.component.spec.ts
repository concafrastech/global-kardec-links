import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnZoomComponent } from './btn-zoom.component';

describe('BtnZoomComponent', () => {
  let component: BtnZoomComponent;
  let fixture: ComponentFixture<BtnZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnZoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
