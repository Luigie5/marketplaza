import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmpleadoComponent }  from './empleado/empleado.component';
import { AddEmpleadoComponent }  from './empleado/addempleado.component';
import {routing,appRoutingProviders} from './app.routing';
import {VacioComponent} from './vacio/vacio.component';
import {LoginComponent} from './login/login.component';
import {HttpModule} from "@angular/http";
import {HomeComponent} from './home/home.component';
import {CarroComponent} from './carro/carro.component';
import {ProductoComponent} from './producto/producto.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule],
  declarations: [ AppComponent , EmpleadoComponent,VacioComponent,
    AddEmpleadoComponent,LoginComponent,HomeComponent,ProductoComponent,CarroComponent],
  bootstrap:    [ AppComponent ],
  providers:    [appRoutingProviders ]
})
export class AppModule { }
