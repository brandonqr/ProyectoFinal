import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgDefaultPipe'
})
export class imgDefaultPipe implements PipeTransform {
  transform( value: any ): string {
    let imgDefault:string ="../../assets/img/perfilDefault.png";
   if( !value ){
     return imgDefault;
   }
   return ( value.length > 0 ) ? value: imgDefault;
  }
}
