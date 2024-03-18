import { Router } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { Material } from './../../models/material.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  @Output() recarregarLista: EventEmitter<void> = new EventEmitter<void>();

  @Input() material?: Material;

  constructor(private service: MaterialService,
    private router: Router) { }

  public excluirMaterial() {
    if (this.material) {
      this.service.excluirMateriais(this.material.id).subscribe(() => {
        this.recarregarLista.emit()
      })
    }
  }

  public editarMaterial(id?: string) {
    this.router.navigate(['material/editar-material', id])
  }

}
