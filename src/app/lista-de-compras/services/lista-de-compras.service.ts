import { Injectable } from '@angular/core';
import { ListaDeCompras } from '../models/lista-de-compras.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDaLista } from '../models/itens-da-lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaDeComprasService {

  public listaDeComprasCriada?: ListaDeCompras ;
  public itensDalista?:ItemDaLista
  public comprarLista?:ListaDeCompras

  constructor(private httpclient: HttpClient) { }

  public listarListasDeCompras(): Observable<ListaDeCompras[]> {
    return this.httpclient.get<ListaDeCompras[]>("http://localhost:3000/lista-de-compras")
  }

  public criarListaDeCompras(listaDeCompras: ListaDeCompras, itensDaCompra: ItemDaLista[]): Observable<ListaDeCompras> {
    listaDeCompras.itens = itensDaCompra;
    return this.httpclient.post<ListaDeCompras>("http://localhost:3000/lista-de-compras", listaDeCompras)
  }


}


