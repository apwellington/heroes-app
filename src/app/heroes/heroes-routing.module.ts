import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'heroe', component: HeroeComponent
      },
      {
        path: 'listar', component: ListarComponent
      },
      {
        path: 'buscar', component: BuscarComponent
      },
      {
        path: 'editar/:id', component: AgregarComponent
      },
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: ':id', component: HeroeComponent
      },
      {
        path: '**', redirectTo: 'listar'
      },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
