const photosBtn = document.getElementById("photosBtn");
const photosTitle = document.getElementById("photos_title"); 


function createPhotos(data){
    listGroupTodo.innerHTML = ""
    data.forEach(({id, albumId, url, title, thumbnailUrl}) => {
        const li = document.createElement('li');
        // li.classList.add('list-group-item');
        li.classList.add('photos_li');
        title = title[0].toLocaleUpperCase() + title.slice(1).toLocaleLowerCase();
        li.innerHTML = `
        <img src=${thumbnailUrl} alt="image">
        <div class='posts_tit'>
                            <h6 style="text-align='start'">${id}.</h6>
                            <h6>${title}</h5>
                        </div>
                        `
        listGroupTodo.appendChild(li)
    });
    localStorage.setItem("photos", JSON.stringify(data));
}

photosBtn.addEventListener('click', () =>{
    todosTitle.classList.add('hidden');
    postsTitle.classList.add('hidden');
    usersTitle.classList.add('hidden');
    listGroupTodo.innerHTML = ""
    loader.classList.remove('hidden')
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
        loader.classList.add('hidden');
        photosBtn.disabled = true;
        todosBtn.disabled = false;
        postsBtn.disabled = false;
        usersBtn.disabled = false;
        deletBtn.disabled = false;
        photosTitle.classList.remove('hidden');
        createPhotos(data.slice(0, 10))})
    .catch((error) =>{
        loader.classList.add('hidden');
        errorEL.classList.remove('hidden')
    })
})