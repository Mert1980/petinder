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

  addPet(pet: Pet) : Observable<any>{
    return this.http.post(this.url, pet);
  }

  getPet(name: string): Observable<any>{
    return this.http.get(this.url + "/" + name)
  }

  deletePet(id: number): Observable<any>{
    return this.http.delete(this.url + "/" + id)
  }
}
