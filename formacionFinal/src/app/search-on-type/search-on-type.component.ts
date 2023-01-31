import { Component } from '@angular/core';
import { CharacterInfo, Result } from './character.interface';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styleUrls: ['./search-on-type.component.css'],
})
export class SearchOnTypeComponent {
  filter: string = 'all';
  term: string = '';
  characters!: Result[];
  constructor(private rAndMService: RickAndMortyService) {}
  clean() {
    this.filter = 'all';
  }
  filterHuman() {
    this.filter = 'human';
  }

  filterAnimal() {
    this.filter = 'animal';
  }

  filterMithologic() {
    this.filter = 'mithologic';
  }

  filterAlien() {
    this.filter = 'alien';
  }

  filterRobot() {
    this.filter = 'robot';
  }

  search() {
    if (this.filter === 'all') {
      this.rAndMService
        .search(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.filter === 'human') {
      this.rAndMService
        .searchHuman(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.filter === 'alien') {
      this.rAndMService
        .searchAlien(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.filter === 'robot') {
      this.rAndMService
        .searchRobot(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.filter === 'animal') {
      this.rAndMService
        .searchAnimal(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    } else if (this.filter === 'mithologic') {
      this.rAndMService
        .searchMithologic(this.term)
        .subscribe((characters: CharacterInfo) => {
          this.characters = characters.results;
          console.log(this.characters);
        });
    }
  }
}
