// Repaso de Arreglos

let mountains = ['Everest', 'Fuji', 'Nanga Parbat']

console.log(mountains[0])
console.log(mountains[1])
console.log(mountains[2])

console.log(mountains.push('Popocatepetl')) //Anexo al final del arreglo
console.log(mountains)
console.log(mountains.indexOf('Fuji')) //Nos dice en qué posición está el script que queremos, si marca -1 es que el elemento que queremos no está dentro del arreglo


function count(a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        count = count + 1
    }
    return count
}

count(mountains) //En este caso sería una función

//ejemplo de arreglo en dos lenguajes diferentes para saber cual es función y método
// ar = [1, 2, 3, 4, 5]

//ar.length // JS en Este caso se refiere a método
// len(ar) // Python En este caso se refiere a función

console.log("-----------------------")



// Métodos básicos de Arreglos

let frutas = ['Manzana', 'Pera', 'Naranja', 'Platano']

// unshift -> Agregar al inicio del areglo
frutas.unshift('Durazno')
console.log(frutas)

// shift -> Eliminar al inicio
frutas.shift()
console.log(frutas)

// push -> Agregar al final
frutas.push('Uva')
console.log(frutas)

// pop -> Eliminar al final
frutas.pop()
console.log(frutas)

// length (No es un metodo es una propiedad) -> Devuelve el tamaño del arreglo
console.log(frutas.length)

console.log("-----------------------")



// Metodos avanzados de Arreglos


// find
//Encuentra el primer elemento que coincida con la condición que establecemos, solo regresa verdadero o falso, por eso cuando es true regresa el primer elemento encontrado

const numeros1 = [1, 5, 10, 15]
const encontrado = numeros1.find(elemento => elemento > 9)
console.log(encontrado)

// map 
//Crea un nuevo arreglo co los resultados de aplicar una fución a cada elemento del arreglo original, en pocas palabras vuelve a reescribirl en el mismo arreglo como si fuera un for
//NO MODIFICA EL ARREGLO

const numeros2 = [1, 2, 3, 4]
const dobles = numeros2.map(elemento => elemento * 2)
console.log(dobles)

//ejemplo de cómo funciona map pero con el for
function mapear(arreglo, funcion) {
    let nuevo_arreglo = []
    for (let i = 0; i < arreglo.length; i++) {
        nuevo_arreglo.push(funcion(arreglo[i]))
    }
    return nuevo_arreglo
}

let result = mapear(numeros2, elemento => elemento * 2)
console.log(result)

// filter
//Es como el find pero te regresa todos los resultados, no solo el primero que encuentra

const numeros3 = [1, 2, 3, 4, 5]
const pares = numeros3.filter(elemento => elemento % 2 == 0)
console.log(pares)

// forEach
//Imprime todo

const nombres = ['Mackaber', 'Luis', 'Ana', 'Pedro']
nombres.forEach(elemento => console.log(`Hola ${elemento}!`))//string litery


// sort -> Este metodo MODIFICA el arreglo
const numeros4 = [1, 55, 11, 2, 33, 6, 88, 22]
numeros4.sort() // Ordena de forma alfabetica
console.log(numeros4)

numeros4.sort((a, b) => a - b) // Ordena de forma numerica
console.log(numeros4)

// Math.random()
numeros4.sort((a,b) => Math.random() - 0.5)
console.log(numeros4)