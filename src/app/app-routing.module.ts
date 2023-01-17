import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { DetallesEmpleadoComponent } from './detalles-empleado/detalles-empleado.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component: ListaEmpleadosComponent},
  {path: '', redirectTo: 'empleados', pathMatch:'full'},
  {path: 'agregar-empleado', component: AgregarEmpleadoComponent},
  {path: 'modificar-empleado/:id', component: ModificarEmpleadoComponent},
  {path: 'detalles-empleado/:id', component: DetallesEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
