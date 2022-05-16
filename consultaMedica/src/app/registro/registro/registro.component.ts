import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  selectedtipodocumento!: string;
  tpdocumento: tipodocumentoEntity={};
  selectedeps!: string;
  tpeps: epsEntity={};
  constructor() { }

  ngOnInit(): void {
  }
  tipodocumentos: tipodocumentoEntity[] = [
    {codigo: '1', descripcion: 'Cédula'},
    {codigo: '2', descripcion: 'Tarjeta Identidad'},
    {codigo: '3', descripcion: 'Cédula Extrangera'},
  ];
  eps: epsEntity[]=[
    {codigo: '1', descripcion: 'DataPrism'},
    {codigo: '2', descripcion: 'Nueva EPS'},
    {codigo: '3', descripcion: 'Sura'},
  ];
  clearForm(){
    this.tpdocumento={};
    this.tpeps={};
  }

}
interface tipodocumentoEntity {
  codigo?: string;
  descripcion?: string;
}

interface epsEntity{
  codigo?: string;
  descripcion?: string;
}