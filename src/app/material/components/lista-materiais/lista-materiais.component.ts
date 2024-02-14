import { Material } from './../../models/material.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-materiais',
  templateUrl: './lista-materiais.component.html',
  styleUrls: ['./lista-materiais.component.css']
})
export class ListaMateriaisComponent implements OnInit{
  materiais: Material[] = [];

  formulario!:FormGroup;


  constructor( private formbilder: FormBuilder,
              private service:MaterialService,
               private router:Router){}



  ngOnInit(): void {
     this.listar();
    //  this.formulario = this.formbilder.group({
    //   nome: [""],
    //   marca: [""],
    //   unidadeDeMedida: [""],
    //   valor:0,
    // })
  }

  public listar(): void {

    this.service.listarMateriais().subscribe((materiais)=>{
      this.materiais = materiais;

    });
  }


}
