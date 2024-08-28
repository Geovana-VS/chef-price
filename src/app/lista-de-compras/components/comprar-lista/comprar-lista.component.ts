import { Component,OnInit } from '@angular/core';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { ItemDaLista } from '../../models/itens-da-lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-lista',
  templateUrl: './comprar-lista.component.html',
  styleUrls: ['./comprar-lista.component.css']
})
export class ComprarListaComponent implements OnInit {

  listasDeCompras: ItemDaLista[] = [];
  precoItemCalculado: number[] = [];
  nomeDaLista: string = "";


  constructor(public listaDeComprasservice: ListaDeComprasService,
    private router: Router) {}

  ngOnInit(): void {
    if (this.listaDeComprasservice.comprarLista) {
      this.listasDeCompras = this.listaDeComprasservice.comprarLista?.itens || [];
      this.nomeDaLista = this.listaDeComprasservice.comprarLista.nomeLista || "";
      debugger;
      if (this.listasDeCompras === undefined) {
        console.error('A lista de compras não pôde ser obtida.');
      }
    }
  }

  public finalizarCompras() {
    this.listaDeComprasservice.salvarListaDeComprasNoHistorico(this.listasDeCompras, this.nomeDaLista).subscribe(() => {
      this.router.navigate(['compras']);
    })
  }


}



