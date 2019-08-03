import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() i : number;
  poke : Pokemon;

  constructor( private pokemonService : PokemonService ) { }

  ngOnInit() {

    this.poke = this.pokemonService.pokemons[this.i];
  }

  setCurrentBox(i : number) {

    this.pokemonService.currentBox = i;
    this.pokemonService.selected = this.pokemonService.pokemons[this.i];
  }
}
