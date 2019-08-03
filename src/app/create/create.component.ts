import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../models/Pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
