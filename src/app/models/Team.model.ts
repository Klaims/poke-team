import { Pokemon } from './Pokemon.model';

export class Team {

    public name : string;
    public teamOf3 : boolean;
    public pokemons : Pokemon[];

    constructor( name : string, teamOf3 : boolean ) {

        this.name = name;
        this.teamOf3 = teamOf3;
        this.pokemons = [];
    }

    toString() {

        return "TODO";
    }
}