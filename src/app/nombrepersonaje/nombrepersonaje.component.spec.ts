import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrepersonajeComponent } from './nombrepersonaje.component';

describe('NombrepersonajeComponent', () => {
  let component: NombrepersonajeComponent;
  let fixture: ComponentFixture<NombrepersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombrepersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombrepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
