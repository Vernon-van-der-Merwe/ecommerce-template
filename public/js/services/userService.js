
export async function renderUsers(db, fire) {
  const q = fire.query(fire.collection(db, 'users'))

  fire.onSnapshot(q, querySnapshot => {
    const users = []

    querySnapshot.forEach(doc => {
      let user = `
          <div class="col m-1"  style="background-color: rgb(32, 136, 127);">
            <div class="row"><h1>${doc.data().name}</h1></div>
            </div>
            `
      users.push(user)
    })

    document.getElementById('users').innerHTML = users
  })
}
