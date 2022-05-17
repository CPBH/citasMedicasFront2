import { Component, OnInit, ViewChildren } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  fechayhora?: string;
  nombrepaciente?: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {nombrepaciente: '', fechayhora: 'Hydrogen'}
];

@Component({
  selector: 'app-horariomedico',
  templateUrl: './horariomedico.component.html',
  styleUrls: ['./horariomedico.component.css']
})
export class HorariomedicoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = [...ELEMENT_DATA];

  //@ViewChildren(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    //this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
   // this.table.renderRows();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
