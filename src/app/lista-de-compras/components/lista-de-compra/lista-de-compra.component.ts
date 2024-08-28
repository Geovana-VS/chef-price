import { ListaDeComprasService } from './../../services/lista-de-compras.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaDeCompras } from '../../models/lista-de-compras.model';
import { ItemDaLista } from '../../models/itens-da-lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-compra',
  templateUrl: './lista-de-compra.component.html',
  styleUrls: ['./lista-de-compra.component.css']
})
export class ListaDeCompraComponent implements OnInit {
  @Output() recarregarLista:EventEmitter<void> = new EventEmitter<void>();
  @Input() listaDeComprasPronta:ListaDeCompras={
    id: "",
    nomeLista:"",
    itens:[],
    valorTotal:0
  }

  constructor(private listaDeCompraService: ListaDeComprasService,
              private router: Router) {
  }

  ngOnInit(): void {

  }



  ExcluirLista(){
    if(this.listaDeComprasPronta.id){
         console.log(this.listaDeComprasPronta)
         debugger;
      this.listaDeCompraService.excluirLista(this.listaDeComprasPronta.id).subscribe(()=>{
        this.recarregarLista.emit()
      })
    }
  }
  public selecionarLista(lista:ListaDeCompras): void {

    this.listaDeCompraService.comprarLista=lista;
    console.log(lista);
    this.router.navigate(['/compras/comprar-lista']);

 }


}
