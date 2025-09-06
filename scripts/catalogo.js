class Categoria {
    constructor(nombreCategoria,rutaImg,marcas,nombreProductoexamp,precioExamp) {
        this.nombreCategoria = nombreCategoria;
        this.rutaImg = rutaImg;
        this.marcas = marcas;
        this.nombreProductoexamp = nombreProductoexamp;
        this.precioExamp = precioExamp;
    }
}

const marcasPcGamers = ["Alienware","MSI","Asus ROG","Acer Predator","Razer","HP Omen",
    "Gigabyte Aorus","Lenovo Legion","Dell G Series","CyberPowerPC","iBUYPOWER","Origin PC",
    "Corsair One","Maingear","Falcon Northwest"];

const marcasTable = ["Hasbro", "Mattel", "Asmodee", "Ravensburger", "Fantasy Flight Games",
    "Days of Wonder", "Z-Man Games", "Rio Grande Games", "CMON Limited", "Stonemaier Games",
    "Blue Orange", "Spin Master", "Catalyst Game Labs", "Plaid Hat Games", "Queen Games"];

const marcasAccesories = ["Gamegenic", "Ultra PRO", "Fantasy Flight Games Accessories",
    "Dragon Shield", "Paladone", "Mayday Games", "Folded Space", "Broken Token", "Arcane Tinmen",
    "Catan Studio", "Geek Gaming", "Ludofact", "Feldherr", "Meeple Source", "ThinkFun"];

const marcasConsoles = ["Nintendo", "Sony", "Microsoft", "Sega", "Atari", "Neo Geo", "TurboGrafx-16",
    "Intellivision", "Commodore", "Ouya", "Pandora", "GamePark", "SNK"];

const marcasSillas = ["Secretlab", "DXRacer", "AKRacing", "Corsair", "Noblechairs", "Vertagear",
    "Respawn", "Cougar", "Anda Seat", "Razer", "Autofull", "GT Omega", "Herman Miller", "E-Win", "Arozzi"];

const marcasMouse = ["Logitech", "Razer", "SteelSeries", "Corsair", "HyperX", "Glorious",
    "ASUS ROG", "Cooler Master", "MSI", "Fnatic Gear", "ROCCAT", "Zowie", "Redragon", "Bloody", "Sharkoon"];

const marcasPad = ["SteelSeries", "Razer", "Corsair", "HyperX", "Logitech", "ASUS ROG", "Glorious",
    "Cooler Master", "MSI", "Fnatic Gear", "ROCCAT", "Redragon", "Zowie", "Thermaltake", "Xtrfy"];


const pcGamer = new Categoria("Computadores Gamers","producto1.png",marcasPcGamers,
    "Computador PC Ryzen 5 4650G / 16GB RAM / 500GB NVMe","$699.999");

const table = new Categoria("Juegos de mesa","table.webp",marcasTable,
    "Juego de mesa","$15.000");

const accesory = new Categoria("Accesorios","accesory.png",marcasAccesories,
    "Accesorio","$5500");

const console = new Categoria("Consolas","console.webp",marcasConsoles,
    "Consola","$499.999");

const silla = new Categoria("Sillas Gamer","chair.webp",marcasSillas,
    "Silla","$99.999");

const mouse = new Categoria("Mouses","mouse.webp",marcasMouse,
    "Mouse","$19.999");

const pad = new Categoria("Mousepads","pad.webp",marcasPad,
    "Mousepad","$15.999");

const polera = new Categoria("Poleras","polera.png",["Level Up Gamer"],
    "Polera","$19.000");

const poleron = new Categoria("Polerones","poleron.png",["Level Up Gamer"],
    "Poleron","$24.000");




const btnPolera = document.getElementById("btn-polera")
const btnPoleron = document.getElementById("btn-poleron")
const btnService = document.getElementById("btn-service")


function cambiarMenuLateral(categoria) {
    const elementNombreCategoria = document.getElementById("category-name");
    const elementDivMarcas = document.getElementById("brands-container");
    elementNombreCategoria.innerHTML = categoria.nombreCategoria ;
        elementDivMarcas.replaceChildren();

        const html =`
            <label>
                <input type="radio" name="brand" value="all" checked >
                Todas
            </label>
            `
        elementDivMarcas.insertAdjacentHTML("beforeend",html);

        categoria.marcas.forEach(marca => {
            const html =`
            <label>
                <input type="radio" name="brand" value="${marca}">
                ${marca}
            </label>
            `
            elementDivMarcas.insertAdjacentHTML("beforeend",html);
        })
}

function cambiarDenotadorCategoriaActual(btn){
    const botoneslegirCategoria = document.querySelectorAll(".btn-category");
    botoneslegirCategoria.forEach(c => { c.classList.remove("current-category")});
    btn.classList.add("current-category");
}

function actualizarCatalogoSegunCategoria(categoria,cantidadProductos) {

    const elementoCatalogo = document.getElementById("product-grid")

    elementoCatalogo.replaceChildren();
        
    for (let i = 0; i < cantidadProductos; i++) {
        const html =`<div class="product">
                <img src="images/${categoria.rutaImg}" alt="${categoria.nombreProductoexamp}" />
                <div class="product-info">
                    <p>${categoria.marcas[0]}</p>
                    <p>${categoria.nombreProductoexamp}</p>
                    <p>${categoria.precioExamp}</p>
                </div>
                <button>Añadir al carro</button>
            </div>`
        elementoCatalogo.insertAdjacentHTML("beforeend",html);
    }
}

function cambiarCategoriaCatalogo(idBtn,categoria,cantidadProductos) {

    const btn = document.getElementById(idBtn);

    btn.addEventListener("click", () => {

        cambiarMenuLateral(categoria);

        cambiarDenotadorCategoriaActual(btn)
        
        actualizarCatalogoSegunCategoria(categoria,cantidadProductos)
    });
};



const cantidadProductos = 16;

document.addEventListener("DOMContentLoaded", () =>  {
    cambiarCategoriaCatalogo("btn-pc",pcGamer,cantidadProductos);
    document.getElementById("btn-pc").click();
})

cambiarCategoriaCatalogo("btn-pc",pcGamer,cantidadProductos);
cambiarCategoriaCatalogo("btn-table",table,cantidadProductos);
cambiarCategoriaCatalogo("btn-accesories",accesory,cantidadProductos);
cambiarCategoriaCatalogo("btn-console",console,cantidadProductos);
cambiarCategoriaCatalogo("btn-chair",silla,cantidadProductos);
cambiarCategoriaCatalogo("btn-mouse",mouse,cantidadProductos);
cambiarCategoriaCatalogo("btn-pad",pad,cantidadProductos);
cambiarCategoriaCatalogo("btn-polera",polera,cantidadProductos);
cambiarCategoriaCatalogo("btn-poleron",poleron,cantidadProductos);



document.getElementById('product-grid').addEventListener('click', function(e) {
    const product = e.target.closest('.product');
    if (product) {
        window.location.href = 'detalleProducto.html';
    }
});