import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';
import { Material } from '../../models/material.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-material',
  templateUrl: './criar-material.component.html',
  styleUrls: ['./criar-material.component.css']
})
export class CriarMaterialComponent implements OnInit {



  formulario!: FormGroup;

  constructor(private service: MaterialService,
    private formbilder: FormBuilder,
    private router :Router
    ) { }



  ngOnInit(): void {
    this.formulario = this.formbilder.group({
      nome: [""],
      marca: [""],
      unidadeDeMedida: [""],
      quantidadeEmbalagem:0,
      valor:0,
    })
  }


  criar(){
     this.service.criarMateriais(this.formulario.value).subscribe(()=>{
       this.router.navigate(["/material"])
     })
  };


}
