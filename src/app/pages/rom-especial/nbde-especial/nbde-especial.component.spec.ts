import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbdeEspecialComponent } from './nbde-especial.component';

describe('NbdeEspecialComponent', () => {
  let component: NbdeEspecialComponent;
  let fixture: ComponentFixture<NbdeEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbdeEspecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbdeEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
