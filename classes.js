let cuentaTotal  = 0
class contador{
    constructor(nombre){
        this.nombre = nombre;
        console.log("Nuevo objeto creado");
        this.cuenta = 0;
    }
    getResponsable(){
        console.log(this.nombre)
    };
    getCuentaIndividual(){
        console.log(this.cuenta)
    };
    getCuentaGlobal(){
        console.log(cuentaTotal)
    };
    contar(veces){
        for (let i = 0; i <veces; i++){
            this.cuenta++;
            cuentaTotal++;
        }
        
    };
}

let Persona1 = new contador("Carlos");
let Persona2 = new contador("Carlos");
let Persona3 = new contador("Carlos");
let Persona4 = new contador("Carlos");

Persona1.contar(3);
Persona2.contar(2);
Persona3.contar(1);
Persona4.contar(4);

Persona1.getCuentaIndividual();
Persona2.getCuentaGlobal();