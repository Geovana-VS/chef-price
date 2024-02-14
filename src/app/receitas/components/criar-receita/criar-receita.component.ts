import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';
import { Material } from 'src/app/material/models/material.model';


@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent implements OnInit {
  formulario: FormGroup;

  gastosDireto?: number;
  lucroGastosIndiretos?: number ;
  custoDosMateriais: number =0;
  rendimento:number=0

  materiaisNecessarios: Material[] = [];



  constructor(
    private formbilder: FormBuilder,
    private serviceReceita: ReceitaService,
    private route: Router) {
    this.formulario = this.formbilder.group({
      id: [""],
      nome: [""],
      observacoes: [""],
      imagem: [""],
      video: [""],
      rendimento: 0,
      materiais:[],
      gastosIndiretos: 0,
      gastosDiretos: 0,


    });
  }

  ngOnInit(): void {
    this.preencherMateriaisSelecionados();
     this.exibirCadastroReceita();

    console.log(this.materiaisNecessarios)


  }

  private preencherMateriaisSelecionados() {
    this.calcularCustoDosMateriais();

    this.materiaisNecessarios = this.serviceReceita.selecionados || [];
  }

  private calcularCustoDosMateriais() {
    this.serviceReceita.selecionados?.forEach(material => {
      material.custo = +(material.valor / material.quantidadeEmbalagem * material.quantidade).toFixed(2);
      this.custoDosMateriais = material.custo + this.custoDosMateriais;
      this.serviceReceita.custosDosMateriais = this.custoDosMateriais;

    })
  }

  public adicionarMateriais() {
    debugger;
    // this.serviceReceita.selecionados = [];
    this.atualizarInfoService();
    this.route.navigate(['/receita/adicionar-material'])
  }

   public analisarCustos() {
    debugger;
    this.atualizarInfoService();
    this.route.navigate(['/receita/analise-de-custos'])
  }


  atualizarInfoService() {
    this.serviceReceita.informacoesTelaDeCriarReceita = {
      nome: this.formulario.get("nome")?.value,
      imagem: this.formulario.get("imagem")?.value,
      video: this.formulario.get("video")?.value,
      gastosDiretos: this.formulario.get("gastosDiretos")?.value,
      gastosIndiretos: this.formulario.get("gastosIndiretos")?.value,
      rendimento: this.formulario.get("rendimento")?.value,
      observacoes: this.formulario.get("observacoes")?.value,

    };
    console.log(this.serviceReceita.custosDosMateriais,this.serviceReceita.informacoesTelaDeCriarReceita.gastosDiretos,this.serviceReceita.informacoesTelaDeCriarReceita.gastosIndiretos,this.serviceReceita.informacoesTelaDeCriarReceita.rendimento)

  }

  exibirCadastroReceita() {
    this.formulario.get("nome")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.nome);
    this.formulario.get("video")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.video);
    this.formulario.get("imagem")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.imagem)
    this.formulario.get("rendimento")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.rendimento);
    this.formulario.get("gastosDiretos")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.gastosDiretos);
    this.formulario.get("gastosIndiretos")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.gastosIndiretos);
    this.formulario.get("observacoes")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.observacoes)

  }


  criarReceita() {
    this.serviceReceita.criarReceita(this.formulario.value, this.materiaisNecessarios).subscribe(() => {
      this.serviceReceita.selecionados = this.materiaisNecessarios;
      this.route.navigate(['']);
    })


  }



}
