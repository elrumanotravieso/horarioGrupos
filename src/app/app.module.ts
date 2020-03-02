import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { DatosServiceService } from './service/datos-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatosServiceMock } from './mock/datosService/datos-serviceMock';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SqliteDbCopy,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, DatosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 /* constructor(public sqliteDbCopy: SqliteDbCopy) {
    this.sqliteDbCopy.copy('Horario16c.db', 0).then((res) => {
      console.log('copiando bbd correcto', (res))
    })
      .catch((error) => {
        console.error('copiando bbdd error', (error))
      })
  }*/}
