import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iTemparatureInputs } from 'src/app/models/temparature-inputs.model';

@Component({
  selector: 'app-display-temparature',
  templateUrl: './display-temparature.component.html',
  styleUrls: ['./display-temparature.component.scss'],
})
export class DisplayTemparatureComponent implements OnInit {
  temparatureInputForm: FormGroup;
  submitted: boolean = false;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.temparatureInputForm = this._formBuilder.group({
      minTemp: [null, Validators.required],
      maxTemp: [null, Validators.required],
      currentTemp: [null, Validators.required],
    });
  }

  get minTemp() {
    return this.temparatureInputForm.get('minTemp');
  }

  get maxTemp() {
    return this.temparatureInputForm.get('maxTemp');
  }

  get currentTemp() {
    return this.temparatureInputForm.get('currentTemp');
  }

  onSubmit(value: iTemparatureInputs): void {
    this.submitted = true;
  }
}
