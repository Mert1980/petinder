import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/Pet';
import { PetService } from '../service/pet.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets: Pet[] = [];
  selectedPet : Pet | any;
  searchText: string;
  createPetForm = this.formBuilder.group({
    name:'',
    kind:'',
    image:'',
    profileText:'',
    popularity:''
  })

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
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

  addPet(pet: Pet): void{
    this.petService.addPet(pet)
    .subscribe(() => this.getPets())
  }

  selectPet(pet: Pet){
    this.selectedPet = pet;
  }

  onFilterPetsByName(event: Event){
    this.searchText = (<HTMLInputElement>event.target).value;
  }

  deletePet(id : number): void{
    this.petService.deletePet(id)
    .subscribe(()=> this.getPets());
  }

  onSubmit(): void{
    this.petService.addPet(this.createPetForm.value)
    .subscribe(data => {
      console.log(data);
      this.createPetForm.reset();
      this.getPets();
    })
  }

}
