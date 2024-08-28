import { ItemDaLista } from './../models/itens-da-lista.model';
import { Injectable } from '@angular/core';
import { ListaDeCompras } from '../models/lista-de-compras.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from 'src/app/material/models/material.model';

@Injectable({
  providedIn: 'root'
})
export class ListaDeComprasService {


   valorTotal:number = 0;


  public resumoDaCompra?: {
    valorTotal: number,
    valorPorItem: {
      valorDoItem: number,
      idDoItem: string
    }[]
  };

  public listaDeComprasCriada?: ListaDeCompras;
  public itensDalista?: ItemDaLista;
  public comprarLista?: ListaDeCompras;
  public itensParaComprar: Material[] = [];

  constructor(private httpclient: HttpClient) { }

  public listarListasDeCompras(): Observable<ListaDeCompras[]> {
    return this.httpclient.get<ListaDeCompras[]>("http://localhost:3000/lista-de-compras")
  }

  public listarListasDeComprasPorId(id: string): Observable<ListaDeCompras> {
    return this.httpclient.get<ListaDeCompras>("http://localhost:3000/lista-de-compras/" + id)
  }

  public criarListaDeCompras(listaDeCompras: ListaDeCompras, itensDaCompra: ItemDaLista[]): Observable<ListaDeCompras> {
    listaDeCompras.itens = itensDaCompra;

    return this.httpclient.post<ListaDeCompras>("http://localhost:3000/lista-de-compras", listaDeCompras)
  }

  public excluirLista(id:string):Observable<ListaDeCompras[]>{
    return this.httpclient.delete<ListaDeCompras[]>(`http://localhost:3000/lista-de-compras/"${id}`)
  }


  public converterListas(materiaisDaReceita: Material[]): ItemDaLista[] {
    return materiaisDaReceita.map(item => {
      return {
        id: item.id,
        nomeItem: item.nome,
        quantidade: 0,
        marca: item.marca,
        valor: 0,
        categoria: item.categoria,
        precoItemCalculado: 0,
        calculoTotal: item.valor
      };
    });
  }


  public calcularPrecoTotalItem(quantidade: number ,valor:number): number {
    let itemCalculado = quantidade * valor;
     return  +itemCalculado.toFixed(2);
   }
  public calcularTotal(listasDeCompras:ItemDaLista[]): number {
    let calculoTotal =0;
    listasDeCompras.forEach(item => {
      calculoTotal += this.calcularPrecoTotalItem(item.quantidade ,item.valor);

    })
    this.valorTotal = calculoTotal ;
    return +calculoTotal.toFixed(2);
  }

  public salvarListaDeComprasNoHistorico(listafinalizada:ItemDaLista[],nomeDaLista:string): Observable<ListaDeCompras> {

    const listaFormatada = {
      nomeDaLista:nomeDaLista,
      itens: listafinalizada,
      valorTotal: this.calcularTotal(listafinalizada)
    }
    return this.httpclient.post<ListaDeCompras>("http://localhost:3000/historico-de-compras", listaFormatada);
  }

   public listarHistoricoDeCompras():Observable<ListaDeCompras[]>{
      return this.httpclient.get<ListaDeCompras[]>("http://localhost:3000/historico-de-compras")
   }

}


