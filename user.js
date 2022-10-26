// 3. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//   3.1. Pilnas vardas.
//   3.2. Vartotojo vardas / nick'as.
//   3.3. El. paštas.
//   3.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   3.5. Telefono numeris.
//   3.6. Internetinio puslapio adresas.
//   3.7. Įmonės, kurioje dirba, pavadinimas.
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(user =>{
    user.map(user =>{
        let userInfo = document.querySelector('#user-info')
        let userName = document.createElement('h2');
        userName.classList.add('user-name');

        userName.textContent = user.name;
        console.log(user)
    console.log(user.name)
    console.log(user.username)
    console.log(user.email)
    console.log(user.address)/*reikes masyvo */
    console.log(user.phone)
    console.log(user.website)
    console.log(user.company)/*reikes masyvo */

    })
    

})