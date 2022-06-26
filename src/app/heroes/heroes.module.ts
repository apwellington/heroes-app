import { NgModule } from '@angular/core';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    HomeComponent,
    HeroeComponent,
    BuscarComponent,
    AgregarComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
