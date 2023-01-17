import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { IEmpleado } from '../interfaces/iempleado';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css'],
})
export class DetallesEmpleadoComponent implements OnInit{

  id!: number;
  empleado!:IEmpleado;
  auxEvaluacion!:number;
  constructor(private routerParaId:ActivatedRoute,private router:Router, private servicioEmpleado:EmpleadosService) {}


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
      direccion: '',
      imagen: '',
      departamento: '',
      evaluacion: 0,
    }
  }

  ngOnInit(): void {
    this.inicializarEmpleado();
    this.id=this.routerParaId.snapshot.params['id'];
    this.servicioEmpleado.importarListaEmpleadosPorId(this.id).subscribe(dato => {
      this.empleado=dato;
      this.auxEvaluacion=this.empleado.evaluacion
      swal(`Detalles del empleado: ${this.empleado.nombre}`)
    });

  }
  volverLista(){
    this.router.navigate(['/empleados']);
  }

}
