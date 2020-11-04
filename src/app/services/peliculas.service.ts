import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// Configuracion EndPoint API
import {Global} from '../api/global';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas:any [] = [];

  constructor(private http: HttpClient) { }

  //-------------------------------------------------------------------------------------------------------//
  //Obtenemos un listado de las peliculas mas populares                                                    //
  //-------------------------------------------------------------------------------------------------------//
  getPopulares(){
    let url = `${Global.urlApi}/discover/movie?sort_by=popularity.desc&api_key=${Global.urlKey}&language=es-ES&region=ES`;

    return this.http.get(url).pipe(map( (respp:any) => {
      respp.results
                return respp.results;
              } ) );
  }
  //-------------------------------------------------------------------------------------------------------//
  // Buscador de peliculas                                                                                 //
  //-------------------------------------------------------------------------------------------------------//
  buscarPelicula( texto:string ){
    let url = `${Global.urlApi}/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${Global.urlKey}&language=es-ES`;
    return this.http.get( url ).pipe(map( (resp:any) => {
                this.peliculas = resp.results;
                return resp.results
              }));
  }
  //-------------------------------------------------------------------------------------------------------//
  //Obtenemos los datos especificos de una pelicula                                                        //
  //-------------------------------------------------------------------------------------------------------//
  getPelicula( id:string ){
    let url = `${Global.urlApi}/movie/${ id }?api_key=${Global.urlKey}&language=es-ES`;

    return this.http.get(url).pipe(map( (resp:any) => { return resp; } ) );
  }

}
