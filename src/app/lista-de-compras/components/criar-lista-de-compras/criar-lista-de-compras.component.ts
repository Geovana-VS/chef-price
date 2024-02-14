import { Subscriber } from 'rxjs';
import { ItemDaLista } from './../../models/itens-da-lista.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ListaDeCompras } from '../../models/lista-de-compras.model';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-lista-de-compras',
  templateUrl: './criar-lista-de-compras.component.html',
  styleUrls: ['./criar-lista-de-compras.component.css']
})
export class CriarListaDeComprasComponent implements OnInit {
  listaDeItens: ItemDaLista[] = []
  formularioCompras!: FormGroup;





  constructor(private listadecomprasservice: ListaDeComprasService,
    private route: Router,
    private formbuilder: FormBuilder) {

    this.formularioCompras = this.formbuilder.group({
      id: [""],
      nomeLista: [""],

    });
  }

  ngOnInit(): void {

  }

  public criarLista() {
    this.listadecomprasservice.criarListaDeCompras(this.formularioCompras.value, this.listaDeItens).subscribe(() => {
      this.route.navigate(['/listar-lista-de-compras']);
    })

  }

  public removerItem(index:number){
     this.listaDeItens.splice(index,1)

  }


}





