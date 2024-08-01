import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnYoutubeComponent } from './btn-youtube.component';

describe('BtnYoutubeComponent', () => {
  let component: BtnYoutubeComponent;
  let fixture: ComponentFixture<BtnYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnYoutubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
