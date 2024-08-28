import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receita } from '../../models/receita.model';
import { Material } from 'src/app/material/models/material.model';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent {
  @Output() recarregarLista: EventEmitter<void> = new EventEmitter<void>();

  @Input() receita?: Receita;

  constructor(private receitaService: ReceitaService,
    private router: Router) { }

  public editarReceita(id?: string) {
    this.router.navigate(['receita/editar-receita', id])
  }

  public excluirReceita(id?: string) {
    if (id) {
      this.receitaService.excluirReceita(id).subscribe(() => {
        this.recarregarLista.emit()
      })
    }
  }

  public cardClicked(id?:string){
    this.router.navigate(['receita/visualizar-receita',id])
    console.log(id)
  }
}
