import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ActionSheetController, Platform } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-rotas',
  templateUrl: 'rotas.html',
})
export class RotasPage {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.initializeMap();
  }

  initializeMap() {
    this.startPosition = new google.maps.LatLng(-23.65490717, -52.61220157);

    const mapOptions = {
      zoom: 16,
      center: this.startPosition
      // disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
    });
  }

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
}