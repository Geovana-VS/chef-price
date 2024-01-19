
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  public custoDaReceita:number = 0;

  constructor( private httpclient:HttpClient) { }



  public listarReceitas():Observable<Receita[]>{
    return this.httpclient.get<Receita[]>("http://localhost:3000/receitas")
  }

  public criarReceita( receita :Receita):Observable<Receita>{
     return this.httpclient.post<Receita>("http://localhost:3000/receitas",receita)
  }

  public excluirReceita(id:string):Observable<Receita[]>{
    return this.httpclient.delete<Receita[]>(`http://localhost:3000/receitas/${id}`)
  }

  public editarListaDeReceitas(receita:Receita):Observable<Receita[]>{
   return this.httpclient.put<Receita[]>(`http://localhost:3000/receitas/${receita.id}`,receita)
  }

  materiaisDaReceita(){

  }
}
