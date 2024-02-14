
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from 'src/app/material/models/material.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  public custosDosMateriais:number=0

  public informacoesTelaDeCriarReceita: {
    nome: string;
    imagem:string;
    video:string;
    gastosDiretos: number;
    gastosIndiretos: number;
    rendimento: number;
    observacoes:string;


  } = {
    nome: "",
    imagem:"",
    video:"",
    gastosDiretos: 0,
    gastosIndiretos: 0,
    rendimento: 0,
    observacoes:"",


  };

  public selecionados?: Material[] = []


  constructor(private httpclient: HttpClient) { }



  public listarReceitas(): Observable<Receita[]> {
    return this.httpclient.get<Receita[]>("http://localhost:3000/receitas")
  }


  public criarReceita(receita: Receita, materiaisDaReceita:Material[]): Observable<Receita> {
    receita.materiais = materiaisDaReceita;
    return this.httpclient.post<Receita>("http://localhost:3000/receitas", receita)
  }

  public excluirReceita(id: string): Observable<Receita[]> {
    return this.httpclient.delete<Receita[]>(`http://localhost:3000/receitas/${id}`)
  }

  public editarListaDeReceitas(receita: Receita): Observable<Receita[]> {
    return this.httpclient.put<Receita[]>(`http://localhost:3000/receitas/${receita.id}`, receita)
  }


}
