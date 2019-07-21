import { Component } from '@angular/core';
import { Empleado } from './empleado';
import {Router} from '@angular/router';
import {EmpleadoService, APIService} from "./empleado.service";

@Component({
    selector: 'adddempleados',
    templateUrl: './addempleado.component.html',
    providers: [EmpleadoService,APIService]
})
export class AddEmpleadoComponent  { 
    public trabajadores:Array<Empleado>;
    public busqueda:String;
    public parametro:String;
    public empleado:Empleado;

    constructor(
        private _router: Router,
        private _api:APIService,
    ){
        this.empleado=new Empleado("","","")
    }
    nuevoEmpleadoFormAPI(){
        this._api.addEmpleadoAPI(this.empleado).subscribe(
            result =>{
                console.log(result);
                this._router.navigate(['empleados']);
            },
            error =>{
                console.log(error);
            }
        );
    }
}