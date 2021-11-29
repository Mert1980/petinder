import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/Pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  selectedPet : Pet | any;
  searchText: string;

  constructor(private petService: PetService) {
    this.searchText = ""
  }

  ngOnInit(): void {
    this.getPets();
  }

  getSelectedPet(){
    return this.selectedPet;
  }

  getPets(): void{
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet){
    this.selectedPet = pet;
  }

  onFilterPetsByName(event: Event){
    this.searchText = (<HTMLInputElement>event.target).value;
  }

}
