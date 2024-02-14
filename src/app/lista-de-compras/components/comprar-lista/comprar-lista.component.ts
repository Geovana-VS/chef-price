import { ListaDeCompras } from './../../models/lista-de-compras.model';
import { Component, OnInit } from '@angular/core';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { ItemDaLista } from '../../models/itens-da-lista.model';

@Component({
  selector: 'app-compras-lista',
  templateUrl: './comprar-lista.component.html',
  styleUrls: ['./comprar-lista.component.css']
})
export class ComprarListaComponent implements OnInit {
  listasDeCompras: ItemDaLista[]=[];

  constructor(private listaDeComprasservice:ListaDeComprasService){

  }

  ngOnInit(): void {
    this.listasDeCompras = this.listaDeComprasservice.comprarLista?.itens || [];
    if (this.listasDeCompras === undefined) {
      console.error('A lista de compras não pôde ser obtida.');
  }

}

}



