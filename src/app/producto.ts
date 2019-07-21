export class Producto{
    constructor(
        public id:number,
        public titulo:String,
        public descripcion:String,
        public categoria:String,
        public imagen:String,
        public precio:number,
        //Antes se usaba edad como number por lo que se afectaba a la logica del servicio empleado
    ){}
}