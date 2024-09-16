import { PokemonData } from './../../models/pokemonData';
import { NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon: PokemonData

  constructor(private service: PokemonService){
    this.pokemon ={
      id: 0,
      name: "",
      sprites:{front_default:""},
      types:[]
    }
  }
  ngOnInit(): void {
    this.getPokemon('pikachu')
  }
  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe({
      next: (res) =>{
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
        },
    })
  }
}
