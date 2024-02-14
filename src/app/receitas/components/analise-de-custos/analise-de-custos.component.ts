import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-analise-de-custos',
  templateUrl: './analise-de-custos.component.html',
  styleUrls: ['./analise-de-custos.component.css']
})
export class AnaliseDeCustosComponent implements OnInit {

  nome: string = "";
  gastosDiretos: number = 0;
  gastosIndiretos: number = 0;
  rendimento: number = 0;
  custoDosMateriais: number = 0;

  custoPorUnidade: number = 0;
  lucroTotal: number = 0;
  gastosAdicionais: number = 0;
  custoTotal: number = 0;
  valorDeVenda: number = 0;




  constructor(private receitaService: ReceitaService) { }


  ngOnInit(): void {
    this.carregarInformacoes();
    this.analisarCusto();
  }

  private carregarInformacoes():void {
        this.nome = this.receitaService.informacoesTelaDeCriarReceita.nome;
        this.gastosDiretos = (this.receitaService.informacoesTelaDeCriarReceita.gastosDiretos);
        this.gastosIndiretos = this.receitaService.informacoesTelaDeCriarReceita.gastosIndiretos;
        this.rendimento = this.receitaService.informacoesTelaDeCriarReceita.rendimento;
        this.custoDosMateriais = this.receitaService.custosDosMateriais
  }

  private analisarCusto():void{
        this.custoTotal = +(this.custoDosMateriais + (this.gastosIndiretos * this.custoDosMateriais) / 100).toFixed(2);
        this.gastosAdicionais = +((this.gastosIndiretos * this.custoDosMateriais) / 100).toFixed(2);
        this.custoPorUnidade = +(this.custoTotal / this.rendimento).toFixed(2);
        this.lucroTotal = +(this.custoTotal * (this.gastosDiretos / 100)).toFixed(2);
        this.valorDeVenda = +((this.custoTotal + this.lucroTotal) / this.rendimento).toFixed(2);

  }
}


