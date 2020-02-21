import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  peliskids: any;

  constructor( public _peliSrv: PeliculasService ) {
    this._peliSrv.getCartelera().subscribe( data => {
      this.cartelera = data;
    });

    this._peliSrv.getPopulares().subscribe( data => {
      this.populares = data;
    });

    this._peliSrv.getPopularesKids().subscribe( data => {
      this.peliskids = data;
    });
  }

  ngOnInit() {
  }

}
