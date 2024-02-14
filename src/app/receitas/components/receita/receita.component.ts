import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receita } from '../../models/receita.model';
import { MaterialService } from 'src/app/material/services/material.service';
import { Material } from 'src/app/material/models/material.model';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  @Input() receita?: Receita;



  materiaisNecessarios:Material[]=[];


  constructor( private receitaService : ReceitaService) { }

  ngOnInit(): void {


  }


}
