import { ReceitaService } from './../../services/receita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Material } from 'src/app/material/models/material.model';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {
  public formulario: FormGroup;
  public custoDosMateriais: number = 0;
  public materiaisNecessarios: Material[] = [];

  public botaoAnalisarCustos:boolean = false;

  constructor(
    private formbilder: FormBuilder,
    private receitaService: ReceitaService,
    private router: Router,
    private route: ActivatedRoute) {
    // TODO - Inserir validações
    this.formulario = this.formbilder.group({
      id: [""],
      nome: ["", [Validators.required, Validators.maxLength(15)]],
      observacoes: ["", [Validators.maxLength(130)]],
      imagem: [""],
      video: [""],
      rendimento: [[Validators.required, Validators.pattern('^[1-9]*$')]],
      materiais: [],
      gastosIndiretos: [ [Validators.required,Validators.pattern('^[1-9]*$')]],
      gastosDiretos: [ [Validators.required,Validators.pattern('^[1-9]*$')]],
    });
  }

  ngOnInit(): void {
    this.pegarId();
    this.preencherMateriaisSelecionados();
    this.exibirCadastroReceita();

    console.log(this.materiaisNecessarios)
  }

  private pegarId() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log("id recebido no componente deb edição", id)
      this.carregarInformacoes(id);
    })
  }

  private carregarInformacoes(id: string) {
    this.receitaService.listarReceitaPorId(id).subscribe(receita => {
      this.formulario.patchValue(receita)
      this.materiaisNecessarios = receita.materiais
      console.log("info carregadas no editar", this.materiaisNecessarios)

    })
  }

  private preencherMateriaisSelecionados() {
    this.calcularCustoDosMateriais();
    // this.materiaisNecessarios = this.receitaService.selecionados || [];


  }
  private calcularCustoDosMateriais() {
    this.receitaService.selecionados?.forEach(material => {
      material.custo = +(material.valor / material.quantidadeEmbalagem * material.quantidade).toFixed(2);
      this.custoDosMateriais = material.custo + this.custoDosMateriais;
      this.receitaService.custosDosMateriais = this.custoDosMateriais;
    })
  }

  public adicionarMateriais() {
    this.atualizarInfoService();
    this.router.navigate(['/receita/adicionar-material'])
  }

  public analisarCustos() {
    if(this.materiaisNecessarios.length > 0){
      this.atualizarInfoService();

      this.router.navigate(['/receita/analise-de-custos'])
     }
  }


  private atualizarInfoService() {
    this.receitaService.informacoesTelaDeCriarReceita = {
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
    this.formulario.get("nome")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.nome);
    this.formulario.get("video")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.video);
    this.formulario.get("imagem")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.imagem)
    this.formulario.get("rendimento")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.rendimento);
    this.formulario.get("gastosDiretos")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.gastosDiretos);
    this.formulario.get("gastosIndiretos")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.gastosIndiretos);
    this.formulario.get("observacoes")?.setValue(this.receitaService.informacoesTelaDeCriarReceita.observacoes)
  }

  public editarReceita() {

    this.receitaService.editarReceitas(this.formulario.value, this.materiaisNecessarios).subscribe(() => {
      console.log("botao de editar", this.formulario.value)
      this.router.navigate(['receita']);
    })
  }
  public mudarParaRendimento(mudarParaRendimento:HTMLInputElement){
    mudarParaRendimento.focus();
}

}
