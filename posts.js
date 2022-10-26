    function init (){
    
    
    const bodyElement = document.querySelector('body');
    const allPostsWrapper = document.createElement('div');
    bodyElement.append(allPostsWrapper);
    
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15&_embed=comments&_expand=user`)
    .then(res=>res.json())
    .then(data => {
        data.map(post => {
        let postWrapper = document.createElement('div');
        postWrapper.classList.add('post-wrapper');

        let postTitle = document.createElement('h2');
        postTitle.classList.add('post-title')
        let postTitleText = post.title;

        let postText = document.createElement('p');
        postText.classList.add('post-body');
        let postParagraphText = post.body;

        let postAuthorLink = document.createElement('span');
        postAuthorLink.classList.add('post-author');

        let commentWrapper = document.createElement('span');
        commentWrapper.classList.add('comment-wrapper');

        let commentTitle = document.createElement('h4');
        commentTitle.classList.add('comment-title');
        
        let commentName = document.createElement('p');
        commentName.classList.add('comment-name');

        let commentParagraph = document.createElement('p');
        commentParagraph.classList.add('comment-paragraph');

        let commentEmail = document.createElement('p');
        commentEmail.classList.add('comment-email')

        let postAuthorName = post.user.name;
        postAuthorLink.textContent = data.name;
        postAuthorLink.innerHTML = `Author: <a href='#'> ${postAuthorName}</a>`;

        postTitle.textContent = postTitleText;
        postText.textContent = postParagraphText;
        postWrapper.append(postTitle, postText, postAuthorLink);
        allPostsWrapper.append(postWrapper);
        postWrapper.append(commentTitle, commentWrapper);
        

        post.comments.map(comment => {
        commentEmail.setAttribute('href', '#')
            
        commentTitle.textContent = 'Comments:';
        commentName.textContent = '--' + comment.name + '--' ;
        commentParagraph.textContent =  comment.body;
        commentEmail.textContent = comment.email;
        commentWrapper.append(commentName, commentParagraph, commentEmail)
        })
    })
})

    }
init ();

    