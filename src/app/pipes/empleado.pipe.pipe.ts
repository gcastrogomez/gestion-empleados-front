import { Pipe, PipeTransform } from '@angular/core';
import { IEmpleado } from '../interfaces/iempleado';

@Pipe({
  name: 'filtroBusqueda'
})
export class EmpleadoPipePipe implements PipeTransform {

  transform(empleados:IEmpleado[], filterBy:string ): IEmpleado[] {
    const filter=filterBy ? filterBy.toLocaleLowerCase():null;
    return filter?
      empleados.filter(empleado => empleado.nombre.toLocaleLowerCase().includes(filter)||
      empleado.apellidos.toLocaleLowerCase().includes(filter)): empleados;
  }

}
