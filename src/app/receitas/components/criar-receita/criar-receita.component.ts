import { FormularioDeItemListaComponent } from './../../../lista-de-compras/components/formulario-de-item-lista/formulario-de-item-lista.component';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceitaService } from '../../services/receita.service';
import { Router } from '@angular/router';
import { Material } from 'src/app/material/models/material.model';


@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent implements OnInit {
  public formulario: FormGroup;
  imagem: string | ArrayBuffer | null = null;
  public gastosDireto?: number;
  public lucroGastosIndiretos?: number;
  public custoDosMateriais: number = 0;
  public rendimento?: number;
  public materiaisNecessarios: Material[] = [];

  public botaoAnalisarCustos: boolean = false;
  public botaoSalvar: boolean = false;
  public mensagemDeErro:string = "";



  constructor(
    private formbilder: FormBuilder,
    private serviceReceita: ReceitaService,
    private route: Router,
    private elementRef:ElementRef) {
    this.formulario = this.formbilder.group({
      nome: ["", [Validators.required, Validators.maxLength(15)]],
      observacoes: ["", [Validators.maxLength(130)]],
      imagem: [""],
      video: [""],
      rendimento: [ Validators.required, Validators.pattern('^[1-9]*$')],
      materiais: [],
      gastosIndiretos: [[Validators.required,Validators.pattern('^[1-9]*$')]],
      gastosDiretos: [[Validators.required,Validators.pattern('^[1-9]*$')]],
    });
  }

  ngOnInit(): void {
    this.preencherMateriaisSelecionados();
    this.exibirCadastroReceita();
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
    this.atualizarInfoService();
    this.route.navigate(['/receita/adicionar-material'])
  }

  public analisarCustos() {
    this.botaoAnalisarCustos = true;


   if(this.materiaisNecessarios.length > 0){
    this.atualizarInfoService();
    this.route.navigate(['/receita/analise-de-custos'])
   }
  }

   private atualizarInfoService() {
    this.serviceReceita.informacoesTelaDeCriarReceita = {
      nome: this.formulario.get("nome")?.value,
      imagem: this.formulario.get("imagem")?.value,
      video: this.formulario.get("video")?.value,
      gastosDiretos: this.formulario.get("gastosDiretos")?.value,
      gastosIndiretos: this.formulario.get("gastosIndiretos")?.value,
      rendimento: this.formulario.get("rendimento")?.value,
      observacoes: this.formulario.get("observacoes")?.value,
    };
  }

  private exibirCadastroReceita() {
    this.formulario.get("nome")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.nome);
    this.formulario.get("video")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.video);
    this.formulario.get("imagem")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.imagem)
    this.formulario.get("rendimento")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.rendimento);
    this.formulario.get("gastosDiretos")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.gastosDiretos);
    this.formulario.get("gastosIndiretos")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.gastosIndiretos);
    this.formulario.get("observacoes")?.setValue(this.serviceReceita.informacoesTelaDeCriarReceita.observacoes)
  }

   public criarReceita() {
   if(this.formulario.valid){
    this.botaoSalvar = true;
    this.serviceReceita.criarReceita(this.formulario.value, this.materiaisNecessarios).subscribe(() => {
      this.serviceReceita.selecionados = this.materiaisNecessarios;
      console.log(this.formulario.value)
      this.route.navigate(['']);
    })
   }else{
      this.mensagemDeErro = "erro"
   }
  }

  public mudarParaRendimento(mudarParaRendimento:HTMLInputElement){
         mudarParaRendimento.focus();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagem = e.target.result;
        this.formulario.get('imagem')?.setValue(this.imagem);
      };
      reader.readAsDataURL(file);
    }
  }
}


