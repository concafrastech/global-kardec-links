import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomEspecialComponent } from './rom-especial.component';

describe('RomEspecialComponent', () => {
  let component: RomEspecialComponent;
  let fixture: ComponentFixture<RomEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomEspecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
