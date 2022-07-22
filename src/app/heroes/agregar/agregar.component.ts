import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Heroe, Publisher } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  accion ="Add new Heroe";

  publisher = [
    {id:"DC Comics", description:"DC - Comics"},
    {id:"Marvel Comics", description:"Marvel - Comics"}
  ]


  heroe: Heroe = {
    superhero:"",
    alter_ego:"",
    characters:"",
    first_appearance:"",
    publisher:Publisher.DCComics,
    alt_img:""
  }

  constructor(
    private heroeService:HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
    ) { 
    
    }

  ngOnInit(): void {

    if(!this.router.url.includes("editar")) return;

    //leer valores de la url 
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroeService.getHeroeById(id)) //usa destrcuturing para leer el id  y con el switch map llama al service
    )
    .subscribe( heroe =>  this.heroe = heroe); // el switch map llama al service y retorna y heroe y se captura aqui
  }

  guardar(){
    console.log(this.heroe);

    if(this.heroe.superhero.trim().length == 0) return;

    if(this.heroe.id){
      this.heroeService.editHeroe(this.heroe).subscribe(resp => this.showSnaCK("Actualizado!"));
    }else {
      this.heroeService.addHeroe(this.heroe).subscribe(heroe => 
        {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.showSnaCK("Creado!");
        }
      );
    }

  

  }

  showSnaCK(mensaje: string){
    this.snackBar.open(mensaje, "OK!", {
      duration:2500
    });
  }

  borrar(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: "25%",
      data: this.heroe
    })

    dialog.afterClosed().subscribe(res => {
      if(res){
        this.heroeService.deleteHeroe(this.heroe.id!).subscribe(resp => {
          this.router.navigate(["/heroes"])
        })
      }
    })
  }

}
