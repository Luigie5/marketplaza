export class Empleado{
    constructor(
        public nombre:String,
        public edad:String,
        public puesto:String
        //Antes se usaba edad como number por lo que se afectaba a la logica del servicio empleado
    ){}
}