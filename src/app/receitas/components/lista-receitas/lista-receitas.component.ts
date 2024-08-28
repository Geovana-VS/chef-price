import { Receita } from './../../models/receita.model';
import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {
  public listaDeReceitas: Receita[] = [];

  constructor(private service: ReceitaService) { }

  ngOnInit(): void {
    this.listarReceitas()
  }

  public listarReceitas(): void {
    this.service.listarReceitas().subscribe(receita =>
      this.listaDeReceitas = receita)
  }

}
