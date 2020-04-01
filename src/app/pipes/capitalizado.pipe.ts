import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean): string {
    const arr = value.toLowerCase().split(' ');
    let result = '';
    arr.forEach(element => {
      result += element[0].toUpperCase() + element.substr(1) + ' ';
    });
    return result;
  }

}
