import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable";
import {Producto} from '../producto';  

@Injectable()
export class CarroService{
    public url:string;
    public productos:Array<Producto>;
    constructor(private _http:Http
    ){
        this.url='http://localhost:8080/WSEmpleados/webresources/empleados';
    }
    ngOnInit(){
        this.productos.push(new Producto(2,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5));
        this.productos.push(new Producto(2,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5));
    }
    onClick(producto:Producto){
        this.productos.push(producto);
    }
}