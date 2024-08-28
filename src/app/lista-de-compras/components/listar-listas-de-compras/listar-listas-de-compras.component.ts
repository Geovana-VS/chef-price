import { Component, OnInit } from '@angular/core';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { ListaDeCompras } from '../../models/lista-de-compras.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-listas-de-compras',
  templateUrl: './listar-listas-de-compras.component.html',
  styleUrls: ['./listar-listas-de-compras.component.css']
})
export class ListarListasDeComprasComponent implements OnInit {

  listaDeComprasPronta: ListaDeCompras[] = [];

  constructor(private listaDeComprasService: ListaDeComprasService,
    private router: Router) { }


  ngOnInit(): void {
    this.listarListasDeCompras()
  }

  public listarListasDeCompras() {
    this.listaDeComprasService.listarListasDeCompras().subscribe(lista => {
      this.listaDeComprasPronta = lista
    })
  }

  public selecionarLista(lista: ListaDeCompras): void {

    this.listaDeComprasService.comprarLista = lista;
    console.log(lista);
    this.router.navigate(['/compras/comprar-lista']);

  }

  public ExcluirLista(id: string) {
    this.listaDeComprasService.excluirLista(id).subscribe(() => {
      this.listarListasDeCompras();
    })
  }

}
