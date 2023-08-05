import { Component, Input, OnInit } from '@angular/core';
import { iTemparatureInputs } from 'src/app/models/temparature-inputs.model';

@Component({
  selector: 'app-display-guage',
  templateUrl: './display-guage.component.html',
  styleUrls: ['./display-guage.component.scss'],
})
export class DisplayGuageComponent implements OnInit {
  temp: any;
  @Input() temparatureInputForm: iTemparatureInputs;
  constructor() {}

  ngOnInit(): void {
    console.log(this.temparatureInputForm);
  }

  displayTemparature(
    minTemp: number,
    maxTemp: number,
    currentTemp: number
  ): void {
    const intervals = Math.floor(maxTemp - minTemp);
    const angleForEachInterval = 270 / intervals;
    const angleNeedToRotate =
      angleForEachInterval * Math.floor(currentTemp - minTemp);
    document.getElementById('pointer').style.transform = `rotate(${
      angleNeedToRotate - 45
    }deg)`;
  }
}
