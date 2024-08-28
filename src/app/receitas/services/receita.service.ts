
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from 'src/app/material/models/material.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private readonly BACKEND_URL = "http://localhost:3000/receitas";

  // TODO - Entender a necessidade de estar aqui
  public custosDosMateriais: number = 0

  // TODO - Transformar isso em um model
  public informacoesTelaDeCriarReceita: {
    nome: string;
    imagem: string;
    video: string;
    gastosDiretos: number;
    gastosIndiretos: number;
    rendimento: number;
    observacoes: string;
  } = {
      nome: "",
      imagem: "",
      video: "",
      gastosDiretos: 0,
      gastosIndiretos: 0,
      rendimento: 0,
      observacoes: "",
    };

    // TODO - Entender se não pode ser substituído
    // pela propriedade selecionado do Material
  public selecionados?: Material[] = []

  constructor(private httpClient: HttpClient) { }

  public listarReceitas(): Observable<Receita[]> {
    return this.httpClient.get<Receita[]>(this.BACKEND_URL)
  }

  public listarReceitaPorId(id: string): Observable<Receita> {
    return this.httpClient.get<Receita>(`${this.BACKEND_URL}/${id}`)
  }

  public criarReceita(receita: Receita, materiaisDaReceita: Material[]): Observable<Receita> {
    receita.materiais = materiaisDaReceita;
    return this.httpClient.post<Receita>(this.BACKEND_URL, receita)
  }

  public excluirReceita(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.BACKEND_URL}/${id}`)
  }

  public editarReceitas(receita: Receita, materiaisNecessarios: Material[]): Observable<Receita> {
    receita.materiais = materiaisNecessarios;
    return this.httpClient.put<Receita>(`${this.BACKEND_URL}/${receita.id}`, receita)
  }

}
