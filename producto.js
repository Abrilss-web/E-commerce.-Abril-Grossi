class Producto {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let prod = new Producto("Mustang", "muy caro", 1, 100000000, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg")

const card1 =
    CardsArray.push(`
        <div class="card"> 
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img" alt="Producto ${i}"></img>
        <div class="card-body">
            <h5 class="card-title">Car $(i)</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt elementum aliquam. Sed a justo dui. Nunc vulputate luctus cursus. Nulla facilisi. Ut vitae mollis augue.</p>
            <p class="card-price">$11.000.000</p>
            <button type="button" class="btn-outline">But Now</button>
        </div>
    </div> `);
    document.querySelector(".Producto").innerHTML = card1