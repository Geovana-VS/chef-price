import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private readonly BACKEND_URL = "http://localhost:3000/materiais";

  constructor(private httpClient: HttpClient) { }

  public listarMateriais(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.BACKEND_URL);
  }

  public listarMaterialPorId(id: string): Observable<Material> {
    return this.httpClient.get<Material>(`${this.BACKEND_URL}/${id}`);
  }

  public criarMateriais(material: Material): Observable<Material> {
    return this.httpClient.post<Material>(`${this.BACKEND_URL}`, material);
  }

  public excluirMateriais(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.BACKEND_URL}/${id}`);
  }

  public editarMateriais(material: Material): Observable<Material> {
    return this.httpClient.put<Material>(`${this.BACKEND_URL}/${material.id}`, material);
  }
}
