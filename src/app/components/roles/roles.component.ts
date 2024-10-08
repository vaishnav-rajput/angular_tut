import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular tutorial";
  angularVersion = "18"
  version: number = 18;

  isActive: boolean = false;
   
}
