export class Material {
  id : string
  nome: string
  unidadeDeMedida: string
  quantidadeEmbalagem:number
  valor: number
  marca: string
  selecionado:boolean
  quantidade:number
  custo:number
  constructor(material: Material) {
    this.id = material.id
    this.nome = material.nome
    this.unidadeDeMedida = material.unidadeDeMedida
    this.quantidadeEmbalagem = material.quantidadeEmbalagem
    this.valor = material.valor
    this.marca = material.marca
    this.selecionado = false
    this.quantidade= material.quantidade
    this.custo=material.custo
  }
}
