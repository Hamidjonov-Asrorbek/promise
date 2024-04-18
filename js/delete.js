const deletBtn = document.getElementById('deletBtn');

deletBtn.addEventListener('click', (e) => {  
    e.preventDefault();
    console.log("ada");
    listGroupTodo.innerHTML = "";
    todosTitle.classList.add('hidden');
    photosTitle.classList.add('hidden');
    postsTitle.classList.add('hidden');
    usersTitle.classList.add('hidden');
    usersBtn.disabled = false;
    postsBtn.disabled = false;
    todosBtn.disabled = false;
    photosBtn.disabled = false;
    deletBtn.disabled = true;
})