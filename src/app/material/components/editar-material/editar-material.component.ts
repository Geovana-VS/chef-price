import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-material',
  templateUrl: './editar-material.component.html',
  styleUrls: ['./editar-material.component.css']
})
export class EditarMaterialComponent implements OnInit {
  public formulario: FormGroup;

  constructor(private materialservice: MaterialService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // TODO - Inserir validações
    this.formulario = this.formbuilder.group({
      id: [''],
      nome: [''],
      marca: [''],
      unidadeDeMedida: [''],
      quantidadeEmbalagem: [0],
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
