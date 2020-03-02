import { getTestBed } from '@angular/core/testing';
import { DatosServiceService } from './../service/datos-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  private listaNivelesEstudios;


  constructor(public router: Router, private datos: DatosServiceService) {

  }

  getEstudios() {
    this.datos.getEstudios().then((data) => {
      this.listaNivelesEstudios = data;
    });
  }



  enviarDato(nivel: string) {
    let navigationExtras: NavigationExtras = {
      state : {
        estudios: nivel
      }
    };
    this.router.navigate(['grupos'], navigationExtras);
  }

  ngOnInit(): void {
    this.datos.getDataBaseState().subscribe(rdy => {
      if (rdy) {
        this.getEstudios();
      }
    });
  }



}
