let pformat = new Intl.NumberFormat('de-DE', { style: 'currency', currency:'IDR'}); //để format tiền tệ, vd: pformat.format(2500) sẽ output ra Rp 2.500,00 (I think so?)

function genprod(product) {
    if(product.image){
        product.image = "data:image/png;base64," + product.image; //đổi sang format đúng để display ảnh sử dụng base 64, lưu ý là product.image kiểu dữ liệu ban đầu là base 64, dòng code này chỉ khiến cho nó trở thành đúng định dạng hiển thị trong js
    }
    if(product.price){
        product.price = pformat.format(product.price); //đổi cho đúng format display tiền tệ trên Furniro
    }
    const markup = `
    <div class="product-container" id="${product.name}"> 
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <p class="product-discount">${product.discount ? `-${product.discount}%` : ""}</p>
        <p class="product-tag">${product.tag ? product.tag : ""}</p>

        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.short_desc}</p>
        <h4 class="product-price">${product.price}</h4>
        <p class="product-old_price"><del>${product.old_price ? `${product.unit_price} ${product.old_price}` : ""}</del></p>
        <div class="product-utility">
            <button class="product-cart">Add to Cart</button>
            <a href=""><span class="material-symbols-outlined">share</span>Share</a>
            <a href=""><span class="material-symbols-outlined">sync_alt</span>Compare</a>
            <a href=""><span class="material-symbols-outlined">favorite</span>Like</a>
        </div>
    </div>
`;
    const section_02 = document.getElementById("section-02"); 
    section_02.insertAdjacentHTML("beforeend",markup) //đoạn này có nhiều cách, element.innerHTML là 1 cách nma ko dùng vì nó sẽ overwrite content của cái element đó nên ko hiệu quả lắm; node.appendChild cũng được nma sử dụng element.insertAdjacentHTML vì nó có thể chọn chỗ insert vào còn appendChild là chỉ insert vào cuối list child của thg parent thôi
}
