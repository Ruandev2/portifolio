import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillUrl = 'assets/skills.json'

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(this.skillUrl)
  }
  }

export interface Skills {
  id:number;
  name:string;
  level:string;
  imageUrl:string;
}

