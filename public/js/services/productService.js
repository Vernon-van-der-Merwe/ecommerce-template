
export async function renderProducts(db, fire) {
    const querySnapshot = await fire.getDocs(fire.collection(db, 'products'))
    let products = []

    querySnapshot.forEach(doc => {
      let product = `
      <div class="col-sm-6 col-md-4 col-lg-4">
      <div class="box">
         <div class="option_container">
            <div class="options">
               <a href="" class="option1">
               ${doc.data().name}
               </a>
               <a href="" class="option2">
               Buy Now
               </a>
            </div>
         </div>
         <div class="img-box">
            <img src="images/p1.png" alt="">
         </div>
         <div class="detail-box">
            <h5>
            ${doc.data().name}
            </h5>
            <h6>
               R${doc.data().price}
            </h6>
         </div>
      </div>
   </div>
      `
      products.push(product)
    })

    document.getElementById('products').innerHTML = products
}
