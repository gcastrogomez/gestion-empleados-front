import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { IEmpleado } from '../interfaces/iempleado';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit{

  id!: number;
  empleado!:IEmpleado;
  constructor(private servicioEmpleado:EmpleadosService, private router:Router, private routerParaId:ActivatedRoute) {}

  inicializarEmpleado() {
    this.empleado={
      id:0,
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      fechaNacimiento: new Date(''),
      fechaContratacion: new Date(''),
      salario: 0,
      numeroSS: '',
      direccion: '',imagen: '',
      departamento: '',
      evaluacion: 0,
    }
  }
  changeRating(evaluacion: number) {
    this.empleado.evaluacion = evaluacion;
    }


  ngOnInit(): void {
    this.inicializarEmpleado();
    this.id=this.routerParaId.snapshot.params['id'];
    this.servicioEmpleado.importarListaEmpleadosPorId(this.id).subscribe(dato => {
      this.empleado=dato;
      swal(`Modificando al empleado: ${this.empleado.nombre}`)
    });
  }

  modificarEmpleado() {
    this.servicioEmpleado.modificarEmpleado(this.empleado.id,this.empleado).subscribe(datos => {
      console.log(datos)
      this.volverLista()
      swal(
        'Empleado modificado',
        'Empleado modificado con éxito',
        'success'
      );
    },error => console.log(error));
  }

  volverLista(){
    this.router.navigate(['/empleados']);
  }

  enviarFormulario(){
    this.modificarEmpleado();
  }


}
