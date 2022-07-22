import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
  pure: false // para que si dispare el metodo transform cada vez que halla cambios.
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe): string {

    if((!value.id && !value.alt_img) ){
      return "assets/no-image.png";
    }else if(value.alt_img){
      return value.alt_img;
    }
    
    return `assets/heroes/${value.id}.jpg`;
  }

}
