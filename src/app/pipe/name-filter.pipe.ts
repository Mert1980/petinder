import { Pipe, PipeTransform } from "@angular/core";
import { Pet } from "../model/Pet";

@Pipe({name:'nameFilter'})
export class NameFilterPipe implements PipeTransform {
  transform(pets: Pet[], searchText: string) : any[] {
      return pets.filter(pet => {
      return pet.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
