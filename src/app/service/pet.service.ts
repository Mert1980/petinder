import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Pet } from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url: string;

  constructor(private http:HttpClient) {
    this.url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any>{
    return this.http.get<Pet[]>(this.url)
    .pipe(map((pets)=> pets.sort((a: Pet, b: Pet)=> a.name.localeCompare(b.name))
    ))
  }
}
