import { NgModule } from '@angular/core';
// Rutas
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'pelicula/:id/:pag', component: PeliculaComponent},
  {path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
