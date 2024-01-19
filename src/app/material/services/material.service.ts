import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Material } from '../models/material.model';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  public listaSelecionados?: {
    nome:string;
    id:string;
    quantidade:number;
    unidadeMedida:string;
    custo:number;
    valor:number
  }[]

  constructor(private httpClient: HttpClient) {

  }

  public listarMateriais(): Observable<Material[]> {
     return this.httpClient.get<Material[]>("http://localhost:3000/materiais");

  }

  public criarMateriais(material: Material): Observable<Material> {
     return this.httpClient.post<Material>("http://localhost:3000/materiais", material);

  }

  public excluirMateriais(id: string): Observable<Material[]> {
    return this.httpClient.delete<Material[]>(`http://localhost:3000/materiais/${id}`);

  }

  public editarMateriais(material: Material): Observable<Material[]> {
    return this.httpClient.put<Material[]>(`http://localhost:3000/materiais/${material.id}` , material);


  }


}
