import { Material } from './../../models/material.model';
import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-lista-materiais',
  templateUrl: './lista-materiais.component.html',
  styleUrls: ['./lista-materiais.component.css']
})
export class ListaMateriaisComponent implements OnInit {
  public materiais: Material[] = [];

  constructor(private service: MaterialService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar(): void {
    this.service.listarMateriais().subscribe((materiais) => {
      this.materiais = materiais;
    });
  }

}
