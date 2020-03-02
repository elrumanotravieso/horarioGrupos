import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatosServiceService } from 'src/app/service/datos-service.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

  private nivelSeleccionado;
  protected listaGrupos;


  constructor(private datosService: DatosServiceService, public router: Router) {
    this.nivelSeleccionado = router.getCurrentNavigation().extras.state.estudios;
    this.datosService.getDataBaseState().subscribe(rdy => {
      if (rdy) {
        this.obtenerGrupos(this.nivelSeleccionado.nombre);
      }
    });
   }

  ngOnInit() {
   
  }

  obtenerGrupos(nivel: string) {
    this.datosService.getGrupos(nivel).then((grupos) => {
      this.listaGrupos = grupos;
    }).catch(() => {
      return null;
    });
  }

  enviarDato(grupoSeleccionado: string) {
    let navigationExtras : NavigationExtras = {
      state : {
        estudios: this.nivelSeleccionado,
        grupos: grupoSeleccionado
      }
    };
    this.router.navigate(['horario'], navigationExtras);
  }
}
