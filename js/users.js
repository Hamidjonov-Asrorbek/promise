const usersBtn = document.getElementById("usersBtn");
const usersTitle = document.getElementById("users_title");


function createUsers(data){
    listGroupTodo.innerHTML = ""
    data.forEach(({id, name, username, email, address, phone, website, company}) => {
        const li = document.createElement('li');
        // li.classList.add('list-group-item');
        li.classList.add('users_li');

        li.innerHTML = `<div>
                            <div class='posts_tit'>
                                <h6 style="text-align='start'">${id}.</h6>
                                <h6>${name} ${username}</h5>
                            </div>
                            <p>Email: <a href=mailto:${email}>${email}</a></p>
                            <p>Phone: <a href= tel:+${phone}>${phone}</a></p>
                            <p>Website: <a href='https://${website}' target="_blank"> ${website}</a></p>
                        </div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDcaqhuc9hsM1FwGMd7AJFWyR13l42gfF-LqoC3PgcQ&s' width='200' alt="image">
                        `
        listGroupTodo.appendChild(li);
        // userlarni malumotini oldiga rasm qo'shib qo'ydim, keyinchalik rasmlarga serverdan userga mos rasm keladi
    });
    localStorage.setItem("users", JSON.stringify(data))
}

usersBtn.addEventListener('click', () =>{
    listGroupTodo.innerHTML = ""
    todosTitle.classList.add('hidden');
    photosTitle.classList.add('hidden');
    postsTitle.classList.add('hidden');
    loader.classList.remove('hidden')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        loader.classList.add('hidden');
        usersBtn.disabled = true;
        postsBtn.disabled = false;
        todosBtn.disabled = false;
        photosBtn.disabled = false;
        deletBtn.disabled = false;
        usersTitle.classList.remove('hidden');
        createUsers(data.slice(0, 10))})
    .catch((error) =>{
        loader.classList.add('hidden');
        errorEL.classList.remove('hidden')
    })
})