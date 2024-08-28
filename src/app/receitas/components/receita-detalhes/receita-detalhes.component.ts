import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../../services/receita.service';
import { Receita } from './../../models/receita.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-receita-detalhes',
  templateUrl: './receita-detalhes.component.html',
  styleUrls: ['./receita-detalhes.component.css']
})
export class ReceitaDetalhesComponent implements OnInit {

  public receita:Receita |null=null;
  public idVideo:string="";

  constructor( private receitaService:ReceitaService,
               private route : ActivatedRoute,
               private router :Router){

  }

  ngOnInit(): void {
   this.pegarId()
  }



  private pegarId():void{
      this.route.params.subscribe(params =>{
        let id = params['id'];
        this.encontrarReceita(id)
      })
  }

  private encontrarReceita(id:string){
     this.receitaService.listarReceitaPorId(id).subscribe(receita =>{
      this.receita = receita
      const match = receita.video.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
       if(match){
        this.idVideo = match[1]
        console.log(this.idVideo)
        }
       })


  }

  public editarReceita(id?: string) {
    this.router.navigate(['receita/editar-receita', id])
  }



  // public carregandoImagem(event: Event): void {
  //   const imgElement = event.target as HTMLImageElement;
  //   const isBase64 = imgElement.getAttribute('b64') === 'true';

  //   if (isBase64) {
  //     const src = imgElement.src;
  //     this.convertBase64ToImage(src).then((imageBlob: Blob) => {
  //       const imageUrl = URL.createObjectURL(imageBlob);
  //       imgElement.src = imageUrl;
  //     });
  //   }
  // }

  // private convertBase64ToImage(base64String: string): Promise<Blob> {
  //   return fetch(base64String)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Erro ao buscar imagem');
  //       }
  //       return response.blob();
  //     })
  //     .catch(error => {
  //       console.error('Erro ao converter base64 para imagem:', error);
  //       throw error;
  //     });
  // }

}
