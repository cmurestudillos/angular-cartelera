import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string="c2748618c1998925f6d77c978bff9418";
  private urlMoviedb:string = " https://api.themoviedb.org/3";
  peliculas:any [] = [];

  constructor(private http: HttpClient) { }

  //Obtenemos un listado de las peliculas en cartelera
  getCartelera(){
    let yearDesde = new Date().getFullYear();
    let monthDesde = new Date().getMonth();
    let dayDesde = new Date().getDate();

    let yearHasta = new Date().getFullYear();
    let monthHasta = new Date().getMonth();
    let dayHasta = new Date().getDate() + 7;

    let fechaDesde = `${ yearDesde }-${ monthDesde }-${ dayDesde }`;
    let fechaHasta = `${ yearHasta }-${ monthHasta }-${ dayHasta }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fechaDesde }&primary_release_date.lte=${ fechaHasta }&api_key=${ this.apikey }`;

    return this.http.get(url).pipe(map( (resp:any) => {
      resp.results
      return resp.results
    } ) );
  }

  //Obtenemos un listado de las peliculas mas populares para los niños
  getPopularesKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=ES&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }`;

    return this.http.get(url).pipe(map( (resp:any) => {
                resp.results
                return resp.results
              } ) );
  }

  //Obtenemos un listado de las peliculas mas populares
  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }`;

    return this.http.get(url).pipe(map( (resp:any) => {
                resp.results
                return resp.results
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
