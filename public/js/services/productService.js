
export async function renderProducts(db, fire) {
    const querySnapshot = await fire.getDocs(fire.collection(db, 'products'))
    let products = []

    querySnapshot.forEach(doc => {
      let product = `
      <div class="col m-1"  style="background-color: rgb(32, 136, 127);">
      <div class="row"><h1>${doc.data().name}</h1></div>
      <div class="row"><h1>${doc.data().price}</h1></div>
      <div class="row"><h1>${doc.data().description}</h1></div>
      </div>
      `
      products.push(product)
    })

    document.getElementById('products').innerHTML = products
}
