const baseDeDatosStored = localStorage.getItem('baseDeDatos');
const baseDeDatos = baseDeDatosStored ? JSON.parse(baseDeDatosStored) : [

    { id: 1, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Azul', tamaño: 'M', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/azul/camisamujerazul.png'},
    { id: 2, tipo: 'camisa', nombre: 'Camisa Hombre ', categoria: 'ropahombre', color: 'Azul', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/azul/camisahombrelargazul.png'},
    { id: 3, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Rojo', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/rojo/camisamujerojo2.png' },
    { id: 4, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'verde', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/verde/camisetahombreverde1.png'},
    { id: 5, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Negro', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/negro/camisamujernegra1.png'},
    { id: 6, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Amarillo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/amarillo/camisaamarillla1.png'},
    { id: 7, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Rojo', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/negro/pantalonhombrenegro1.png'},
    { id: 8, tipo: 'camisa',  nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Rojo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/rojo/camisarojo2.png'},
    { id: 9, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Rojo', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/rojo/camisamujerrojo3.png' },
    { id: 10, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Morado', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/morado/panthombremorado1.png'},
    { id: 11, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Amarillo', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/amarillo/camisamujeramarilla2.png' },
    { id: 12, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropamujer', color: 'Verde', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/verde/pantalonmujerverde1.png'},
    { id: 13, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Amarillo', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/amarillo/pantalonamarillomujer1.png'},
    { id: 14, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Amarillo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/amarillo/camisetamujer3.png'},
    { id: 15, tipo: 'Camiseta', nombre: 'Camiseta Mujer ', categoria: 'ropahombre', color: 'Negro', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/negro/camisetahombrenegro1.png'},
    { id: 16, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Rojo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/rojo/camisetahombrerojo1.png'},
    { id: 17, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Negra', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/negro/cmisanegramujer2.png' },
    { id: 18, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Amarillo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/amarillo/camisetahombreamarilla1.png'},
    { id: 19, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Azul', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/azul/camisetahombreazul1.png' },
    { id: 20, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Verde', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/verde/camisamujerverde1.png'},
    { id: 21, tipo: 'camisa', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Blanco', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/blanco/camisetablancohombre1.png' },
    { id: 22, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Rojo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/rojo/pantalonrojomujer1.png'},
    { id: 23, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Verde', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/verde/pantalonverdemujer2.png' },
    { id: 24, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Azul', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/azul/pantalonhombreazul1.png'},
    { id: 25, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Amarillo', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/amarillo/pantalonhombreamarillo1.png' },
    { id: 26, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Verde', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/verde/pantalonhombreverde1.png'},
    { id: 27, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Blanco', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/blanco/pantalonmujerblanco1.png' },
    { id: 28, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Verde', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/verde/pantalonverdehombre2.png'},
    { id: 29, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Blanco', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/blanco/camisalargablancamujer2.png' },
    { id: 30, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Azul', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/azul/pantalonhombreazul2.png'},
    { id: 31, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Azul', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/azul/pantalonmujerazul1.png' },
    { id: 32, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Azul', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/azul/pantalonhombreazul3.png'},
    { id: 33, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Negro', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/negro/pantalonmujernegro1.png' },
    { id: 34, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropamujer', color: 'Cafe', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/cafe/pantalonmujercafe1.png'},
    { id: 35, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropahombre', color: 'Cafe', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/cafe/pantalonhombrecafe1.png' },
    { id: 36, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Naranja', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/naranja/pantalonaranjahombre1.png'},
    { id: 37, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Naranja', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/naranja/pantalonaranjamujer1.png' },
    { id: 38, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Gris', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/gris/pantalonhombregris1.png'},
    { id: 39, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Gris', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/gris/pantalongrismujer1.png' },
    { id: 40, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Naranja', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/naranja/camisetahombrenaranja1.png'},
    { id: 41, tipo: 'camisa', nombre: 'Camisa Mujer ', categoria: 'ropamujer', color: 'Naranja', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/naranja/camisanaranjamujer1.png' },
    { id: 42, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Verde', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/verde/camisetahombreverde2.png'},
    { id: 43, tipo: 'Camiseta', nombre: 'Camiseta Mujer ', categoria: 'ropamujer', color: 'Morado', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/morado/cmisetamujermorado1.png' },
    { id: 44, tipo: 'camisa', nombre: 'Camisa Hombre ', categoria: 'ropahombre', color: 'Morado', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/morado/camisalargahombremorado1.png'},
    { id: 45, tipo: 'Camiseta', nombre: 'Camiseta Mujer ', categoria: 'ropamujer', color: 'Negro', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/negro/cmisetamujernegro4.png' },
    { id: 46, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Negro', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/negro/camisetahombrenegro2.png'},
    { id: 47, tipo: 'Camiseta', nombre: 'Vestido Mujer ', categoria: 'ropamujer', color: 'Cafe', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/camisas/cafe/camisetamujercafe1.png' },
    { id: 48, tipo: 'Camiseta', nombre: 'Camiseta Hombre ', categoria: 'ropahombre', color: 'Morado', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/camisas/morado/camisetahombremorado2.png'},
    { id: 49, tipo: 'Pantalon', nombre: 'Pantalon Mujer ', categoria: 'ropamujer', color: 'Azul', tamaño: 'S', tipoTela: 'Seda', precio: 39.99, img: 'img/pantalones/azul/pantalonazulmujer2.png' },
    { id: 50, tipo: 'Pantalon', nombre: 'Pantalon Hombre ', categoria: 'ropahombre', color: 'Rojo', tamaño: 'M', tipoTela: 'Algodón', precio: 19.99, img: 'img/pantalones/rojo/pantalonhombrerojo1.png'},
];
const cantidadElementos = baseDeDatos.length;

for (let i = 0; i < cantidadElementos; i++) {
  const productoActual = baseDeDatos[i];
  console.log(productoActual);
}
const elementosPorPagina = 10;
const contenedorProductos = document.getElementById('productos__contenedor');
const subindice = document.getElementById('subindice');
let paginaActual = 1;

function mostrarProductos(productos) {
    const tabla = document.createElement('table');
    const cuerpo = document.createElement('tbody');
    const encabezado = document.createElement('thead');
    tabla.className = 'productos-table';
    encabezado.innerHTML = `
        <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Color</th>
            <th>Tamaño</th>
            <th>Imagen</th>
            <th>Acciones</th>
        </tr>
    `;
    tabla.appendChild(encabezado);

    productos.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.color}</td>
            <td>${producto.tamaño}</td>
            <td><img src="${producto.img}" alt="${producto.nombre}" style="width: 90px; height: 120px;"></td>
            <td>
                <button onclick="mostrarDetalle(${producto.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detalleModal">Ver más...</button>
            </td>
        `;
        cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);

    contenedorProductos.innerHTML = '';
    contenedorProductos.appendChild(tabla);

    mostrarSubindice();
}
document.getElementById('mensaje-guardado').style.display = 'block';

setTimeout(function() {
  document.getElementById('mensaje-guardado').style.display = 'none';
}, 3000);

function mostrarDetalle(id) {
    const modalBody = document.getElementById('detalleModalBody');
    modalBody.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Cargando...</p>';
  
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    delay(1500)
      .then(() => {
        const productoActual = baseDeDatos.find(producto => producto.id === id);
  
        const modalBody = document.getElementById('detalleModalBody');
        modalBody.innerHTML = `
            <p>id: ${productoActual.id}</p>
            <p>Tipo: ${productoActual.tipo}</p>
            <p>Nombre: ${productoActual.nombre}</p>
            <p>Categoría: ${productoActual.categoria}</p>
            <p>Color: ${productoActual.color}</p>
            <p>Tamaño: ${productoActual.tamaño}</p>
            <p>Tipo de Tela: ${productoActual.tipoTela}</p>
            <p>Precio: ${productoActual.precio}</p>
            <img src="${productoActual.img}" alt="${productoActual.nombre}" style="width: 200px; height: 300px;">
            
            <button onclick="mostrarFormulario(${productoActual.id})">Actualizar</button>
  
            <div id="formulario-actualizar" style="display: none;">
  
            <label for="id">id:</label>
            <input type="text" id="id" name="id" value="${productoActual.id}"><br><br>
            <label for="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" value="${productoActual.tipo}"><br><br>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value="${productoActual.nombre}"><br><br>
            <label for="categoria">Categoría:</label>
            <input type="text" id="categoria" name="categoria" value="${productoActual.categoria}"><br><br>
            <label for="color">Color:</label>
            <input type="text" id="color" name="color" value="${productoActual.color}"><br><br>
            <label for="tamaño">Tamaño:</label>
            <input type="text" id="tamaño" name="tamaño" value="${productoActual.tamaño}"><br><br>
            <label for="tipoTela">Tipo de Tela:</label>
            <input type="text" id="tipoTela" name="tipoTela" value="${productoActual.tipoTela}"><br><br>
            <label for="precio">Precio:</label>
            <input type="text" id="precio" name="precio" value="${productoActual.precio}"><br><br>
            
            <button onclick="guardarCambios(${productoActual.id})">Guardar cambios</button>
            </div>
        `;
      })
      .catch(error => {
        console.error('Error al cargar los detalles:', error);
      });
  
    document.getElementById('detalleModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
  }
  
function mostrarFormulario(id) {
    
    const formularioActualizar = document.getElementById('formulario-actualizar');
    formularioActualizar.style.display = 'block';
    const producto = baseDeDatos.find(p => p.id === id);
    
    document.getElementById('id').value = producto.id;
    document.getElementById('tipo').value = producto.tipo;
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('categoria').value = producto.categoria;
    document.getElementById('color').value = producto.color;
    document.getElementById('tamaño').value = producto.tamaño;
    document.getElementById('tipoTela').value = producto.tipoTela;
    document.getElementById('precio').value = producto.precio;
}
function cerrarModal() {
    document.getElementById('detalleModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}
function guardarCambios() {
    const id = document.getElementById('id').value;
    const tipo = document.getElementById('tipo').value;
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const color = document.getElementById('color').value;
    const tamaño = document.getElementById('tamaño').value;
    const tipoTela = document.getElementById('tipoTela').value;
    const precio = document.getElementById('precio').value;
   
    document.getElementById('detalleModalBody').innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Guardando...</p>';
    
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const guardarCambiosPromise = delay(2000)
        .then(() => {
            const producto = baseDeDatos.find(p => p.id == id);
            if (producto) {
                producto.nombre = nombre;
                producto.tipo = tipo;
                producto.categoria = categoria;
                producto.color = color;
                producto.tamaño = tamaño;
                producto.tipoTela = tipoTela;
                producto.precio = precio;
            }
            localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));
        });

    guardarCambiosPromise.then(() => {
 
        mostrarProductos(productosFiltrados.slice((paginaActual - 1) * elementosPorPagina, paginaActual * elementosPorPagina));
        cerrarModal();
    });
}
function mostrarTodo() {
    productosFiltrados = baseDeDatos;
    paginaActual = 1;
    mostrarProductos(productosFiltrados.slice(0, elementosPorPagina));
    mostrarSubindice();
}
function filtrarPorCategoria(categoria) {
    paginaActual = 1;
    productosFiltrados = baseDeDatos.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados.slice(0, elementosPorPagina));
    mostrarSubindice();
}
function mostrarSubindice() {
    const totalPaginas = Math.ceil(productosFiltrados.length / elementosPorPagina);
    if (paginaActual > totalPaginas) {
        paginaActual = totalPaginas;
    }
    subindice.innerText = ` ${paginaActual} de ${totalPaginas}`;
    const botonAnterior = document.querySelector('.navegacion__anterior');
    const botonSiguiente = document.querySelector('.navegacion__siguiente');
    botonAnterior.disabled = paginaActual === 1;
    botonSiguiente.disabled = paginaActual === totalPaginas;
}
function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(productosFiltrados.length / elementosPorPagina);
    if (direccion === 'anterior' && paginaActual > 1) {
      paginaActual--;
    } else if (direccion === 'siguiente' && paginaActual < totalPaginas) {
      paginaActual++;
    }
    mostrarProductos(productosFiltrados.slice((paginaActual - 1) * elementosPorPagina, paginaActual * elementosPorPagina));
    mostrarSubindice();
}
mostrarTodo();