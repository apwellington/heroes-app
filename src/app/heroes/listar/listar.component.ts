import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroeServie:HeroesService) { }

  ngOnInit(): void {
    this.heroeServie.getHeroes().subscribe(resp => this.heroes = resp);
  }

}
