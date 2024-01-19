import { Router } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { Material } from './../../models/material.model';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  @Output() recarregarLista: EventEmitter<void> = new EventEmitter<void>();

  @Input() material:Material =
    {
      id:"",
      nome:"",
      marca:"",
      unidadeDeMedida:"",
      quantidadeEmbalagem:0,
      valor:0,
      selecionado:false,
      quantidade:0,
      custo:0

    }

    constructor(private service : MaterialService,
                private router: Router){}

    excluirMaterial(){
        if(this.material.id){
          this.service.excluirMateriais(this.material.id).subscribe(() =>{
            this.recarregarLista.emit()
          })

        }
    }




}
