/// !! AQUI !!! :) Lo que hicimos fue crear todo el SERVICIO  o podriamos decir que hicimos el CRUD :)

//Esta clase es muy importante porque 
//ESTA NOS VA APERMITIR COMUNICARNOS CON UNA API EXTERNA :)
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root' 

  
})
export class TareaService {


  private baseUrl= 'http://localhost:8080/api/tareas';

  constructor(private http:HttpClient) { }


  //Este metodo es para LISTAR TODAS LAS TAREAS :) 

getAllTareas():Observable<Tarea[]>{
  return this.http.get<Tarea[]>(this.baseUrl);

}

//Este metodo es para BUSCAR MI TAREA POR ID
//get OBTENER 

getTareaById(id:number):Observable<Tarea>{
  return this.http.get<Tarea>(`${this.baseUrl}/${id}`);
 
}

//Este metodo es para CREAR UNA TAREA 
//post ENVIAR 

createTarea(tarea:Tarea):Observable<Tarea>{
  return this.http.post<Tarea>(this.baseUrl, tarea);
}

//Este metodo es para ACTUALIZAR TAREA 
//put PONER

updateTarea(id:number,tarea:Tarea):Observable<Tarea>{
  return this.http.put<Tarea>(`${this.baseUrl}/${id}`,tarea);
}

//Este metodo es para   ELIMINAR TAREA 
//El operador void especifica una expresión que se evalúa sin devolver un valor
//PORQUE VOID PORQUE VBOY A ELIMINAR ALGO Y NO ME VA A RETORNAR NADA PORQUE SIMPLEMENTE ME VA A BORRAR ALGO 

deleteTarea(id:number):Observable<void>{
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}


}
