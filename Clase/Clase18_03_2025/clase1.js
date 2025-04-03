// Repaso var, let, const

// For con let
console.log("Con let...")
for(let i = 0; i<10; i++) { //no se puede establecer una variable dos veces con let, aparece error
    //let i = i + 1 
    console.log(i)
}

// For con var 
console.log("Con var...")
for(var i = 0; i<10; i++) { //con var no tenermos el problema anterior
    var i = i + 1
    console.log(i)
}


//String templates / literals

let mackaber = {
    nombre: "Mackaber",
    edad: 33,
    ciudad: "SLP"
}

let ana = {
    nombre: "Ana",
    edad: 28,
    ciudad: "CDMX"
}

let imprimir_persona = (persona) => {
    //concatenación de strings, no se tan legible y fácil de manejar
    //console.log("El nombre de la persona es " + persona.nombre + ", su edad es " + persona.edad + " y vive en " + persona.ciudad)

    //Este método es mas legible y practico porque podemos hacer interpolación de strings, es decir, lo imprime con todo y sus espacios correspondientes
    console.log(`
        El nombre de la persona es ${persona.nombre}, 
        su edad es ${persona.edad} 
        y vive en ${persona.ciudad}`)
}

imprimir_persona(mackaber)
imprimir_persona(ana)

//sirve mucho para html, cuando queremos anexar algo
/*
`<div>
    <h1>${mackaber.nombre}</h1>
</div>
`
*/

// Symbol
//cada symbol es independiente, es para generar más seguridad por ejemplo al establecer algo en el perfil 

let nombre = Symbol("Nombre")

let roles = {
    admin: Symbol("admin"),
    user: Symbol("user"),
    superadmin: Symbol("superadmin")
}

let user = {
    role: roles.admin
}

console.log(user.role === roles.admin)

//otro ejemplo con symbol, el usuario solo puede seleccionar una de las opciones mostradas
/*
let opciones_validas = [
    Symbol("casado"),
    Symbol("soltero"),
    Symbol("divorciado"),
    Symbol("otro")
]

if(opcion_seleccionada == opciones_validas[0]) {// casado
    // ...
} else if (opcion_seleccionada == opciones_validas[1]) {// soltero

}
*/

// Destructuración de objetos
//aquí no es necesario escribir persona.nombre como cuando entramos a algo en un objeto normalmente

let imprimir_persona_destructurada = ({nombre, edad, ciudad}) => {
    console.log(`
        El nombre de la persona es ${nombre}, 
        su edad es ${edad} 
        y vive en ${ciudad}`)
}

//let { nombre, edad, ciudad } = mackaber

imprimir_persona_destructurada(mackaber)
imprimir_persona_destructurada(ana)

// Destructuración de arreglos

let lista_de_alumnos = [
    "Mackaber",
    "Ana",
    "Luis",
    "Luisa",
    "Juan",
    "Pedro"
]

//esto es cuando recibe un arreglo en vez de un objeto
let primeros_tres_alumnos = ([alumno1, alumno2, alumno3]) => {
    console.log(alumno1)
    console.log(alumno2)
    console.log(alumno3)
}

//let [alumno1, alumno2, alumno3] = lista_de_alumnos

primeros_tres_alumnos(lista_de_alumnos)


// Ejemplo async/await
//Aquí se usó promesas, pero cuando se llegan a usar muchos empieza a ser un problema
fetch("https://api.exchangerate-api.com/v4/latest/USD?symbols=MXN").then(response => {
    return response.json()
}).then(data => {
    console.log(data.rates.MXN)
}).then(() => {
    
})

let obtener_tipo_cambio = async () => {
    let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD?symbols=MXN")
    let data = await response.json()
    console.log(data.rates.MXN)
}

obtener_tipo_cambio()