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

   listaDeComprasPronta:ListaDeCompras[]=[]

  constructor(private listaDeReceitasService:ListaDeComprasService,
               private router:Router

    ){}


  ngOnInit(): void {
    this.listarListasDeCompras()
  }

  private listarListasDeCompras(){
    const chamada = this.listaDeReceitasService.listarListasDeCompras()
    chamada.subscribe(lista => {
     this.listaDeComprasPronta = lista
    })
  }

  public selecionarLista(lista:ListaDeCompras): void {
     this.listaDeReceitasService.comprarLista=lista;
     console.log(lista);
     this.router.navigate(['/compras/comprar-lista']);

  }
}
