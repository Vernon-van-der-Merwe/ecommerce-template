
async function addProduct(product) {
    var result = false;

    await fetch(fire.getDocs(fire.collection(db, 'products')), {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(_ => result = true)
    .catch(_ => result = false);

    return result;
}

$("#card-container").ready(async function() {
    var cards = await getAllProducts();

    for (const index in cards) {
        var card = cards[index];
        $("#card-container").append(card);
    }
});

$("#card-container").on("click", "#buy-btn", function() {
    alert("Product has been added!");
});



$("#add-product").on("click", function() {
    window.location.href = "add-product.html";
});

$("#product-form").submit(async function(form) {
    form.preventDefault();

    const name = $("#productNameInput").val();
    const price = $("#productPriceInput").val();
    const description = $("#productDescriptionInput").val();

    const product = {
        "name": name,
        "price": price,
        "description": description
    };

    var result = await createNewProduct(product);

    if (result) {
        alert("Product has been added!");
        window.location.href = "index.html";
    } else {
        alert("Failed to add product, sorry");
    }

    console.log(name + price + description)
});