import { Material } from "src/app/material/models/material.model";

export class Receita {
  id: string;
  nome:string;
  imagem: string;
  observacoes: string;
  video: string;
  materiais:Material[];
  rendimento:number;
  lucroGastosIndiretos:number;
  lucroGastosDiretos:number;
  custoDaReceita:number;

  constructor( receita:Receita) {
    this.id = receita.id;
    this.nome = receita.nome;
    this.imagem = receita.imagem;
    this.observacoes = receita.observacoes;
    this.video = receita.video;
    this.materiais = receita.materiais;
    this.rendimento = receita.rendimento;
    this.lucroGastosDiretos = receita.lucroGastosDiretos;
    this.lucroGastosIndiretos = receita.lucroGastosIndiretos;
    this.custoDaReceita = receita.custoDaReceita;
  }
}
