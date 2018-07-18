import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FotosProvider } from './../../providers/fotos/fotos';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html',
})
export class FotosPage {

  fotosmostrar = [];
  listafotos = [];
  local :any = {};
  coordenadas = {};

constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private fotosProvider:FotosProvider,
      private camera: Camera) {

      }

      getFoto(tipo) {
        //configura a camera DATA_URL para funcionar em aparelhos mais antigos com menos memoria
        //o tipo que vem por parametro da view é para abrir a camera ou galeria
        const options: CameraOptions = {
          quality: 10,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType:
          tipo == "picture"
              ? this.camera.PictureSourceType.CAMERA
              : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          correctOrientation: true,
          saveToPhotoAlbum: false
        };
        // salvamos a imagem no array que mostra na view
        this.camera.getPicture(options).then(
          imageData => {
            this.listafotos.push("data:image/jpeg;base64," + imageData);
          },
          err => {
            // Handle error
            console.log(err);
          }
        );
      }
      // apaga imagem do array
      apagaImagen(index){
        this.listafotos.splice(index,1);
      }
    
      salvarFotos(){
        //verifica se há fotos para upload para nao dar erro
        //chama o metodo do provider que faz upload e salva a os dados da foto na database
        if(this.listafotos.length>0){
          this.fotosProvider.uploadMulti(this.listafotos, this.local.payload.key);
        }
        // this.navCtrl.pop();
      }


  homePage(){
    this.navCtrl.setRoot(HomePage);
  }
}
//¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ INCLUIR FOTOS ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
// local :any = {};
// listafotos = [];
// coordenadas = {};

// constructor(public navCtrl: NavController, public navParams: NavParams,
//   private fotosProvider:FotosProvider, private camera: Camera, private geolocation:Geolocation) {
//   // recupera os dados da view anterior
//     this.local = this.navParams.data;
//     //busca as coordenadas do aparelho
//   this.geolocation.getCurrentPosition().then((resp) => {
//     // salva em um json para colocar dentro do objeto da foto
//     this.coordenadas = {latitude:resp.coords.latitude, logitude:resp.coords.longitude};

//    }).catch((error) => {
//      alert('Erro localizacao = '+ error);
//    });

// }

// voltarPagina(){
//   this.navCtrl.pop();
// }


// getFoto(tipo) {
//   //configura a camera DATA_URL para funcionar em aparelhos mais antigos com menos memoria
//   //o tipo que vem por parametro da view é para abrir a camera ou galeria
//   const options: CameraOptions = {
//     quality: 10,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE,
//     sourceType:
//     tipo == "picture"
//         ? this.camera.PictureSourceType.CAMERA
//         : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
//     correctOrientation: true,
//     saveToPhotoAlbum: false
//   };
//   // salvamos a imagem no array que mostra na view
//   this.camera.getPicture(options).then(
//     imageData => {
//       this.listafotos.push("data:image/jpeg;base64," + imageData);
//     },
//     err => {
//       // Handle error
//       console.log(err);
//     }
//   );
// }
// // apaga imagem do array
// apagaImagen(index){
//   this.listafotos.splice(index,1);
// }

// salvarFotos(){
//   //verifica se há fotos para upload para nao dar erro
//   //chama o metodo do provider que faz upload e salva a os dados da foto na database
//   if(this.listafotos.length>0){
//     this.fotosProvider.uploadMulti(this.listafotos, this.local.payload.key, this.coordenadas);
//   }
//   this.navCtrl.pop();
// }

//¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ VISUALIZA FOTOS ¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
// local: any = {};
// fotosmostrar = [];

// constructor(public navCtrl: NavController, public navParams: NavParams,
//   private fotosProvider:FotosProvider) {
//     // recupera os dados da view anterior
//   this.local = this.navParams.data;
//   /* aqui fazemos a query para mostrar somente as fotos do local
//   podemos usar esse metodo para qualquer tipo de filtro, passando o campo que quer buscar
//   e o valor do campo no segundo atributo.
//   como usaremos o recurso real time database do firebase, ele retorna um observable, usando
//   subscribe inserimos os dados na nossa lista e alterando no banco de dados automaticamente
//   irá mudar a lista de todos os usuarios online
//   */
//   this.fotosProvider.getByQuery('idlocal', this.local.payload.key).subscribe(resp => this.fotosmostrar = resp);


// }


// incluirFoto(){
//   // passamos o parametro do local para o proxima view e abrimos a pagina de incluir fotos
//   this.navParams.data = this.local;
//   this.navCtrl.push(IncluiFotoPage, this.navParams);
// }

// voltarPagina(){
//   this.navCtrl.pop();
// }