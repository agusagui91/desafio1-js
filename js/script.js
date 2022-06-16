let nombreUsuario = prompt("Ingrese su nombre"); 
let apellidoUsuario = prompt("Ingrese su apellido");
    alert("Hola" + " " + nombreUsuario + " " + apellidoUsuario + `!`) 


const CURRENT_YEAR = 2022

let nacimientoUsuario = Number(prompt("Ingrese año de nacimiento")); 
let edadUsuario = CURRENT_YEAR - nacimientoUsuario;
let prefijo = `tienes ${edadUsuario} años`;

if (edadUsuario <= 18) {
    alert(prefijo + " tienes toda una vida por delante");
} else if ((edadUsuario > 18) && (edadUsuario <= 35)) {
    alert(prefijo + " que grande que estas, bienvenido al curso de JavaScript");
} else {
    alert(prefijo + " que bueno que puedas dedicar tiempo a este curso");
    }


let sumatoria = 0;

const NUMERO_NOTAS = 5;
    
    
for (let i = 1; i <= 5; i++){
    let notaUsuario = Number(prompt( "Ingrese su nota" ) );
    switch (true) {
        case notaUsuario === 0:
            alert(notaUsuario + ` Muy malo`);
            sumatoria = sumatoria + notaUsuario;
            break;
        case notaUsuario >= 1 && notaUsuario <= 4:
            alert(notaUsuario + ` Malo`);
            sumatoria = sumatoria + notaUsuario;
            break;
        case notaUsuario >= 5 && notaUsuario <= 7:
            alert(notaUsuario + ` Aceptable`);
            sumatoria = sumatoria + notaUsuario;
            break;
        case notaUsuario >= 8 && notaUsuario <= 9:
            alert(notaUsuario + ` Bueno`)
            sumatoria = sumatoria + notaUsuario;
            break;
        case notaUsuario === 10:
            alert(notaUsuario + ` Excelente`);
            sumatoria = sumatoria + notaUsuario;
            break;
        default:
            alert(notaUsuario + ` Ingresaste otro valor`)
            break;
    }
}
    
 let Promedio = sumatoria / NUMERO_NOTAS;
    
console.log(sumatoria);
alert("Su promerio es = " + Promedio);
