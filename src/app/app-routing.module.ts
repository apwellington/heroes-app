import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  //cargar ruta hija de authenticacion
  {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)},

  //cargar ruta hija de heroes
  {path: 'heroes', loadChildren: ()=> import('./heroes/heroes.module').then(m => m.HeroesModule)},

  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
