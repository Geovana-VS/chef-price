import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadeDeMedida } from '../../enums/unidadeDeMedida.enum';

@Component({
  selector: 'app-editar-material',
  templateUrl: './editar-material.component.html',
  styleUrls: ['./editar-material.component.css']
})
export class EditarMaterialComponent implements OnInit {
  public formulario: FormGroup;

  unidadesDeMedida = [
    { nome: 'Unidade(u)', valor: UnidadeDeMedida.Unidade },
    { nome: 'Mililitros(ml)', valor: UnidadeDeMedida.Mililitros },
    { nome: 'Litros(l)', valor: UnidadeDeMedida.Litros },
    { nome: 'Gramas(g)', valor: UnidadeDeMedida.Gramas },
    { nome: 'Quilogramas(kg)', valor: UnidadeDeMedida.Quilogramas }
 ];

  constructor(private materialservice: MaterialService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // TODO - Inserir validações
    this.formulario = this.formbuilder.group({
      id: [''],
      nome: ['',[Validators.maxLength(15)]],
      marca: [''],
      unidadeDeMedida: [UnidadeDeMedida.Unidade],
      quantidadeEmbalagem: [0,[Validators.pattern('^(o-9)*')]],
      valor: [0]
    });
  }

  ngOnInit(): void {
    this.pegarIdDaRota();
  }

  private pegarIdDaRota(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log("id recebido", id)
      this.carregarInformacoes(id)
    });
  }

  private carregarInformacoes(id: string) {
    this.materialservice.listarMaterialPorId(id).subscribe(material => {
      this.formulario.patchValue(material)
    })
  }

  public enviarMaterialEditado() {
    this.materialservice.editarMateriais(this.formulario.value).subscribe(() => {
      this.router.navigate(["/material"])
    })
  };
}
