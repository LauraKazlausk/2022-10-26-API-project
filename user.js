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
   
     
        console.log(user.address)/*reikes masyvo */
  

    userInfo.append(userName, userNickname, userEmail, userPhone, userWebsite, userCompanyName )
    })
    

