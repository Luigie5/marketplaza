import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from "./home.service";
import {Producto} from '../producto';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [HomeService]
})
export class HomeComponent  { 
    public str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed    viverra velit sed felis aliquet viverra. Nullam et tortor viverra    magna consequat fringilla. Duis auctor finibus lectus non ornare.    Donec posuere massa egestas volutpat interdum. Duis vitae    sapien ac tortor dapibus accumsan id sed lacus. Donec    elementum porta commodo. Ut volutpat, dolor aliquet    pellentesque sodales, lorem lacus posuere est, vitae maximus leo    magna at mauris. Proin id maximus enim. Cras eu ante id nisl    commodo vehicula et vel lectus. Nullam id consectetur erat.    Mauris vel odio ligula. Sed elementum eu eros et convallis. Proin    non massa sed tellus eleifend gravida. Praesent ut nisi dui. Nunc    velit magna, imperdiet a sollicitudin pulvinar, convallis id sem"
    public email:String;
    public contra:String;
    public valido:boolean=true;
    public productos:Array<Producto>;
    constructor( private _router:Router){
        this.productos=[new Producto(1,"titulo",this.str,"../../assets/icons/carro.png","../../assets/icons/carro.png",5),
        new Producto(2,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5),
        new Producto(5,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5),
        new Producto(6,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5),
        new Producto(7,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5),
        new Producto(8,"titulo","../../assets/icons/carro.png","../../assets/icons/carro.png","../../assets/icons/carro.png",5)];
    }
}
