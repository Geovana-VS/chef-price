import { Component, OnInit } from '@angular/core';
import { ListaDeCompras } from '../../models/lista-de-compras.model';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico-de-compras',
  templateUrl: './historico-de-compras.component.html',
  styleUrls: ['./historico-de-compras.component.css']
})
export class HistoricoDeComprasComponent implements OnInit {
  listaDeHistoricoDeCompras: ListaDeCompras[] = [];
  nomeDalista:string ="";

  constructor(private listaDeComprasService: ListaDeComprasService, private router: Router) { }

  ngOnInit(): void {
    this.nomeDalista = this.listaDeComprasService.comprarLista?.nomeLista ||  ""
    this.listarListasDeCompras();
    console.log(this.listarListasDeCompras())
  }

  private listarListasDeCompras() {

    const chamada = this.listaDeComprasService.listarHistoricoDeCompras()
    chamada.subscribe(lista => {
      this.listaDeHistoricoDeCompras = lista
    })
  }

  public selecionarLista(lista: ListaDeCompras): void {
    this.listaDeComprasService.comprarLista = lista;
    console.log(lista);
    this.router.navigate(['/compras/comprar-lista']);

  }
}
