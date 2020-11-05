import { Component, OnInit } from '@angular/core';
// Rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: '../../../views/shared/navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto:string){
    if(texto.length === 0){
      return;
    }
    this.router.navigate(['buscar', texto]);
  }

}
