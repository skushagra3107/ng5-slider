import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from '@local/ng5-slider';

@Component({
  selector: 'app-reactive-form-simple-slider',
  templateUrl: './reactive-form-simple-slider.component.html'
})
export class ReactiveFormSimpleSliderComponent {
  sliderControl: FormControl = new FormControl(100);

  options: Options = {
    floor: 0,
    ceil: 250
  };
}