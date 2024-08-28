import { Component, Input, OnInit } from '@angular/core';
import { ItemDaLista } from '../../models/itens-da-lista.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { ActivatedRoute, Router } from '@angular/router';

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
              private route: ActivatedRoute,
              private listadecomprasservice: ListaDeComprasService) {


    this.itemDaLista = this.formbuilder.group({
      nomeItem: ["", [Validators.maxLength(15)]],
      quantidade: [0,[Validators.required, Validators.pattern('^[0-9]*$'),Validators.min(1)]],
      categoria: [""],
      marca: ["",[Validators.maxLength(15)]],
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        console.log(params);
      }
    );
  }

public adicionarItem() {
    this.listaDeItens.push({
        id: this.itemDaLista.get("id")?.value,
        nomeItem: this.itemDaLista.get("nomeItem")?.value,
        marca: this.itemDaLista.get("marca")?.value,
        quantidade: this.itemDaLista.get("quantidade")?.value,
        valor: this.itemDaLista.get("valor")?.value,
        categoria:this.itemDaLista.get("categoria")?.value,
        precoItemCalculado:this.itemDaLista.get("precoItemCalculado")?.value,
        calculoTotal:this.itemDaLista.get("caculoTotal")?.value
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
      categoria:this.itemDaLista.get("categoria")?.value,
      precoItemCalculado:this.itemDaLista.get("precoItemCalculado")?.value,
      calculoTotal:this.itemDaLista.get("caculoTotal")?.value
    }

  }
}
