import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: '../../views/home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  peliskids: any;

  constructor( public _peliSrv: PeliculasService ) {
    this._peliSrv.getPopulares().subscribe( data => {
      this.populares = data;
    });
  }

  ngOnInit() {
  }

}
