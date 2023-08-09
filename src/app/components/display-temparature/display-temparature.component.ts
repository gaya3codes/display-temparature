import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
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
  errors: any = {};

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
      { validator: this.checkCurrentTempRange() }
    );
    this.temparatureInputs = this.temparatureInputForm.value;
  }

  handleErrors() {}

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
    console.log(this.temparatureInputs);
  }

  // errorMessage(control: string): string {
  //   this.formControls[control].valueChanges.subscribe((newValue) => {
  //     console.log('firstname value changed:', newValue);
  //   });
  //   const errorObject = {
  //     minTemp: {
  //       required: 'Minimum Temparature is required',
  //       outOfRange: 'Enter a value between -40⁰C to +40⁰C',
  //     },
  //     maxTemp: {
  //       required: 'Maximum Temparature',
  //       outOfRange: 'Enter a value between 41⁰C to 100⁰C',
  //     },
  //     currentTemp: {
  //       required: 'Current Temparature is required',
  //       outOfRange: `Enter a value between min and max values`,
  //     },
  //     invalid: 'Enter a numeric value',
  //   };
  //   const form: FormControl = this.formControls[control] as FormControl;
  //   let x;
  //   // console.log(control, form);
  //   // console.log(
  //   //   !!form.errors && form.errors['touched'] && form.errors['required']
  //   // );
  //   if (!!form.errors) {
  //     if (form.errors['touched'] && form.errors['required']) {
  //       x = errorObject[control].required;
  //     } else if (
  //       form.hasError('touched') &&
  //       (form.hasError('min') ||
  //         form.hasError('max') ||
  //         form.hasError('invalidCurrentTemp'))
  //     ) {
  //       x = errorObject[control].outOfRange;
  //     } else if (form.hasError('invalid')) {
  //       x = errorObject['invalid'];
  //     } else x = 'hi';
  //   }
  //   return x;
  // }
}
