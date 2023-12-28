import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private projetosUrl = './assets/projetos.json';
  constructor(private http:HttpClient ) { }

  getProjetos(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(this.projetosUrl)
    
  }

}
export interface Projeto {
  id:number;
  titulo:string;
  descricao:string;
  imageUrl:string;
  url:string;
}
