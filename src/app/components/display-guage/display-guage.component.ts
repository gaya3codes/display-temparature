import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { iTemparatureInputs } from 'src/app/models/temparature-inputs.model';

@Component({
  selector: 'app-display-guage',
  templateUrl: './display-guage.component.html',
  styleUrls: ['./display-guage.component.scss'],
})
export class DisplayGuageComponent implements OnInit, OnChanges {
  temp: any;
  angleNeedToRotate: number;
  @Input() temparatureInputs: iTemparatureInputs;

  constructor() {}

  ngOnInit(): void {}

  displayTemparature(
    minTemp: number,
    maxTemp: number,
    currentTemp: number
  ): void {
    const intervals = maxTemp - minTemp;
    const angleForEachInterval = 270 / intervals;
    this.angleNeedToRotate = Math.round(
      angleForEachInterval * (currentTemp - minTemp)
    );
    document.getElementById('pointer').style.transform = `rotate(${
      this.angleNeedToRotate - 45
    }deg)`;
  }

  ngOnChanges(): void {
    const temp = this.temparatureInputs;
    this.displayTemparature(temp.minTemp, temp.maxTemp, temp.currentTemp);
  }
}
