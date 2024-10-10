import { Component } from '@angular/core';

@Component({
  //element selector Button app-button
  //attribute selector This is just how in CSS you would set up
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
