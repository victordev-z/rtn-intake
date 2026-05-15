import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeFlow } from './intake-flow';

describe('IntakeFlow', () => {
  let component: IntakeFlow;
  let fixture: ComponentFixture<IntakeFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntakeFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
