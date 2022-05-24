import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  numerodoc: number;
  nombre: string;
  apellido: string;
  titulo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {numerodoc: 234554684, nombre: 'Julian', apellido:'Martinez', titulo: 'general, Odontología'}
];
@Component({
  selector: 'app-listamedico',
  templateUrl: './listamedico.component.html',
  styleUrls: ['./listamedico.component.css']
})
export class ListamedicoComponent implements OnInit {
  displayedColumns: string[] = ['numerodoc', 'nombre', 'apellido', 'titulo'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
