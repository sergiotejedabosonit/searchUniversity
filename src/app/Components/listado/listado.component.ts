import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html' 
})
export class ListadoComponent implements OnInit {

  @Input() universidades!: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
