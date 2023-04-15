// Cotizaciones de viajes por continente
// Emilio Berber Maldonado 


// cotización
function cotizar(n){
    
    // Incialización 
    let agregarPerosnas = true
    let personas = 0
    let cotTotal = 0

    // Agregar personas
    while(agregarPerosnas){
        personas++

        let nombre = prompt(`Ingrese el nombre del pasajero ${personas}:`).toLocaleUpperCase()

        let noches = Number(prompt(`Ingrese el número de noches TOTALES que se hospedará ${nombre}:`))
        if (noches < 0){
            alert("Ingresaste una opción inválida")
            comidas === 0
        }
        let precioTotalNoches = noches * 13; //CADA NOCHE VALE 13 USD
        console.log(`precio total días persona ${personas}: `,precioTotalNoches) //CONTROL MUESTRA CONSOLA

        let comidas = Number(prompt(`Para ${noches} noches:\n\n**MENÚ COMIDAS**\n- Ingrese 1 si SOLO desea tener DESAYUNO - 25 USD p/día\n- Ingrese 2 si SOLO desea tener COMIDA - 45 USD p/día\n- Ingrese 3 si SOLO desea tener CENA - 35 USD p/día\n- Ingrese 4 si desea tener las tres comidas - 105 USD p/día\n\nIngrese que opción le interesa para: ${nombre}`))
        switch (comidas){
            case 1: // Desayuno
                contComidas = 25 * noches;
                break;
            case 2: // Comida
                contComidas = 45 * noches;
                break;
            case 3: // cena
                contComidas = 35 * noches;
                break;
            case 4: // desayuno, comida y cena
                contComidas = 105* noches;
                break;
            default:
                alert("Ingresaste una opción inválida");
                comidas === 0;
                break;
        }
        console.log(`Precio total comidas persona ${personas}:`, contComidas) //CONTROL MUESTRA CONSOLA


        let cotPersona = precioTotalNoches + contComidas
        console.log(`cotización por persona persona ${personas}:`, cotPersona) //CONTROL MUESTRA CONSOLA

        cotTotal+=cotPersona
        console.log("cotización total" ,cotTotal) //CONTROL MUESTRA CONSOLA
        

        agregarPerosnas = confirm("Irá otro pasajero?")
    }
    cotTotal = cotTotal + n//suma valor del continente
    console.log("cotización total con valor de continente" ,cotTotal) //CONTROL MUESTRA CONSOLA
    alert(`DESGLOCE COTIZACIÓN:\nLa cotización total para ${personas} personas es: ${cotTotal} USD`)
}


alert("Hola bienvenido a Continent Travel")
let continente = prompt("Ingrese las primeras 2 letras del continente al que le interesa viajar:\n\n- Europa\n- América\n- Asia\n- Africa\n- Oceanía")
let continenteLowerCase = continente.toLocaleLowerCase()
if(continenteLowerCase === "eu"){
    alert("Bienvenido a viajes en EUROPA\n\nEste viaje te llevará a:\n- Francia\n- Inglaterra\n- España")
    let precioPorContinente = 50; // esto solo es como para que cada continente cueste diferente 
    cotizar(precioPorContinente)

}else if(continenteLowerCase === "am"){
    alert("Bienvenido a viajes en AMÉRICA\n\nEste viaje te llevará a:\n- Estados Unidos\n- México\n- Canadá")
    let precioPorContinente = 38; // esto solo es como para que cada continente cueste diferente 
    cotizar(precioPorContinente)

}else if(continenteLowerCase === "as"){
    alert("Bienvenido a viajes en ASIA\n\nEste viaje te llevará a:\n- Japón\n- Indonesia\n- China")
    let precioPorContinente = 30; // esto solo es como para que cada continente cueste diferente 
    cotizar(precioPorContinente)

}else if(continenteLowerCase === "af"){
    alert("Bienvenido a viajes en AFRICA\n\nEste viaje te llevará a:\n- Sudáfrica\n- Nigeria\n- Marruecos")
    let precioPorContinente = 15; // esto solo es como para que cada continente cueste diferente 
    cotizar(precioPorContinente)

}else if(continenteLowerCase === "oc"){
    alert("Bienvenido a viajes en OCEANÍA\n\nEste viaje te llevará a:\n- Nueva Zelanda\n- Australia\n- Fiyi")
    let precioPorContinente = 20; // esto solo es como para que cada continente cueste diferente 
    cotizar(precioPorContinente)

}else{
    alert("Lo siento, no agregaste una opción válida!")
}

// AGREGANDO CONCEPTOS DE LA SEGUNDA ENTREGA:
// 1) CLASE CON CONSTRUCTOS Y OBJETOS
// 2) ARRAY
// 3) MÉTODO DE BUSQUEDA Y FILTRADO SOBRE EL ARRAY

// 1)
// creación de la clase Pasajero
class Pasajero{
    constructor(nombre, edad, nacionalidad, presupuesto){
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.presupuesto = presupuesto; // presupuesto mínimo del usuario en dolares para el viaje
    }
}

// creación de los objetos de la clase Pasajero

const persona1 = new Pasajero("Persona1", 10, "Mexicano", 1500);
const persona2 = new Pasajero("Persona2", 45, "Argentino", 2500);
const persona3 = new Pasajero("Persona3", 23, "Mexicano", 4000);
const persona4 = new Pasajero("Persona4", 8, "Mexicano", 950);
const persona5 = new Pasajero("Persona5", 65, "Italiano", 1350);

// 2)
// creación del array de pasajeros para una cotización de viaje para una familia de 5 personas
const arrayPasajeros = [persona1, persona2, persona3, persona4, persona5];
console.log("Ejemplo de familiares para un viaje");
console.log(arrayPasajeros);

// 3) 
// Método de busqueda find
const buscarPersona3 = arrayPasajeros.find(pasajero => pasajero.nombre === "Persona3");
console.log("Busqueda ÚNICAMENTE del pasajero3");
console.log(buscarPersona3);
// Método de filtrado
const arrayPasajeroPresupuestoMayor1500 = arrayPasajeros.filter(pasajero => pasajero.presupuesto > 1500);
console.log("Filtado ÚNICAMENTE con presupuesto mayor a 1500 usd")
console.log(arrayPasajeroPresupuestoMayor1500);

console.log("Muestra de las 5 personas de la cotización del viaje")
console.log(arrayPasajeros);

// CASO DE PRUEBA:
// EJEMPLO: para 3 personas en oceanía
//
// 1era persona: 
// Noches = 5 --> x13 = 65
// Comidas = 1 --> 1x25 = 25 * 5 noches = 125
// SUMA PERSONA 1: 190 USD
//
// 2da persona:
// Noches = 10 --> x13 = 130
// Comidas = 2 --> 1x45 = 45 * 10 noches = 450
// SUMA PERSONA 2: 580 USD
// 
// 3ra persona:
// Noches = 25 --> x13 = 325
// Comidas = 4 --> 1x105 = 105 * 25 noches = 2625
// SUMA PERSONA 3: 2950 USD
//
// PRECIO TOTAL DE LAS 3 PERSONAS: 3720 USD
// PRECIO TOTAL DE LAS 3 PERSONAS + 20 VALOR OCEANÍA = 3740 USD

// Por lo tanto, cotización para este grupo de 3 personas en oceanía
// contemplando sus requerimientos por persona, el total de los 3 serían 3740 USD
