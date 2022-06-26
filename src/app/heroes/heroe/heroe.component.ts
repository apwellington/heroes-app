import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private heroeService: HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroeService.getHeroeById(id))
    )
    .subscribe((heroe)=> this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listar'])
  }

}
