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
        console.log(this.nombre + " cuenta individual: " + this.cuenta)
    };
    getCuentaGlobal(){
        console.log(this.nombre + " cuenta global: " + cuentaTotal)
    };
    contar(veces){
        for (let i = 0; i <veces; i++){
            this.cuenta++;
            cuentaTotal++;
        }
        
    };
}
function RandomNum (){
    return Math.floor(Math.random() * 10) + 1;
};
let Persona1 = new contador("Carlos");
let Persona2 = new contador("Juan");
let Persona3 = new contador("Agustin");
let Persona4 = new contador("Lily");

Persona1.contar(RandomNum());
Persona2.contar(RandomNum());
Persona3.contar(RandomNum());
Persona4.contar(RandomNum());

Persona1.getCuentaIndividual();
Persona2.getCuentaIndividual();
Persona3.getCuentaIndividual();
Persona4.getCuentaIndividual();

Persona1.getCuentaGlobal();
Persona2.getCuentaGlobal();
Persona3.getCuentaGlobal();
Persona4.getCuentaGlobal();