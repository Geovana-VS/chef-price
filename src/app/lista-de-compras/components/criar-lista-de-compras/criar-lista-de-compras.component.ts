
import { ItemDaLista } from './../../models/itens-da-lista.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaDeComprasService } from '../../services/lista-de-compras.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from 'src/app/receitas/services/receita.service';


@Component({
  selector: 'app-criar-lista-de-compras',
  templateUrl: './criar-lista-de-compras.component.html',
  styleUrls: ['./criar-lista-de-compras.component.css']
})
export class CriarListaDeComprasComponent implements OnInit {
  listaDeItensCriados: ItemDaLista[] = [];

  formularioCompras!: FormGroup;

  constructor(private listadecomprasservice: ListaDeComprasService,
    private receitaservice: ReceitaService,
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder) {

    this.formularioCompras = this.formbuilder.group({
      nomeLista: ["", [Validators.required,Validators.maxLength(30)]],

    });


  }

  ngOnInit(): void {
    this.pegarId();
  }



  public criarLista() {

    this.listadecomprasservice.criarListaDeCompras(this.formularioCompras.value, this.listaDeItensCriados).subscribe(() => {
      this.router.navigate(['/compras']);
    })

  }

  public removerItem(index: number) {
    this.listaDeItensCriados.splice(index, 1)
  }

  private pegarId(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log("id recebido", id)

      this.carregarLista(id);
    });
  }

  private carregarLista(id: string) {
    this.receitaservice.listarReceitaPorId(id).subscribe(receita => {
      this.listaDeItensCriados = this.listadecomprasservice.converterListas(receita.materiais);
    });
  }


}





