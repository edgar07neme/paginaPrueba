let encabezadoInput =    document.querySelector('#encabezado__input');


encabezadoInput.addEventListener('click', abrirEncabezado); 

function abrirEncabezado(){    
    encabezadoInput.style.background = 'rgba(0,0,0,.5)';
    encabezadoInput.style.transition = '.5s'
}

window.addEventListener('click', function(e){
    if(e.target !== encabezadoInput){
        encabezadoInput.style.background = 'rgba(0,0,0,.2)';
        encabezadoInput.style.transition = '.5s';
        encabezadoInput.value = '';
    }
})



const menuHamburguesa = document.querySelector('#menu__hamburguesa');
const menuClose = document.querySelector('#menu__close');
const menu = document.querySelector('#menu-h');
const encabezadoCortina = document.querySelector('#encabezado__cortina');
const anuncioIcono = document.querySelector('#anuncio__icono');

menuHamburguesa.addEventListener('click', abrir);
menu.addEventListener('click', abrir1);
encabezadoCortina.addEventListener('click', cerrar);
anuncioIcono.addEventListener('click', rotar);

function abrir (){
    document.getElementById('encabezado__enlaces').classList.toggle('active');
    document.getElementById('encabezado__cortina').classList.toggle('active');
    menuHamburguesa.style.display = 'none';
    menuClose.style.display = 'flex';

}
function abrir1 (){
    document.getElementById('encabezado__enlaces').classList.toggle('active');
    document.getElementById('encabezado__cortina').classList.toggle('active');
    menuHamburguesa.style.display = 'none';
    menuClose.style.display = 'flex';

}

function cerrar (){
    document.getElementById('encabezado__enlaces').classList.toggle('active');
    document.getElementById('encabezado__cortina').classList.toggle('active');
    menuHamburguesa.style.display = 'flex';
    menuClose.style.display = 'none';

}

function rotar (){
    document.getElementById('fa-angle').classList.toggle('active');
    document.getElementById('contenido__animes').classList.toggle('active');

}




const encabezadoLink =document.querySelector('#encabezado__historial-link');
let faSearch = document.querySelector('#fa-search');
const encabezadoHistoral = document.querySelector('#encabezado__historal');
const headerCortina = document.querySelector('#header__cortina');

const productos = [
    {nombre: 'One Piece', img: 'src="img/encabezado/One Piece.jpg"'},
    {nombre: 'Detective Conan', img: 'src="img/encabezado/detective conan.jpg"'},
    {nombre: 'boruto naruto next genera...', img: 'src="img/encabezado/boruto naruto next generations.jpg"'},
    {nombre: 'Ore wo Suki nano wa Omae ...', img: 'src="img/encabezado/Ore wo Suki nano wa Omae dake ka yo Oretachi no Game Set.jpg"'},
    {nombre: 'Kanojo, Okarishimasu', img: 'src="img/encabezado/Kanojo, Okarishimasu.jpg"'},
    {nombre: 'Peter Grill to Kenja no Jikan', img: 'src="img/encabezado/Peter Grill to Kenja no Jikan.jpg"'},
]


const filtrar = () => {
    document.getElementById('encabezado__historal').classList.toggle('active');
    document.getElementById('header__cortina').classList.toggle('active');
    encabezadoHistoral.innerHTML = '';
    const texto = encabezadoInput.value.toLowerCase();

    for(let producto of productos){

        let nombre = producto.nombre.toLowerCase();
        

        if(nombre.indexOf(texto) !== -1){
            encabezadoHistoral.innerHTML += `<div class="encabezado__historial-cont" > 
                                            <div class="encabezado__img">
                                                <a href="#" class="encabezado__img-link">
                                                    <img ${producto.img} alt="">
                                                </a>
                                            </div> 
                                            <div class="encabezado__historial-animes">
                                                <a href="#" class="encabezado__historial-link" id="encabezado__historial-link"> 
                                                    <p>${producto.nombre}</p> 
                                                </a>                                 
                                                <p class="encabezado__historial-nombre">Anime</p>
                                            </div> 
                                        </div>`
        }
    }
    if(encabezadoHistoral.innerHTML === ''){

        encabezadoHistoral.innerHTML += ` 
                                        <p>no hay resultados</p> 
                                        `
    }

    
}
faSearch.addEventListener('click', filtrar);

function cerrar1 () {
    document.getElementById('encabezado__historal').classList.toggle('active');
    document.getElementById('header__cortina').classList.toggle('active');
}

headerCortina.addEventListener('click', cerrar1);



