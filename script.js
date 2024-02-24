//PROFESORES EMPEZE EL ORDEN ASI ME PUEDEN CORREGIR ESTA BIEN ESO O NO TRATA DE COMENTAR
//EN TODO LO QUE PUDE ASI SABER QUE HACIA

//My Array
let productos = [
  { id: 1, marca: "Fiat", nombre: "Cronos", Stock: 4, precio: 23500, año:2023 },
  { id: 2, marca: "Fiat", nombre: "Ranger ", Stock: 3, precio: 18500, año:2021 },
  { id: 3, marca: "Fiat", nombre: "Fiesta 5P", Stock: 3, precio: 20040, año:2005 },
  { id: 4, marca: "Nissan", nombre: "Frontier", Stock: 4, precio: 10500, año:2010  },
  { id: 5, marca: "Nissan", nombre: "Sentra", Stock: 5, precio: 18500, año:2010  },
  { id: 6, marca: "Toyota", nombre: "Corolla", Stock: 3, precio: 16600, año:2022  },
  { id: 7, marca: "Toyota", nombre: "hilux", Stock: 5, precio: 17600, año:2015},
  {id: 8,marca: "Toyota",nombre: "Yaris-hatchback",Stock: 6,precio: 16650, año:2021 },
  { id: 9, marca: "Ford", nombre: "Fiesta", Stock: 3, precio: 15560, año:2020  },
  { id: 10, marca: "Ford", nombre: "Maverick", Stock: 1, precio: 20560, año:20021  },
  { id: 11, marca: "Ford", nombre: "Focus", Stock: 2, precio: 10560, año:2010  },
  { id: 12, marca: "Chevrolet", nombre: "Aveo G3", Stock: 3, precio: 12000, año:2022  },
  { id: 13, marca: "Chevrolet", nombre: "Cruze", Stock: 2, precio: 16200, año:2021  },
  { id: 14, marca: "Peugeot", nombre: "3008", Stock: 2, precio: 55300, año:2022 },
  { id: 15, marca: "Peugeot", nombre: "208", Stock: 4, precio: 25300, año:2023  },
  { id: 16, marca: "Peugeot", nombre: "2008", Stock: 3, precio: 30300, año:2021 },
  { id: 17, marca: "Renault", nombre: "Sandero", Stock: 1, precio: 35300, año:2010 },
  { id: 18, marca: "Renault", nombre: "Logan", Stock: 1, precio: 40300, año:2020 },
  { id: 19, marca: "Volkswagen", nombre: "Amarok", Stock: 2, precio: 10300, año:2019  },
  { id: 20, marca: "Volkswagen", nombre: "Nivus", Stock: 3, precio: 15300, año:2018  },
];

//Edad del usuario que ingresa debe ser mayor de 18 y validar
function solicitarEdad() {
  let edad
  do {
    edad = parseInt(prompt("Por favor, ingrese su edad debe cumplir con ser mayor de edad para :"))
    if (isNaN(edad) || edad <= 0) {
      alert(
        "La edad ingresada no es válida. Por favor, ingrese un número válido mayor que 0."
      )
    } else if (edad < 18) {
      alert("Debe ser igual o mayor de 18 años para continuar.")
    }
  } while (isNaN(edad) || edad < 18)
  return edad
}

// Solicitar y validar el nombre del usuario
function solicitarNombre() {
  let nombre
  do {
    nombre = prompt("Por favor, ingrese su nombre:")
    if (!nombre) {
      alert("El nombre ingresado no es válido. Por favor, ingrese un nombre.")
    }
  } while (!nombre)
  return nombre
}

// Solicitar y validar el apellido del usuario
function solicitarApellido() {
  let apellido
  do {
    apellido = prompt("Por favor, ingrese su apellido:");
    if (!apellido) {
      alert(
        "El apellido ingresado no es válido. Por favor, ingrese un apellido."
      );
    }
  } while (!apellido)
  return apellido
}

// validar el correo electrónico
function validarCorreo(correo) {
  return /\S+@\S+\.\S+/.test(correo)
}

// solicitar y validar el correo electrónico del usuario
function solicitarCorreo() {
  let correo;
  do {
    correo = prompt("Por favor, ingrese su correo electrónico:");
    if (!validarCorreo(correo)) {
      alert(
        "El correo electrónico ingresado no es válido. Por favor, ingréselo nuevamente."
      );
    }
  } while (!validarCorreo(correo))
  return correo
}

