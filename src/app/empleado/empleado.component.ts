import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importas FormsModule para ngModel

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
 
})
export class EmpleadoComponent {

  nombre= "Juan";
  apellido="Díaz";
  edad=8;//si modifico y pongo un private necesitaré un getter para acceder
  empresa="Google";


  

  habilitacionCuadro = true;

  usuRegistrado = false;

  textoDeRegistro ="No hay nadie registrado";

  getRegistroUsuario(){

    this.usuRegistrado=false;

  }

  // getEdad(){
  //   return this.edad;
  // }

  llamaEmpresa(value:String){

  }

setUsuarioRegistrado(event:Event){

  //alert("El susuario se acaba de registrar");
  //this.textoDeRegistro="El usuario se acaba de registrar";

  if((<HTMLInputElement>event.target).value =="si"){//casteo el event a HTMLInputElement para extraer el value
    this.textoDeRegistro="El usuario se acaba de resgistrar";
  }else{
    this.textoDeRegistro ="No hay nadie registrado";
  }

}





}
