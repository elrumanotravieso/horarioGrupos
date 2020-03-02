import { async } from '@angular/core/testing';
import { element } from 'protractor';
import { MateriaHora } from './../../model/materiaHora';
import { Horario } from 'src/app/model/horario';
import { DatosServiceService } from 'src/app/service/datos-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  private horas = ['08:10-09:05', '09:10-10:00', '10:05-10:55', '11:25-12:20', '12:25-13:15', '13:20-14:10'];
  private dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];

  nivelSeleccionado;
  grupoSeleccionado;
  horario: Horario;
  schedule;


  constructor(private data: DatosServiceService , public router: Router, public toastController: ToastController) {
    this.nivelSeleccionado = router.getCurrentNavigation().extras.state.estudios;
    this.grupoSeleccionado = router.getCurrentNavigation().extras.state.grupos;
    this.data.getDataBaseState().subscribe(rdy => {
      if (rdy) {
        this.schedule = data.getHorario(this.grupoSeleccionado);
      }
    });
    this.horario.$cuadrante = this.schedule;

   }


  ngOnInit() {

  }

  mostrarToast(celda: MateriaHora) {
    this.mostrar(celda);
  }

  async mostrar(celda: MateriaHora) {
    const toast = await this.toastController.create({
      message: 'Materia/as seleccionada/as: ' + this.data.getDescripcion(celda) ,
      duration: 1000,
      color: 'grey'
    });
    toast.present();
  }

}
