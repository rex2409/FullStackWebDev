const addtask = document.querySelector('#addtask');
const newtask = document.querySelector('#newtask');
const taskList = document.querySelector('.taskList');

function addToDom(todos){
    taskList.innerText = '';
    console.log(todos)
    todos.forEach(element => {
        // 1. Create the Elelment
        let li = document.createElement('li');
        // 2. update the text inside this li
        // li.innerText = element.name;
        li.innerHTML = `
        <span class="taskname">${element.name}</span>
        <button atrid=${element.id} class="upBtn">⬆️</button>
        <button atrid=${element.id} class="downBtn">⬇️</button>
        <button atrid=${element.id} class="delBtn">❌</button>
        `
        //3. Simply append this to tasklist
        taskList.appendChild(li);
    });
}

axios.get('/gettodos')
    .then((res)=>{
        let todos = res.data;
        addToDom(todos);
    })
    .catch((err)=>{
        console.log(err);
    })


addtask.addEventListener('click',(ev)=>{
    ev.preventDefault();
    // console.log("Tried to submit the form");
    axios.post('/addtodo',{
        name: newtask.value
    })
    .then((res)=>{
        let todos = res.data;
        newtask.value = '';
        console.log(todos);
        addToDom(todos);
    })
    .catch((err)=>{
        console.log(err);
    })
})

// axios.get('/gettodos')
//     .then((todos)=>{
//         console.log(todos);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

function deleteToDo(atrid){
    axios.post('deletetodo',{id: atrid})
            .then((res)=>{
                let todos = res.data
                console.log(todos)
                addToDom(todos);
            })
            .catch((err)=>{
                console.log(err);
            })
}

taskList.addEventListener('click',(ev)=>{
    // console.log(ev);
    // console.log(ev.target);
    let atrid = ev.target.getAttribute('atrid');
    let btnName = ev.target.className;
    console.log(atrid);
    console.log(btnName);
    if(btnName === 'delBtn'){
        deleteToDo(atrid);
    }
    else if(btnName === 'upBtn'){
        //increase
        axios.get(`/increasepriority?id=${atrid}`,{
            id: atrid
        })
        .then((res)=>{
            let todos = res.data
            // console.log(todos)
            addToDom(todos);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else if(btnName === 'downBtn'){
        //decrease
        axios.get(`/decreasepriority?id=${atrid}`,{
            id: atrid
        })
        .then((res)=>{
            let todos = res.data
            // console.log(todos)
            addToDom(todos);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
})