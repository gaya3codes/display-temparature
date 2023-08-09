import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { iTemparatureInputs } from 'src/app/models/temparature-inputs.model';

@Component({
  selector: 'app-display-temparature',
  templateUrl: './display-temparature.component.html',
  styleUrls: ['./display-temparature.component.scss'],
})
export class DisplayTemparatureComponent implements OnInit {
  temparatureInputs: iTemparatureInputs;
  temparatureInputForm: FormGroup;
  submitted: boolean = false;
  formOptions: AbstractControlOptions = {
    validators: this.checkCurrentTempRange(),
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.temparatureInputForm = this.fb.group(
      {
        minTemp: [
          10,
          [
            Validators.required,
            Validators.min(-40),
            Validators.max(40),
            this.wholeNumberValidator(),
          ],
        ],
        maxTemp: [
          41,
          [
            Validators.required,
            Validators.min(41),
            Validators.max(100),
            this.wholeNumberValidator(),
          ],
        ],
        currentTemp: [22, [Validators.required, this.wholeNumberValidator()]],
      },
      this.formOptions
    );
    this.temparatureInputs = this.temparatureInputForm.value;
  }

  get formControls() {
    return this.temparatureInputForm.controls;
  }

  checkCurrentTempRange(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const min = formGroup.get('minTemp').value;
      const max = formGroup.get('maxTemp').value;
      const current = formGroup.get('currentTemp').value;
      return current < min || current > max
        ? { invalidCurrentTemp: true }
        : null;
    };
  }

  wholeNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return !Number.isInteger(control.value) ? { notValid: true } : null;
    };
  }
  onSubmit(): void {
    this.temparatureInputs = this.temparatureInputForm.value;
  }
}
