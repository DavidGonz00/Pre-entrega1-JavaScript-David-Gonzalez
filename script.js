//PROFESORES EMPEZE EL ORDEN ASI ME PUEDEN CORREGIR ESTA BIEN ESO O NO TRATA DE COMENTAR 
//EN TODO LO QUE PUDE ASI SABER QUE HACIA




// Autos y sus precios
let producto1 = "Fiat Cronos"
let precioProducto1 = 23500000

let producto2 = "Hyundai Elantra"
let precioProducto2 = 18500000

let producto3 = "Toyota Corolla"
let precioProducto3 = 16600000

let producto4 = "Ford Fiesta"
let precioProducto4 = 17560000

let producto5 = "Chevrolet Aveo"
let precioProducto5 = 12000000

let producto6 = "Peugeot 3008"
let precioProducto6 = 35300000

// solicitar un número válido al usuario
function solicitarNumero(mensaje) {
  let numero
  do {
    numero = parseInt(prompt(mensaje))
  } while (isNaN(numero) || numero <= 0)
  return numero
}

//  validar un correo electrónico
function validarCorreo(correo) {
  // validación de correo electrónico
  return /\S+@\S+\.\S+/.test(correo)
}

//  un texto válido al usuario
function solicitarTexto(mensaje) {
  let texto
  do {
    texto = prompt(mensaje)
  } while (!texto)
  return texto
}

// menú de autos y obtener la elección del usuario
function mostrarMenu() {
  let menu = `Menu:
1. ${producto1}: $${precioProducto1}
2. ${producto2}: $${precioProducto2}
3. ${producto3}: $${precioProducto3}
4. ${producto4}: $${precioProducto4}
5. ${producto5}: $${precioProducto5}
6. ${producto6}: $${precioProducto6}`

  let eleccion = solicitarNumero(
    `${menu}\nPor favor, elija un producto (1-6):`
  )

  if (eleccion < 1 || eleccion > 6) {
    alert("Opción no válida. Por favor, elija un número del 1 al 6.")
    return mostrarMenu() // no es válida, se vuelve a mostrar el menú
  }

  return eleccion;
}

// solicitar la edad del usuario
let edad = solicitarNumero("Por favor, ingrese su edad para ingresar a este sitio web:")

// si el usuario es mayor de 18 años
if (edad < 18) {
  alert("Lo sentimos, debes tener al menos 18 años para ingresar a este sitio.")
} else {
  let nombre
  while (!nombre) {
    nombre = solicitarTexto("Por favor, ingrese su nombre:")
  }

  let correo;
  while (!correo || !validarCorreo(correo)) {
    correo = solicitarTexto("Por favor, ingrese su correo electrónico:")
    if (!validarCorreo(correo)) {
      alert(
        "El correo electrónico ingresado no es válido. Por favor, ingréselo nuevamente."
      )
    }
  }

  alert(
    `Bienvenido a la tienda mejor dedicada ventas de autos con poco kilometraje, ${nombre}!`
  );

  // total de la compra y producto seleccionado
  let totalCompra = 0
  let productosSeleccionados = []

  // Datos al usuario que elija el auto hasta que decida terminar
  while (true) {
    let eleccion = mostrarMenu()
    let productoSeleccionado

    switch (eleccion) {
      case 1:
        totalCompra += precioProducto1
        productoSeleccionado = producto1
        break
      case 2:
        totalCompra += precioProducto2
        productoSeleccionado = producto2
        break
      case 3:
        totalCompra += precioProducto3
        productoSeleccionado = producto3
        break
      case 4:
        totalCompra += precioProducto4
        productoSeleccionado = producto4
        break
      case 5:
        totalCompra += precioProducto5
        productoSeleccionado = producto5
        break
      case 6:
        totalCompra += precioProducto6
        productoSeleccionado = producto6
        break
    }

    productosSeleccionados.push(productoSeleccionado)

    let continuar = prompt("¿Desea agregar otro producto? (S/N)").toUpperCase()
    if (continuar === "N") {
      break
    }
  }

  //  monto del IVA
  const IVA = 0.12;
  let montoIVA = totalCompra * IVA

  // sumar el monto del IVA al total de la compra
  totalCompra += montoIVA

  alert(
    `El precio final de la compra (incluido el IVA del 12%) es: $${totalCompra.toFixed(2)}`)

  let cuotas = solicitarNumero("Ingrese la cantidad de cuotas deseadas:")

  // caculador del monto de cada cuota
  let montoCuota = totalCompra / cuotas

  // resumen de todos los datos del cliente
  alert(`Detalle del plan de cuotas:
- Datos de usuario:
  - Nombre: ${nombre}
  - Correo electrónico: ${correo}
- Cantidad total: $${totalCompra.toFixed(2)}
- Productos seleccionados: ${productosSeleccionados.join(", ")}
- Cantidad de cuotas: ${cuotas}
- Monto de cada cuota: $${montoCuota.toFixed(2)}
¡Gracias por su compra!`)
}
