import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaService } from '../../services/receita.service';
import { Subscriber } from 'rxjs';
import { MaterialService } from 'src/app/material/services/material.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent implements OnInit {
  formulario!: FormGroup;

  custoDaReceita: number = this.serviceReceita.custoDaReceita;
  gastosDiretos: number = 0;
  lucroGastosIndiretos: number = this.serviceReceita.gastosIndiretos;
  rendimento: number = this.serviceReceita.rendimento;


  materiaisNecessarios?: {
    id: string;
    quantidade: number;
    nome: string;
    unidadeMedida: string;
    custo: number
  }[] = []



  constructor(
    private formbilder: FormBuilder,
    private serviceReceita: ReceitaService,
    private materialService: MaterialService,
    private route: Router) { }

  ngOnInit(): void {

    this.formulario = this.formbilder.group({
      id: [""],
      nome: [""],
      observacoes: [""],
      imagem: [""],
      video: [""],
      rendimento: 0,
      gastosIndiretos: 0,
      gastosDiretos: 0


    });

    this.materiaisNecessarios = this.materialService.listaSelecionados;
  }

  calcularCusto() {
    this.serviceReceita.gastosDiretos = this.formulario.get("gastosDiretos")?.value;
    this.serviceReceita.gastosIndiretos = this.formulario.get("gastosIndiretos")?.value;
    this.serviceReceita.rendimento = this.formulario.get("rendimento")?.value;
    this.route.navigate(['/receita/analise-de-custos'])
  }




}
