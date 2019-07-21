import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable";

@Injectable()
export class HomeService{
    public url:string;
    constructor(private _http:Http
    ){
        this.url='http://localhost:8080/WSEmpleados/webresources/empleados';
    }
    /*
    getEmpleadosAPI(){
        return this._http.get(this.url).map(res => res.json());
    }

    addEmpleadoAPI(empleado:Empleado){
        let json=JSON.stringify(empleado);
        console.log(json);
        let param= "json="+json;
        console.log(param)
        let headers =new Headers(
            {'Content-Type':'application/json'}
            
            );
        return this._http.get(this.url+'?'+param).map(res => res.json());
    }
    deleteEmpleadoAPI(empleado:Empleado){
        let param= "nombre="+empleado.nombre;
        console.log(param)
        let headers =new Headers(
            {'Content-Type':'application/json'}
            
            );
        return this._http.get(this.url+'?'+param).map(res => res.json());
    }*/
}