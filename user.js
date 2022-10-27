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

fetch('https://jsonplaceholder.typicode.com/users/' + userId)  /* &_expand=posts*/
.then(res=>res.json())
.then(user =>{

        let userName = document.createElement('h3');
        let userNickname = document.createElement('p');
        userName.classList.add('user-name');
        userName.textContent = `${user.name} (${user.username})` ;

        let userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email} ${user.email}`;
 
        let userPhone = document.createElement('p');
        userPhone.textContent = `Phone: ${user.phone}`;

        let userWebsite = document.createElement('p');
        userWebsite.textContent = `Website: ${user.website}`;

        let userCompanyName = document.createElement('p');
        userCompanyName.textContent =`Company's name: ${user.company.name}`;


        let {street, suite, city, zipcode} = user.address;
       
        let userAddress = document.createElement('p');
        userAddress.textContent = `Adress: ${street}, ${suite},
         ${city},${zipcode}.`
    
         userInfo.append(userName, userNickname, userEmail, userPhone, userWebsite, userCompanyName, userAddress)
         
        })
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res=>res.json())
        .then(posts=>{ 

        const postsWrapper = document.querySelector('#posts-wrapper');
       
         const postTitle = document.createElement('h3');
         postTitle.classList.add('post-title');
         postTitle.textContent = 'User posts:';

         const postsList = document.createElement('div');
         postsList.classList.add('posts-list');

         postsWrapper.append(postTitle, postsList)

                 posts.map(post => {
                const postItem = document.createElement('div');
                postItem.classList.add('post-item');

                postItem.innerHTML = `<h3>${post.title}</h3>
                                      <p>${post.body}</p>
                                      <a href="./post.html"> Read more...</a>`
                postsList.append(postItem)
                 })
                })
                
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
.then(res=>res.json())
.then(albums=> {
    const albumsWrapper = document.querySelector('#albums-wrapper');
    const albumsTitle = document.createElement('h3');
    albumsTitle.classList.add('albums-title');
    albumsTitle.textContent = 'User albums:';

    const albumsList = document.createElement('ul');
    albumsList.classList.add('albums-list');

    albumsWrapper.append(albumsTitle, albumsList);
    console.log(albums);

    albums.map(album =>{
        const albumItem = document.createElement('li');
        albumItem.classList.add('album-item');

        const albumItemLink = document.createElement('a');
        albumItemLink.textContent = album.title;
        albumItemLink.href = './album.html'

        albumItem.append(albumItemLink);
        albumsList.append(albumItem)
    })
})

