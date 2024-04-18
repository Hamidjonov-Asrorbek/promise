const postsBtn = document.getElementById("postsBtn");
const postsTitle = document.getElementById("posts_title");


function createPosts(data){
    listGroupTodo.innerHTML = ""
    data.forEach(({id, userId, title, body}) => {
        const li = document.createElement('li');
        // li.classList.add('list-group-item');
        li.classList.add('posts_li');
        title = title[0].toLocaleUpperCase() + title.slice(1).toLocaleLowerCase();
        body = body[0].toLocaleUpperCase() + body.slice(1).toLocaleLowerCase();

        li.innerHTML = `<div class='posts_tit'>
                            <h6 style="text-align='start'">${id}.</h6>
                            <h6>${title}</h5>
                        </div>
                        <p>${body}</p>
                        `
        listGroupTodo.appendChild(li)
    });
    localStorage.setItem("posts", JSON.stringify(data))
}

postsBtn.addEventListener('click', () =>{
    listGroupTodo.innerHTML = ""
    todosTitle.classList.add('hidden');
    photosTitle.classList.add('hidden');
    usersTitle.classList.add('hidden');
    loader.classList.remove('hidden')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        loader.classList.add('hidden');
        postsBtn.disabled = true;
        todosBtn.disabled = false;
        photosBtn.disabled = false;
        usersBtn.disabled = false;
        deletBtn.disabled = false;
        postsTitle.classList.remove('hidden');
        createPosts(data.slice(0, 10))})
    .catch((error) =>{
        loader.classList.add('hidden');
        errorEL.classList.remove('hidden')
    })
})