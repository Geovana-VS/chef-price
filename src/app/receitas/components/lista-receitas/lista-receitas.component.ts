import { Receita } from './../../models/receita.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {

  listaDeReceitas: Receita[] = [];
  formularioDaReceita: FormGroup;

  constructor(private service: ReceitaService,
    private formbilder: FormBuilder) {
    this.formularioDaReceita = this.formbilder.group({
      id: [""],
      nome: [""],
      imagem: [""],
      observacoes: [""],
      video: [""],
      materiais: [""]
    })

  }

  ngOnInit(): void {

  }

  listarReceitas(): void {
    this.service.listarReceitas().subscribe(receita=>
      this.listaDeReceitas = receita )

  }

}
