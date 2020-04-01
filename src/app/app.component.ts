import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Adrián Borella';
  nombre2 = 'AdRIán BOReLLa';

  arreglo = [1, 2, 3, 4, 5, 6];

  PI = Math.PI;

  porcentaje: number = 0.76;

  total:number = 1389.78;

  data = {
    'nombre': 'Adrian',
    'apellido': 'Borella'
  };

  valorPromesa = new Promise<string>( 
    resolve => {
      setTimeout(
        () => {
          resolve('llego la data');
        }
      , 4500);
    }
  );

  fecha = new Date();

  idioma: string = 'es';

  changeLanguague(lan) {
    this.idioma = lan;
  }


  videoUrl: string = 'https://www.youtube.com/embed/XivWouSymCk';
  activar: boolean = true;
}
