function calcularPrecio() {
    let helado = 30; 
    let topping = document.getElementById("topping").value;  
    let precio = null; 
    let precioFinal = null;
   
    if (topping === "Oreo") {
        precio = 10;
    } else if (topping === "KitKat") {
        precio = 15;
    } else if (topping === "Kinder") {
        precio = 25;
    } else {
        document.getElementById("resultado").textContent = "No tenemos este topping.";
        return;  
    }

   
    precioFinal = helado + precio;

    
    document.getElementById("resultado").textContent = "El helado cuesta $" + precioFinal;
}