//  bienvenida al usuario
function darBienvenida(nombre, apellido) {
  alert(
    "Bienvenido, " +
    nombre +
    " " +
    apellido +
    "! Gracias por proporcionar su información a la mejor pagina de automovil."
  )
}

// Solicitar y validar la edad, nombre, apellido y correo electrónico del usuario
let edadUsuario = solicitarEdad()
let nombreUsuario = solicitarNombre()
let apellidoUsuario = solicitarApellido()
let correoUsuario = solicitarCorreo()

darBienvenida(nombreUsuario, apellidoUsuario)




// marcas únicas de los productos
function obtenerMarcasUnicas(productos) {
  let marcasUnicas = new Set()
  productos.forEach((producto) => {
    marcasUnicas.add(producto.marca)
  });
  return Array.from(marcasUnicas)
}

// marcas únicas
let marcasDisponibles = obtenerMarcasUnicas(productos)

// marcas disponibles y solicitar al usuario que elija una marca
let marcasMensaje = "Marcas Disponible en nuestra pagina web\n";
marcasDisponibles.forEach((marca, index) => {
  marcasMensaje += index + 1 + ". " + marca + "\n"
})
// normalizar el formato de la marca
function normalizarMarca(marca) {
  return marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase()
}

// Solicitar al usuario que elija una marca
let marcaElegida = prompt(marcasMensaje + "\nPor favor, elija una marca escribiendo el nombre:");

// Normalizar la marca ingresada por el usuario
marcaElegida = normalizarMarca(marcaElegida)

// Verificar si la marca elegida está en la lista de marcas disponibles
if (marcasDisponibles.includes(marcaElegida)) {
} else {
  alert("La marca ingresada no es válida.")
}

// seleccionado una marca
if (marcaElegida) {
  // Construir el mensaje con los vehículos de la marca elegida
  let mensaje =
    "Vehículos de la marca " +
    marcaElegida +
    ":\nID - Nombre\n"
  productos
    .filter((producto) => producto.marca === marcaElegida)
    .forEach((producto) => {
      mensaje += producto.id + " - " + " " + producto.nombre + "\n"
    })
  alert(mensaje)

  // Solicitar al usuario que ingrese el ID del automóvil que desea buscar
  let idBusqueda = parseInt(prompt("Ingrese el ID del automóvil que desea ver informacion:"))
  let productoSeleccionado = productos.find(producto => producto.id === idBusqueda && producto.marca === marcaElegida)
  // Verificar si se encontró un producto con el ID proporcionado dentro de la marca seleccionada
  if (productoSeleccionado) {
    alert("Información del producto con ID " + idBusqueda + " de la marca " + marcaElegida + ":\n" +
          "ID: " + productoSeleccionado.id + "\n" +
          "Marca: " + productoSeleccionado.marca + "\n" +
          "Nombre: " + productoSeleccionado.nombre + "\n" +
          "Stock: " + productoSeleccionado.Stock + "\n" +
          "Precio: " + productoSeleccionado.precio + "\n" +
          "Año: " + productoSeleccionado.año)
} else {
    alert("No se encontró ningún producto con el ID " + idBusqueda + " dentro de la marca " + marcaElegida + ".")
}
} else {
  alert("No se seleccionó ninguna marca.")
}

let idCompra = parseInt(prompt("Ingrese el ID del automovil que desea comprar:"))
let productoComprado = productos.find(producto => producto.id === idCompra && producto.marca === marcaElegida)
if (productoComprado) {
  let confirmacionCompra = confirm("Desea comprar " + productoComprado.nombre + " por $" + productoComprado.precio + "?")
  if (confirmacionCompra) {
    // Restar uno al stock del producto comprado no se si estara bien esto  si puede dejarme un comentario porfavor
    productoComprado.Stock--
    alert("Has comprado:\n" +
      "- Producto: " + productoComprado.nombre + "\n" +
      "- Nombre: " + nombreUsuario + "\n" +
      "- Apellido: " + apellidoUsuario + "\n" +
      "- Correo: " + correoUsuario + "\n\n" +
      "¡Gracias por tu compra! Milei te lo va enviar a tu casa Viva la libertad carajo!.")

  } else {
    alert("La compra ha sido cancelada.")
  }
} else {
  alert("No se encontro ningun producto con el ID " + idCompra + " dentro de la marca " + marcaElegida + ".")
}

