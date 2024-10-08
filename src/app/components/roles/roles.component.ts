import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular tutorial";
  angularVersion = "18"
  version: number = 18;

  isActive: boolean = false;
   
  inputType: string = "checkbox"

  selectedState: string = '';


  showWelcomeAlert(){
    alert("welcome to angular 18")
  }

  showMessage(message: string){
    alert(message)
  }
}
