import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/material/models/material.model';
import { MaterialService } from 'src/app/material/services/material.service';
import { ReceitaService } from '../../services/receita.service';

@Component({
  selector: 'app-adicionar-materiais',
  templateUrl: './adicionar-materiais.component.html',
  styleUrls: ['./adicionar-materiais.component.css']
})
export class AdicionarMateriaisComponent implements OnInit {

  selecionados: {
    id: string;
    quantidade: number;
    nome: string;
    unidadeMedida:string;
    custo:number;
    valor:number;


  }[]=[];

  listaMateriais: Material[] = []

  adicionarEsteMaterial = false;

  @Input()custoDaReceita:number=0



  constructor(private service: MaterialService,
              private serviceReceita: ReceitaService,
              private router: Router,
             ) {

  }

  ngOnInit(): void {
    this.listarMateriais();
  }

  public listarMateriais(): void {
    this.service.listarMateriais().subscribe((listaMateriais) => {
      this.listaMateriais = listaMateriais;

    });

  }

  adicionarMaterial(material: Material) {

    if (material.quantidadeEmbalagem > 0) {
      const custo: number = +(material.valor / material.quantidadeEmbalagem * material.quantidade).toFixed(2);
      if (!isNaN(custo) && isFinite(custo)) {
        this.selecionados.push({
          id: material.id,
          nome: material.nome,
          quantidade: material.quantidade,
          unidadeMedida: material.unidadeDeMedida,
          custo: custo,
          valor: material.valor

        });
        this.serviceReceita.custoDaReceita = +(this.serviceReceita.custoDaReceita + custo).toFixed(2);
      } else {
        console.error('O custo não é um número válido. Verifique os valores de entrada.');
      }
    } else {
      console.error('A quantidadeEmbalagem deve ser maior que zero para calcular o custo.');
    }
  //  const custo :number= (material.valor/material.quantidadeEmbalagem)*material.quantidade
  //   this.selecionados.push({
  //     id: material.id,
  //     nome:material.nome,
  //     quantidade: material.quantidade,
  //     unidadeMedida:material.unidadeDeMedida,
  //     custo: custo,
  //     valor:material.valor


  //    });
  }

  salvarLista() {

    this.listaMateriais.forEach(material => {
      if (material.selecionado === true) {
        this.adicionarMaterial(material)

      }
    })
     this.service.listaSelecionados = this.selecionados
     this.router.navigate(['/receita/criar-receita'])
     console.log(this.listaMateriais)
  }




}
