cuentaTotal  = 0
class contador{
    constructor(nombre){
        this.nombre = nombre;
        console.log("Nuevo objeto creado");
        cuenta = 0;
        cuentaGlobal = cuentaTotal;
    }
    static viariableEstatica = 4;
    getResponsable(){
        console.log(nombre)
    };
    getCuentaIndividual(){
        console.log(cuenta)
    };
    getCuentaGlobal(){
        console.log(cuentaTotal)
    };
    contar(){
        cuenta++;
        cuentaTotal++;
    };
}

let Persona1 = new contador("Carlos");
let Persona2 = new contador("Carlos");
let Persona3 = new contador("Carlos");
let Persona4 = new contador("Carlos");

