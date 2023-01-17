import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { DetallesEmpleadoComponent } from './detalles-empleado/detalles-empleado.component';
import { EmpleadoPipePipe } from './pipes/empleado.pipe.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    AgregarEmpleadoComponent,
    ModificarEmpleadoComponent,
    DetallesEmpleadoComponent,
    EmpleadoPipePipe,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
