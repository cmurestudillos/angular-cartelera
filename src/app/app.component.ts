import { Component } from '@angular/core';
//Importamos el servicio
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _pelisrv: PeliculasService){
    this._pelisrv.getPopulares().subscribe( data => { 
      //console.log(data)
    } );
  }

}
