import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //Host wants an object as a value, and that object takes key value pairs of your choice
  //So here I could add a key named class
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
}
