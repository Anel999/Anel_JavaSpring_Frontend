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


getAllTareas():Observable<Tarea[]>{
  return this.http.get<Tarea[]>(this.baseUrl);


}


}
