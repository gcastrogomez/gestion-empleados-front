
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmpleado } from '../interfaces/iempleado';
import { EmpleadosService } from '../services/empleados.service';
import swal from 'sweetalert2';


@Component({
  selector: 'lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  filtroBusqueda = '';

  empleados!: IEmpleado[];

  constructor(
    private servicioEmpleado: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.importarListaEmpleados();
  }

  detallesEmpleado(id: number) {
    this.router.navigate(['detalles-empleado', id]);
  }

  modificarEmpleado(id: number) {
    this.router.navigate(['modificar-empleado', id]);
  }

  eliminarEmpleado(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar al empleado',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#81b61d',
      cancelButtonColor: '#df0b0b',
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'No lo borres',
      confirmButtonClass: 'btn btn.success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.servicioEmpleado.eliminarEmpleado(id).subscribe((dato) => {
          console.log(dato);
          this.importarListaEmpleados();
          swal(
            'Empleado borrado',
            'Empleado eliminado con éxito',
            'success'
          );
        });
      }
    });
  }

  private importarListaEmpleados() {
    this.servicioEmpleado.importarListaEmpleados().subscribe((dato) => {
      this.empleados = dato;
    });
  }
}
