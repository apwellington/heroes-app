import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  tap, Observable, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth} from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _auth: Auth | undefined;


  private url : string = environment.urlbase;

  get auth(): Auth{
    return {...this._auth!};
  }

  constructor(private httpClient: HttpClient) { }
  

  login(){
    return this.httpClient.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      tap(resp => this._auth = resp),
      tap(auth => localStorage.setItem('token', auth.id))
    )
  }

  logout(){
    this._auth = undefined;
  }

  veficaAuth(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.httpClient.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      map(auth => {
        this._auth = auth;
        return true;
      })
    )
  }
}
