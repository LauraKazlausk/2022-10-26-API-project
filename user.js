// 3. Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
//   3.1. Pilnas vardas.
//   3.2. Vartotojo vardas / nick'as.
//   3.3. El. paštas.
//   3.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   3.5. Telefono numeris.
//   3.6. Internetinio puslapio adresas.
//   3.7. Įmonės, kurioje dirba, pavadinimas.
const userId = 1;
let userInfo = document.querySelector('#user-info');

fetch('https://jsonplaceholder.typicode.com/users/' + userId)
.then(res=>res.json())
.then(user =>{

        let userName = document.createElement('h3');
        let userNickname = document.createElement('p');
        userName.classList.add('user-name');
        userName.textContent = `${user.name} (${user.username})` ;

        let userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;
 
        let userPhone = document.createElement('p');
        userPhone.textContent = `Phone: ${user.phone}`;

        let userWebsite = document.createElement('p');
        userWebsite.textContent = `Website: ${user.website}`;

        let userCompanyName = document.createElement('p');
        userCompanyName.textContent =`Company's name: ${user.company.name}`;

        let userAddress = document.createElement('p');
        userAddress.textContent = `Adress: ${user.address.street}, ${user.address.suite},
         ${user.address.city},${user.address.zipcode}.`
       

        //  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002063.4758765146!2d80.0472423339837!3d-37.3650270828796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39e931c3f0a55e62!2zMzfCsDE4JzU3LjIiUyA4McKwMDgnNTguNiJF!5e0!3m2!1slt!2slt!4v1666805581102!5m2!1slt!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            /*reikes masyvo */

        console.log(user.address)
        console.log(user.address.street)
        console.log(user.address.city)
        console.log(user.address.suite)
        console.log(user.address.zipcode)
        console.log(user.address.geo)

    userInfo.append(userName, userNickname, userEmail, userPhone, userWebsite, userCompanyName, userAddress)
    })
    

