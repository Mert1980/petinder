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

  constructor(private petService: PetService) {}

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

}
