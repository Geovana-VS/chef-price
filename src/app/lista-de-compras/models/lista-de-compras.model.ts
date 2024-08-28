import { ItemDaLista } from "./itens-da-lista.model"

export class ListaDeCompras {
  id: string
  nomeLista?: string
  itens?:ItemDaLista[]
  valorTotal:number


   constructor(listaDeCompras: ListaDeCompras) {
      this.id = listaDeCompras.id,
      this.nomeLista = listaDeCompras.nomeLista,
      this.itens = listaDeCompras.itens,
      this.valorTotal =listaDeCompras.valorTotal
   }
}
