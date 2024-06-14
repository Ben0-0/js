function genprod(product) {
    if(product.image){
        product.image = "data:image/png;base 64" + product.image;
    }
    const markup = `
    <div class="product-container" id="${product.name}">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <p class="sale">${product.sale ? `-${product.sale}%` : ""}</p>
        <p class="tag">${product.tag ? product.tag : ""}</p>

        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <h4 class="product-nprice">${product.currency} ${product.nprice}</h4>
        <p class="product-oprice"><del>${product.oprice ? `${product.currency} ${product.oprice}` : ""}</del></p>
        <div class="product-utility">
            <button class="product-cart"> Add to Cart</button>
            <a href=""></a>
    `
}
