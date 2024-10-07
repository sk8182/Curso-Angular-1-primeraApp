import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
 
})
export class EmpleadoComponent {

  nombre= "Juan";
  apellido="Díaz";
  private edad=8;//si modifico y pongo un private necesitaré un getter para acceder
  empresa="Píldoras Informaticas";

  getEdad(){
    return this.edad;
  }

}
