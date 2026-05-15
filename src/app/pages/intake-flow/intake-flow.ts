import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { IntakeService } from '../../services/intake';

@Component({
  selector: 'app-intake-flow',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './intake-flow.html'
})
export class IntakeFlowComponent {
  signature = '';
  agreed = false;

  constructor(public intake: IntakeService) {
    this.intake.loadProgress();
  }

  next() {
    if (!this.isValid()) return;

    this.intake.completeStep(this.intake.currentStep);
    this.signature = '';
    this.agreed = false;
  }
  prev() {
  if (this.intake.currentStep > 0) {
    this.intake.currentStep--;
  }
}

  isValid() {
    return this.signature && this.agreed;
  }
}