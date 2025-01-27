import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonentrenaComponent } from './botonentrena.component';

describe('BotonentrenaComponent', () => {
  let component: BotonentrenaComponent;
  let fixture: ComponentFixture<BotonentrenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonentrenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonentrenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
