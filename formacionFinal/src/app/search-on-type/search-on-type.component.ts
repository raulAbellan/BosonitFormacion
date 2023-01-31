import { Component } from '@angular/core';
import { CharacterInfo, Result } from './character.interface';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styleUrls: ['./search-on-type.component.css'],
})
export class SearchOnTypeComponent {
  
  activeFilter: string = 'all';
  filters:string[]=['human','alien','robot','animal','mithologic'];
  term: string = '';
  characters!: Result[];


  constructor(private rAndMService: RickAndMortyService) {}
  
  filterActive(filter:string){
    this.activeFilter = filter;
  }
  clean() {
    this.activeFilter = 'all';
  }

  search() {
    if (this.activeFilter === 'all') {
      this.rAndMService
        .search(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.activeFilter === 'human') {
      this.rAndMService
        .searchHuman(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.activeFilter === 'alien') {
      this.rAndMService
        .searchAlien(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.activeFilter === 'robot') {
      this.rAndMService
        .searchRobot(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.activeFilter === 'animal') {
      this.rAndMService
        .searchAnimal(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.activeFilter === 'mithologic') {
      this.rAndMService
        .searchMithologic(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    }
  }
}
