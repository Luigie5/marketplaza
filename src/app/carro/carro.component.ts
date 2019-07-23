import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CarroService} from "./carro.service";
import {Producto} from '../producto';

@Component({
    selector: 'carro',
    templateUrl: './carro.component.html',
    providers: [CarroService]
})
export class CarroComponent  { 
    public str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed    viverra velit sed felis aliquet viverra. Nullam et tortor viverra    magna consequat fringilla. Duis auctor finibus lectus non ornare.    Donec posuere massa egestas volutpat interdum. Duis vitae    sapien ac tortor dapibus accumsan id sed lacus. Donec    elementum porta commodo. Ut volutpat, dolor aliquet    pellentesque sodales, lorem lacus posuere est, vitae maximus leo    magna at mauris. Proin id maximus enim. Cras eu ante id nisl    commodo vehicula et vel lectus. Nullam id consectetur erat.    Mauris vel odio ligula. Sed elementum eu eros et convallis. Proin    non massa sed tellus eleifend gravida. Praesent ut nisi dui. Nunc    velit magna, imperdiet a sollicitudin pulvinar, convallis id sem"
    public email:String;
    public contra:String;
    public valido:boolean=true;
    public productos:Array<Producto>;
    public valor:Array<number>=[1];
    public total:number;
    public tocado:boolean;
    constructor( private _router:Router,
        private _carroService:CarroService){
            this.tocado=true;
            this.productos=[new Producto(2,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5)];
    }
    ngOnInit(){
        this.calcularTotal();
    }
    calcularTotal(){
        var total=0;
        for(let indice=0;indice<this.productos.length;indice++){
            total+=this.valor[indice]*this.productos[indice].precio;
        }
        this.total=total;
    }
    valorar(index:number){
        if(this.valor[index]==10){
            this.tocado=false;
        }
    }
    eliminar(index:number){
        this.productos.splice(index,1);
        this.valor.splice(index,1);
        if(this.productos.length==0){
            this.total=0;
        }else{
            this.calcularTotal();
        }
    }
}