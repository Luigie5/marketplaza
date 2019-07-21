import {Injectable} from "@angular/core";
import {Empleado} from "./empleado";
import {Http, Response, Headers} from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable";

@Injectable()
export class EmpleadoService{
    
    public empleados:Array<Empleado>=[];
    

    addEmpleado(string:String){
        var string1=string.split(",");
        console.log(isNaN(parseInt(string1[1])));
        if(string1.length===3 &&  isNaN(parseInt(string1[1]))===false){
            console.log(string1.length);
            this.empleados.push(new Empleado(string1[0],string1[1],string1[2]));
            return true;
        }else{
            alert("La estructura de un Emplado debe ser una ristra de letras seguido de una coma, un numero seguido de una coma y otra ristra de letras");
        }
        return false;
    }
    getEmpleados(){
        return this.empleados;
    }
    deleteEmpleado(index:number){
        this.empleados.splice(index,1);
    }

    
}
@Injectable()
export class APIService{
    public url:string;
    constructor(private _http:Http
    ){
        this.url='http://localhost:8080/WSEmpleados/webresources/empleados';
    }
    getEmpleadosAPI(){
        return this._http.get(this.url).map(res => res.json());
    }

    addEmpleadoAPI(empleado:Empleado){
        let json=JSON.stringify(empleado);
        console.log(json);
        let param= "json="+json;
        console.log(param)
        /*let headers =new Headers(
            {'Content-Type':'application/json'}
            
            );*/
        return this._http.get(this.url+'?'+param).map(res => res.json());
    }
    deleteEmpleadoAPI(empleado:Empleado){
        let param= "nombre="+empleado.nombre;
        console.log(param)
        /*let headers =new Headers(
            {'Content-Type':'application/json'}
            
            );*/
        return this._http.get(this.url+'?'+param).map(res => res.json());
    }
}