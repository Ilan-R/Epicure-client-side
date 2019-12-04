
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { } from 'googlemaps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat: number;
  lng: number;
  coordinates: google.maps.LatLng;
  mapOptions: google.maps.MapOptions;
  marker: google.maps.Marker;


  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(`longitude: ${this.lng} | latitude: ${this.lat}`);
        this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        this.mapOptions = {
          center: this.coordinates,
          zoom: 8
        };
        this.marker = new google.maps.Marker({
          position: this.coordinates,
          map: this.map,
          title: 'Hello World!'
        });
        this.mapInitializer();
      });
    }

  }

  ngAdterViewInit() {

  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }
}
