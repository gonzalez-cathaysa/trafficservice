import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

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
    class: 'control',
    //'(click)': 'onClick()'
  }
})
export class ControlComponent {

  //It will take a look at this property name, and it will then add it as a property
  //It is discourage you should use, in the past it was a common way of setting those host properties
  // @HostListener()
  // @HostBinding('class') className = 'control';

  @HostListener('click') onClick() {
    console.log('Clicked');
  }

  label = input.required<string>();

  // onClick(){
  //   console.log('Clicked');
  // }
}
