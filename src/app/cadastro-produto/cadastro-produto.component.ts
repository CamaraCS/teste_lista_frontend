import { Component, OnInit } from '@angular/core';

export interface Marca {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  marcas: Marca[] = [
    {value: 'Camil-0', viewValue: 'Camil'},
    {value: 'Ricardo-1', viewValue: 'Ricardo'},
    {value: 'Nene-2', viewValue: 'Nene'}
  ];

}
