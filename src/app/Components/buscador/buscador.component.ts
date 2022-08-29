import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuscadorService } from 'src/app/services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
    `
    .container_2{
        height: 52.063px;
        display: flex
    }
    .mat-raised-button{
      min-width: 110px;
    }
    `
  ]
})
export class BuscadorComponent implements OnInit {

  pais: string = 'Spain'
  name: string = ''
  universidades: any 

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor(  
    private bs: BuscadorService
  ) { }

  ngOnInit(): void {
  }

  cambiarPais(pais: string){
    this.pais = pais
    
  }

  buscar(){
    
    this.bs.buscarUniversidades(this.pais, this.name).subscribe(
      resp => {this.universidades = resp 
      }
    )
  }

  buscarAll( pais: string){
 
    this.bs.buscarUniversidades(pais, '').subscribe(
      resp => this.universidades = resp
    )
  }
}
