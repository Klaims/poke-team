import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  frenchPokemon : string[];
  valid : boolean;
  selected : Pokemon;

  constructor(private pokemonService : PokemonService, private router : Router) { }

  ngOnInit() {

    this.frenchPokemon = this.pokemonService.frenchPokemon;
    this.valid = true;
  }

  selectPokemon(form : NgForm) {

    this.selected = null;
    const nameFr = form.value['nameFr'];

    if ( this.frenchPokemon.includes( nameFr ) ) {

      this.pokemonService.getPokemon(nameFr).subscribe( data => {

        let poke = this.pokemonService.createPokemon(data);
        this.selected = poke;
      });

      this.valid = true;
    }
    else {

      this.valid = false;
    }
  }

  submitPokemon(form : NgForm) {

    this.pokemonService.addPokemon(this.selected);
    this.router.navigate(['./create']);
  }

  goBack() {

    this.selected = null;
    this.router.navigate(['./create']);
  }
}
