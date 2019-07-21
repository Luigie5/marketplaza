export class Comentario{
    constructor(
        public id:number,
        public productoID:number,
        public userID:number,
        public comentario:String,
        public valoracion:number,
        //Antes se usaba edad como number por lo que se afectaba a la logica del servicio empleado
    ){}
}