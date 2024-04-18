const todosBtn = document.getElementById("todosBtn"); 
const todosTitle = document.getElementById("todos_title"); 

function createTodos(data){
    listGroupTodo.innerHTML = ""
    data.forEach(({id, userId, title, completed}) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.classList.add('todos_li');
        title = title[0].toLocaleUpperCase() + title.slice(1).toLocaleLowerCase();
        li.innerHTML = `<p>${id}.</p>
                        <p>${title}</p>
                        `
        listGroupTodo.appendChild(li)
    });
    localStorage.setItem("todos", JSON.stringify(data))
}

todosBtn.addEventListener('click', () =>{
    postsTitle.classList.add('hidden');
    photosTitle.classList.add('hidden');
    usersTitle.classList.add('hidden');
    listGroupTodo.innerHTML = ""
    loader.classList.remove('hidden');
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        loader.classList.add('hidden');
        todosBtn.disabled = true;
        postsBtn.disabled = false;
        photosBtn.disabled = false;
        usersBtn.disabled = false;
        deletBtn.disabled = false;
        todosTitle.classList.remove('hidden');
        createTodos(data.slice(0, 10))})
    .catch((error) =>{
        loader.classList.add('hidden');
        errorEL.classList.remove('hidden')
    })
})
