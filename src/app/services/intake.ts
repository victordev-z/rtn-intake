import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  currentStep = 0;

  forms = [
    { title: 'Welcome Form', completed: false },
    { title: 'Privacy Notice', completed: false },
    { title: 'Consent Form', completed: false },
    { title: 'HIPAA Agreement', completed: false },
    { title: 'Optional Permissions', completed: false }
  ];

  completeStep(index: number) {
    this.forms[index].completed = true;
    this.currentStep++;
    localStorage.setItem('step', this.currentStep.toString());
  }

  loadProgress() {
    this.currentStep = Number(localStorage.getItem('step')) || 0;
  }

  get progress() {
    return (this.currentStep / this.forms.length) * 100;
  }
}