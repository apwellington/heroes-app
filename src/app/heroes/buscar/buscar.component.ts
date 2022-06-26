import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string ='';
  heroes: Heroe[] = [];
  heroeSelecionado!: Heroe  | undefined;
  hasError = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
      this.heroesService.getSugerencia(this.termino.trim()).subscribe(resp => this.heroes = resp);
  }

  opcionSelecionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSelecionado = undefined;
        return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroeById(heroe.id!).subscribe(resp => this.heroeSelecionado = resp);
  }

}
