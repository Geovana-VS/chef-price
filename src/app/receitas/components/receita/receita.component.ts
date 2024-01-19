import { Component, OnInit, Input } from '@angular/core';
import { Receita } from '../../models/receita.model';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit{

   @Input()receita: Receita = {

   id:"",
   nome:"",
   imagem:"",
   observacoes:"",
   materiais:[],
   rendimento:0,
   video:""
   }

  constructor(){}

  ngOnInit(): void {

  }
}
