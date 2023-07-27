import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';



@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform( value: number ): string {
    switch ( value ) {
      case 0:
        return 'Rojo';
      case 1:
        return 'Negro';
      case 2:
        return 'Azúl';
      case 3: 
        return 'Verde';
    
      default:
        return '';
    }
  }

}
