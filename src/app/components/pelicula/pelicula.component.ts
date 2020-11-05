import { Component, OnInit } from '@angular/core';
// Servicios
import { PeliculasService } from 'src/app/services/peliculas.service';
//Rutas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: '../../views/pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  btnVolver:string="";
  busqueda:string="";

  constructor( public _peliSrv: PeliculasService, public route: ActivatedRoute ) {

    this.route.params.subscribe( parametros => {
      this.btnVolver = parametros['pag'];

      if( parametros['busqueda'] ){
        this.busqueda = parametros['busqueda'];
      }

      this._peliSrv.getPelicula( parametros['id'] )
          .subscribe( pelicula => {
            this.pelicula = pelicula
          });
    });
   }

  ngOnInit() {
  }

}
