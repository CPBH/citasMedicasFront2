import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  numerodoc: number;
  nombre: string;
  telefono: number;
  email: string;
  tipocita: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numerodoc: 234554684, nombre: 'Julian', telefono: 3278653321, email: 'julian21@gmail.com', tipocita: 'General', fecha: '22/05/2022 13:20:04'}
];

@Component({
  selector: 'app-listapaciente',
  templateUrl: './listapaciente.component.html',
  styleUrls: ['./listapaciente.component.css']
})
export class ListapacienteComponent implements OnInit {
  displayedColumns: string[] = ['numerodoc', 'nombre', 'telefono', 'email', 'tipocita', 'fecha'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
