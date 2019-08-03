import { Component, OnInit, Input} from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit{

  @Input() pokemon : Pokemon

  constructor(private pokemonService : PokemonService) {}

  ngOnInit() {

    let pokemon = this.pokemonService.selected

    if (this.pokemonService.selected.id !== null) {

      this.pokemon = pokemon;
    }
  }
}
