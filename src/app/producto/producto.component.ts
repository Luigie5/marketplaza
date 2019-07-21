import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from "./producto.service";
import {Producto} from '../producto';
import {Comentario} from '../comentario';

@Component({
    selector: 'producto',
    templateUrl: './producto.component.html',
    providers: [ProductoService]
})
export class ProductoComponent  { 
    public str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed    viverra velit sed felis aliquet viverra. Nullam et tortor viverra    magna consequat fringilla. Duis auctor finibus lectus non ornare.    Donec posuere massa egestas volutpat interdum. Duis vitae    sapien ac tortor dapibus accumsan id sed lacus. Donec    elementum porta commodo. Ut volutpat, dolor aliquet    pellentesque sodales, lorem lacus posuere est, vitae maximus leo    magna at mauris. Proin id maximus enim. Cras eu ante id nisl    commodo vehicula et vel lectus. Nullam id consectetur erat.    Mauris vel odio ligula. Sed elementum eu eros et convallis. Proin    non massa sed tellus eleifend gravida. Praesent ut nisi dui. Nunc    velit magna, imperdiet a sollicitudin pulvinar, convallis id sem"
    public producto:Producto;
    public id:String;
    public media=2;
    public comentarios:Array<Comentario>;
    constructor( private _router:Router,
        private _route: ActivatedRoute,){
        this.producto=new Producto(1,"titulo",this.str,"../../assets/icons/carro.png","../../assets/icons/carro.png",5.52);
        this.comentarios=[new Comentario(1,1,2,"Muy bueno",5),new Comentario(2,1,1,"Muy malo",1)];
    }
    ngOnInit(){
        this._route.params.forEach((params:Params)=>{
            this.id =params['id'];
        });
        //this._empleadoService= new EmpleadoService();
        //this.trabajadores= this._empleadoService.getEmpleados();
    }
}
