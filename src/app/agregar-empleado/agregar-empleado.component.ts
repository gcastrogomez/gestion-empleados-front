import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IEmpleado } from '../interfaces/iempleado';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
export class AgregarEmpleadoComponent implements OnInit {
  empleado!: IEmpleado;

  constructor(
    private empleadoService: EmpleadosService,
    private router: Router
  ) {}

  inicializarEmpleado() {
    this.empleado = {
      id: 0,
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
    };
  }

  ngOnInit(): void {
    this.inicializarEmpleado();
    console.log(this.empleado);
  }

  agregarempleado() {
    this.empleadoService.añadirEmpleado(this.empleado).subscribe(
      (datos) => {
        console.log(datos);
        swal('Empleado añadido', 'Empleado añadido con éxito', 'success');
        this.volverLista();
      },
      (error) => console.log(error)
    );
  }

  volverLista() {
    this.router.navigate(['/empleados']);
  }

  enviarFormulario() {
    this.agregarempleado();
  }
}
