import { NgModule } from '@angular/core';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListarComponent,
    HomeComponent,
    HeroeComponent,
    BuscarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
