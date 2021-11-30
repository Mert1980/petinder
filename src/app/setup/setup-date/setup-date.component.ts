import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pet } from 'src/app/model/Pet';
import { PetService } from 'src/app/service/pet.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  selectedPet: Pet | any;
  sendTextForm = this.formBuilder.group({
    name:'',
    kind:'',
    image:'',
    profileText:'',
    popularity:''
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PetService,
    private formBuilder: FormBuilder
    ) {
     }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.router.navigate(['/setup-date/' + params.get('name')])
    ));

    this.service
    .getPet(this.route.snapshot.params['name'])
    .subscribe(pet => this.selectedPet = pet);





  }
}
