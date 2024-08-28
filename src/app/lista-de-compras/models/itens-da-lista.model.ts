export class ItemDaLista {
  id: string
  nomeItem: string
  quantidade: number
  marca: string
  valor: number
  categoria:number
  precoItemCalculado:number
  calculoTotal:number
  constructor(listaDeCompras: ItemDaLista) {
    this.id = listaDeCompras.id,
      this.nomeItem = listaDeCompras.nomeItem,
      this.quantidade = listaDeCompras.quantidade,
      this.marca = listaDeCompras.marca,
      this.valor = listaDeCompras.valor,
      this.categoria = listaDeCompras.categoria,
      this.precoItemCalculado = listaDeCompras.precoItemCalculado,
      this.calculoTotal = listaDeCompras.calculoTotal
  }
}
