const listaCursos = document.querySelector('#lista-cursos');

const carrito = [];

function getCurso(e){
    e.preventDefault();
    if(e.target.Classlist.contains('agregar-carrito')){
        const item = {}
        item.id = e.target.getAttribute('data-id');
        const padre = e.target.parentElement;
        item.name = padre.querySelector('h4').innerText;
        item.price = padre.querySelector('p span').innerText;
        item.image = padre
                        .parentElement
                        .querySelector('img').src;
        item.cantiny = 1;
        // verificar si el objeto existe en el carrito
        if (carrito.some(item => item.id === itemCarrito.id)){
            carrito = carrito.map(itemCarrito => {
                if(itemCarrito.id === item.id){
                    itemCarrito.cantiny++;
                    return itemCarrito;
                } else {
                    return itemCarrito;
                }
            });
        } else {
            carrito.push(item);
        }
        console.log(carrito);

    }
}

listaCursos.addEventListener('click', getCurso);
