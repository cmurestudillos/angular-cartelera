import { Component, OnInit } from '@angular/core';
// Servicios
import { PeliculasService } from 'src/app/services/peliculas.service';
//Rutas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscador:string = "";
  cargando:boolean = false;

  constructor( public _peliSrv: PeliculasService, public route: ActivatedRoute ) {

    this.cargando = true;

    this.route.params.subscribe( parametros=>{
      if( parametros['texto'] ){
        this.cargando = false;
        this.buscador = parametros['texto'];
        this.buscarPelicula();
      }
    });
   }

  ngOnInit() {
  }


  buscarPelicula(){
    if(this.buscador.length === 0){
      return;
    }
    this._peliSrv.buscarPelicula(this.buscador).subscribe();
  }

}
