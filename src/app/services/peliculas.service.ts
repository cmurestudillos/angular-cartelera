import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  private urlMoviedb:string = " https://api.themoviedb.org/3";
  peliculas:any [] = [];

  constructor(private http: HttpClient) { }

  //Obtenemos un listado de las peliculas mas populares
  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get(url).pipe(map( (respp:any) => {
      respp.results
                return respp.results;
              } ) );
  }

  // Buscador de peliculas
  buscarPelicula( texto:string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }`;
    return this.http.get( url ).pipe(map( (resp:any) => {
                this.peliculas = resp.results;
                return resp.results
              }));
  }

  //Obtenemos los datos especificos de una pelicula
  getPelicula( id:string ){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }`;

    return this.http.get(url).pipe(map( (resp:any) => { return resp; } ) );
  }

}
