import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaService } from '../../services/receita.service';
import { Subscriber } from 'rxjs';
import { MaterialService } from 'src/app/material/services/material.service';

@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent implements OnInit {
   formulario!:FormGroup;

    custoDaReceita:number = this.serviceReceita.custoDaReceita
   ;

   materiaisNecessarios?:{id:string ;
                          quantidade:number;
                          nome:string;
                          unidadeMedida:string;
                          custo:number}[]=[]



  constructor(
              private formbilder:FormBuilder,
              private serviceReceita:ReceitaService,
              private materialService: MaterialService){

  }

 ngOnInit(): void {

   this.formulario = this.formbilder.group({
     id:[""],
     nome:[""],
     observacoes:[""],
     imagem :[""],
     video:[""],
     rendimento:0,
     gastosIndiretos:0,
     gastosDiretos:0


   });

   this.materiaisNecessarios = this.materialService.listaSelecionados;
 }

 calcularCusto(){
  const custoDaReceita:number = this.serviceReceita.custoDaReceita
  console.log(custoDaReceita)
 }




}
