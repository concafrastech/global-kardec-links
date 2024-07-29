import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomsLinksComponent } from './roms-links.component';

describe('RomsLinksComponent', () => {
  let component: RomsLinksComponent;
  let fixture: ComponentFixture<RomsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomsLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
