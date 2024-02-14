import { Component, Input, OnInit } from '@angular/core';
import { ItemDaLista } from '../../models/itens-da-lista.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-de-item-lista',
  templateUrl: './formulario-de-item-lista.component.html',
  styleUrls: ['./formulario-de-item-lista.component.css']
})
export class FormularioDeItemListaComponent implements OnInit {
  itemDaLista: FormGroup;
  @Input() listaDeItens: ItemDaLista[] = []
  categoria: { id: number, nome: string }[] = [
    { id: 1, nome: 'Alimentos' },
    { id: 2, nome: 'Produtos de limpeza' },
    { id: 4, nome: 'Produtos de higiene' },
    { id: 5, nome: 'Misturas' },
    { id: 6, nome: 'Pet' },
  ];


  constructor(private formbuilder: FormBuilder,
              private route:Router,
              private listadecomprasservice: ListaDeComprasService) {


    this.itemDaLista = this.formbuilder.group({
      nomeItem: [""],
      quantidade: 0,
      categoria: [""],
      marca: [""],


    })
  }

  ngOnInit(): void {

  }

public adicionarItem() {

    this.listaDeItens.push({
        id: this.itemDaLista.get("id")?.value,
        nomeItem: this.itemDaLista.get("nomeItem")?.value,
        marca: this.itemDaLista.get("marca")?.value,
        quantidade: this.itemDaLista.get("quantidade")?.value,
        valor: this.itemDaLista.get("valor")?.value,
        categoria:this.itemDaLista.get("categoria")?.value
      });

      this.atualizarService();
      this.itemDaLista.reset();

  }

  private atualizarService(){
    this.listadecomprasservice.itensDalista = {
      id:this.itemDaLista.get("id")?.value,
      nomeItem:this.itemDaLista.get("nomeItem")?.value,
      marca:this.itemDaLista.get("marca")?.value,
      quantidade:this.itemDaLista.get("quantidade")?.value,
      valor:this.itemDaLista.get("valor")?.value,
      categoria:this.itemDaLista.get("categoria")?.value
  }

  }
}
