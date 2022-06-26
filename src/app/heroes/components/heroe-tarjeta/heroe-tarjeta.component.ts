import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent  {

  //con el signo de admiracion invertido le decimos al ts que eso siempre va a tener una valor 
  @Input("heroe")
  heroe!: Heroe;


}
