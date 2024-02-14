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

  public listaMateriais: Material[] = [];

  constructor(private materialService: MaterialService,
    private receitaService: ReceitaService,
    private router: Router,
  ) {

  }

  public ngOnInit(): void {
    this.listarMateriais();
  }

  private listarMateriais(): void {
    this.materialService.listarMateriais().subscribe((listaMateriais) => {
      this.listaMateriais = listaMateriais;

      this.preencherMateriaisSelecionadosDaTela();
    });
  }

  // PRIMEIRA LÓGICA
  // private preencherMateriaisSelecionados(): void {
  //   this.receitaService.selecionados?.forEach(material => {
  //     this.checkarMaterial(material.id);
  //   });
  // }

  // private checkarMaterial(materialId: string): void {
  //   this.listaMateriais.forEach(material => {
  //     if(materialId === material.id) {
  //       material.selecionado = true;
  //     }
  //   });
  // }
  // FIM DA PRIMEIRA LÓGICA

  // LÓGICA ALTERNATIVA
  private preencherMateriaisSelecionadosDaTela(): void {
    this.listaMateriais.forEach(materialDaTela => {
      const materialComIdIgualAoDaTela = this.receitaService.selecionados?.find(materialSelecionado => materialSelecionado.id === materialDaTela.id);
      const materialExiste = materialComIdIgualAoDaTela !== undefined;

      materialDaTela.selecionado = materialExiste;
      materialDaTela.quantidade = materialComIdIgualAoDaTela?.quantidade || 0;
    });
  }

  public aoClicarNoAdicionar() {
    this.receitaService.selecionados = [];

    this.listaMateriais.forEach(material => {
      if (material.selecionado) {
        this.receitaService.selecionados?.push(material);

      }
    });

    this.router.navigate(['/receita/criar-receita']);
  }

}
