import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpleado } from '../interfaces/iempleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseURL = "http://localhost:8080/gestion_empleados";

  constructor(private httpClient: HttpClient) { }

    importarListaEmpleados(): Observable<IEmpleado[]>{
      return this.httpClient.get<IEmpleado[]>(`${this.baseURL}`);
    }

    importarListaEmpleadosPorId(id:number): Observable<IEmpleado>{
      return this.httpClient.get<IEmpleado>(`${this.baseURL}/${id}`);
    }

    modificarEmpleado(id: number,e:IEmpleado): Observable<object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,e);
    }

    añadirEmpleado(e:IEmpleado): Observable<object> {
      return this.httpClient.post(`${this.baseURL}`,e);
    }

    eliminarEmpleado(id:number): Observable<object> {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }

  }


