import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "./login.service";
//import * as CryptoJS from 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})
export class LoginComponent  { 
    public email:String;
    public contra:String;
    public valido:boolean=true;
    constructor( private _router:Router){
    }
    submit(){
        //Metodo accseso a la base de datos, crear la api primero
        console.log(this.email+" - "+this.contra);
        this.valido=!this.valido;
    }
    registro(){
        //Cambiar el path a registro
        this._router.navigate(['empleados']);
    }
}
