import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UnidadeDeMedida } from '../../enums/unidadeDeMedida.enum';

@Component({
  selector: 'app-criar-material',
  templateUrl: './criar-material.component.html',
  styleUrls: ['./criar-material.component.css']
})
export class CriarMaterialComponent implements OnInit {
  formulario!: FormGroup;


  unidadesDeMedida = [
    { nome: 'Unidade(u)', valor: UnidadeDeMedida.Unidade },
    { nome: 'Mililitros(ml)', valor: UnidadeDeMedida.Mililitros },
    { nome: 'Litros(l)', valor: UnidadeDeMedida.Litros },
    { nome: 'Gramas(g)', valor: UnidadeDeMedida.Gramas },
    { nome: 'Quilogramas(kg)', valor: UnidadeDeMedida.Quilogramas }
 ];

  constructor(private service: MaterialService,
    private formbilder: FormBuilder,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.formulario = this.formbilder.group({
      nome: [""],
      marca: [""],
      unidadeDeMedida:[UnidadeDeMedida.Unidade],
      quantidadeEmbalagem: 0,
      valor: 0,
    })
  }


  public criar() {
    this.service.criarMateriais(this.formulario.value).subscribe(() => {
      this.router.navigate([""])
    })

  };


}
