import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-analise-de-custos',
  templateUrl: './analise-de-custos.component.html',
  styleUrls: ['./analise-de-custos.component.css']
})
export class AnaliseDeCustosComponent implements OnInit {
  gastosDiretos: number = +(this.receita.gastosDiretos);
  gastosIndiretos: number = this.receita.gastosIndiretos;
  rendimento: number = this.receita.rendimento;
  custoDosMateriais: number = this.receita.custoDaReceita;

  custoPorUnidade: number = 0;
  lucroTotal: number = 0;
  gastosAdicionais: number = 0;
  custoTotal: number = 0;
  valorDeVenda: number = 0;




  constructor(private receita: ReceitaService) { }


  ngOnInit(): void {
    this.analisarCusto();
  }

  analisarCusto() {
    this.custoTotal = +(this.custoDosMateriais + (this.gastosIndiretos * this.custoDosMateriais) / 100).toFixed(2);
    this.gastosAdicionais = +((this.gastosIndiretos * this.custoDosMateriais) / 100).toFixed(2);
    this.custoPorUnidade = +(this.custoTotal / this.rendimento).toFixed(2);
    this.lucroTotal = +(this.custoTotal * (this.gastosDiretos / 100)).toFixed(2);
    this.valorDeVenda = +((this.custoTotal + this.lucroTotal) / this.rendimento).toFixed(2);


  }
}


