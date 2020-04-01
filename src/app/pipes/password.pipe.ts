import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activo: boolean): string {
    if (activo) {
      return '*'.repeat(value.length);
    }

    return value;
  }

}
