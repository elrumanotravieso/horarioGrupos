import { MateriaHora } from './../model/materiaHora';
import { Horario } from './../model/horario';
import { Injectable } from '@angular/core';
import { Datable } from '../interface/datable';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosServiceService implements Datable {


  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private plt: Platform, private sqlite: SQLite) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'Horario16c.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.dbReady.next(true);
        });
    });

  }
  getDataBaseState() {
    return this.dbReady.asObservable();
  }

  getEstudios() {
    let estudios = [];
    return new Promise((resolve) => {
      this.database.executeSql('SELECT * FROM estudios', []).then((datos) => {
        if (datos.rows.length > 0) {
          for (let i = 0; i < datos.rows.length; i++) {
            estudios.push({
              idEstudios: datos.rows.item(i).idEstudios,
              nombre: datos.rows.item(i).nombre
            });
          }
        }
      });
      console.log(estudios);
      resolve(estudios);
    })
  }

  getGrupos(estudios: string) {
      let grupos = [];
      return new Promise((resolve) => {
        // tslint:disable-next-line:max-line-length
        this.database.executeSql('SELECT * FROM grupo WHERE grupo.idEstudios = (SELECT idEstudios FROM estudios WHERE nombre=?)', [estudios]).then((datos) => {
          if (datos.rows.length > 0) {
            for (let i = 0; i < datos.rows.length; i++) {
              grupos.push({
                idGrupo: datos.rows.item(i).idGrupo,
                nombre: datos.rows.item(i).nombre,
              });
            }
          }
        });
        console.log(grupos);
        resolve(grupos);
      });
  }

  getHorario(grupo: string) {
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:max-line-length
    let horario = [[new MateriaHora(this.getAsignatura('1', '1', grupo), this.getDescrip('1', '1', grupo)), new MateriaHora(this.getAsignatura('1', '2', grupo), this.getDescrip('1', '2', grupo)), new MateriaHora(this.getAsignatura('1', '3', grupo), this.getDescrip('1', '3', grupo)), new MateriaHora(this.getAsignatura('1', '4', grupo), this.getDescrip('1', '4', grupo)), new MateriaHora(this.getAsignatura('1', '5', grupo), this.getDescrip('1', '5', grupo))],
    // tslint:disable-next-line:max-line-length
    [new MateriaHora(this.getAsignatura('2', '1', grupo), this.getDescrip('2', '1', grupo)), new MateriaHora(this.getAsignatura('2', '2', grupo), this.getDescrip('2', '2', grupo)), new MateriaHora(this.getAsignatura('2', '3', grupo), this.getDescrip('2', '3', grupo)), new MateriaHora(this.getAsignatura('2', '4', grupo), this.getDescrip('2', '4', grupo)), new MateriaHora(this.getAsignatura('2', '5', grupo), this.getDescrip('2', '5', grupo))],
    // tslint:disable-next-line:max-line-length
    [new MateriaHora(this.getAsignatura('3', '1', grupo), this.getDescrip('3', '1', grupo)), new MateriaHora(this.getAsignatura('3', '2', grupo), this.getDescrip('3', '2', grupo)), new MateriaHora(this.getAsignatura('3', '3', grupo), this.getDescrip('3', '3', grupo)), new MateriaHora(this.getAsignatura('3', '4', grupo), this.getDescrip('3', '4', grupo)), new MateriaHora(this.getAsignatura('3', '5', grupo), this.getDescrip('3', '5', grupo))],
    // tslint:disable-next-line:max-line-length
    [new MateriaHora(this.getAsignatura('4', '1', grupo), this.getDescrip('4', '1', grupo)), new MateriaHora(this.getAsignatura('4', '2', grupo), this.getDescrip('4', '2', grupo)), new MateriaHora(this.getAsignatura('4', '3', grupo), this.getDescrip('4', '3', grupo)), new MateriaHora(this.getAsignatura('4', '4', grupo), this.getDescrip('4', '4', grupo)), new MateriaHora(this.getAsignatura('4', '5', grupo), this.getDescrip('4', '5', grupo))],
    // tslint:disable-next-line:max-line-length
    [new MateriaHora(this.getAsignatura('5', '1', grupo), this.getDescrip('5', '1', grupo)), new MateriaHora(this.getAsignatura('5', '2', grupo), this.getDescrip('5', '2', grupo)), new MateriaHora(this.getAsignatura('5', '3', grupo), this.getDescrip('5', '3', grupo)), new MateriaHora(this.getAsignatura('5', '4', grupo), this.getDescrip('5', '4', grupo)), new MateriaHora(this.getAsignatura('5', '5', grupo), this.getDescrip('5', '5', grupo))],
    // tslint:disable-next-line:max-line-length
    [new MateriaHora(this.getAsignatura('6', '1', grupo), this.getDescrip('6', '1', grupo)), new MateriaHora(this.getAsignatura('6', '2', grupo), this.getDescrip('6', '2', grupo)), new MateriaHora(this.getAsignatura('6', '3', grupo), this.getDescrip('6', '3', grupo)), new MateriaHora(this.getAsignatura('6', '4', grupo), this.getDescrip('6', '4', grupo)), new MateriaHora(this.getAsignatura('5', '5', grupo), this.getDescrip('5', '5', grupo))]];
    return horario;
  }

  consultaAsignaturas(hora: string, dia: string, grupo: string) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:quotemark
      // tslint:disable-next-line:max-line-length
      this.database.executeSql('SELECT * FROM materia WHERE idMateria IN (SELECT idMateria FROM materiahoraclase WHERE idHoraClase = (SELECT idHoraClase FROM horaClase WHERE idHorasSemana=? AND idHoraClase IN (SELECT idHoraClase FROM materiahoraclase WHERE idHoraClase IN (SELECT idHoraClase FROM horaClase WHERE idDiaClase IN (SELECT idDiaClase FROM diaClase WHERE  idDiaSemana=? and idGrupo=(SELECT idGrupo FROM grupo WHERE nombre=?))))))', [hora, dia, grupo])
        .then(
          (data) => {
            let arrayMateria = [];
            if (data.rows.length > 0) {
              for (var i = 0; i < data.rows.length; i++) {
                arrayMateria.push({
                  idMateria: data.rows.item(i).idMateria,
                  nombre: data.rows.item(i).nombre,
                  completo: data.rows.item(i).completo,
                });
              }
              console.log(arrayMateria);
              resolve(arrayMateria);
            }
          })
        .catch((error) => {
          reject(error);
        });
    });
  }

  consultaDescripcion(hora: string, dia: string, grupo: string) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:quotemark
      // tslint:disable-next-line:max-line-length
      this.database.executeSql('SELECT * FROM materia WHERE idMateria IN (SELECT idMateria FROM materiahoraclase WHERE idHoraClase = (SELECT idHoraClase FROM horaClase WHERE idHorasSemana=? AND idHoraClase IN (SELECT idHoraClase FROM materiahoraclase WHERE idHoraClase IN (SELECT idHoraClase FROM horaClase WHERE idDiaClase IN (SELECT idDiaClase FROM diaClase WHERE  idDiaSemana=? and idGrupo=(SELECT idGrupo FROM grupo WHERE nombre=?))))))', [hora, dia, grupo])
        .then(
          (data) => {
            let arrayDescripcion = [];
            if (data.rows.length > 0) {
              for (var i = 0; i < data.rows.length; i++) {
                arrayDescripcion.push({
                  completo: data.rows.item(i).completo,
                });
              }
              resolve(arrayDescripcion);
            }
          })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDescrip(hora: string, dia: string, grupo: string): string[] {
    let descripciones = [];
    this.consultaAsignaturas(hora, dia, grupo).then((data) => {
      descripciones.push(data);

    }).catch(() => {
      return null;
    });
    return descripciones;

  }

  getAsignatura(hora: string, dia: string, grupo: string): string[] {
    let asignaturas = [];
    this.consultaAsignaturas(hora, dia, grupo).then((data) => {
      asignaturas.push(data);

    }).catch(() => {
      return null;
    });
    return asignaturas;

  }

  getDescripcion(materias: MateriaHora) {
    return materias.$descripcion;
  }








}
