import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: '../../views/galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() {}

  ngOnInit() {
  }

}
