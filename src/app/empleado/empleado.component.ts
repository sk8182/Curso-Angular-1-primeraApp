import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './empleado.component.html',
  template:"<p>aquí iría un empleado</p>",
  //styleUrl: './empleado.component.css'
  styles:["p{background-color: blueviolet;}"]//le meto el css o html directamente
})
export class EmpleadoComponent {

}
