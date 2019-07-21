import { Component } from '@angular/core';
import { Empleado } from './empleado';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {APIService} from "./empleado.service";

@Component({
    selector: 'empleados',
    templateUrl: './empleado.component.html',
    providers: [APIService]
})
export class EmpleadoComponent  { 
    public trabajadores:Array<Empleado>;
    public busqueda:String;
    public parametro:String;
    public empleado:Empleado;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _api:APIService,
    ){
        this.busqueda="";
        this.trabajadores=[new Empleado("Luis","21","Informatico"),
        new Empleado("Fran","21","Contable")];
        this.empleado=new Empleado("","","")
    }

    ngOnInit(){
        this._route.params.forEach((params:Params)=>{
            this.parametro =params['param'];
        });
        this.cargarLista();
        //this._empleadoService= new EmpleadoService();
        //this.trabajadores= this._empleadoService.getEmpleados();
    }
    eliminarEmpleadoAPI(index:number){
        console.log(index);
        this._api.deleteEmpleadoAPI(this.trabajadores[index]).subscribe(
            result =>{
                this.trabajadores=result;
                console.log(result);
            },
            error =>{
                console.log(error);
            }
        );
    }
    cargarLista(){
        this._api.getEmpleadosAPI().subscribe(
            result =>{
                this.trabajadores=result;
            },
            error =>{
                console.log("Error");
            }
        );
    }
}