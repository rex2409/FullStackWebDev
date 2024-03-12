// const { v4: uuidv4 } = require('uuid');
// let todos = [];
// const Todo = require('../database/script/database')

const Todo = require("../models/todo")


module.exports.getGetTodos = async (req,res,next)=>{

    try{
        let data = await Todo.getTodos();
        console.log('Todos requested are: ',data);
        res.send(data);
    }
    catch(err){
        next(err);
    }

    // res.send(todos);
    // Todo.getTodos()
    //     .then((data)=>{
    //         res.send(data);
    //     })
    //     .catch((err)=>{
    //         res.send(`Unable to fetch todos, ${err.message}`);
    //     })
}

// module.exports.postAddTodo = (req,res)=>{
//     const {name} = req.body;
//     console.log(name);
//     todos.push({
//         id: uuidv4(),
//         name
//     });
//     res.redirect('/gettodos');
// }

module.exports.postAddTodo = async (req,res)=>{
    const {name} = req.body;
    Todo.addTodo(name)
        .then((msg)=>{
            console.log(msg)
            res.redirect('/gettodos');
        })
        .catch((err)=>{
            res.send(`Couldn't add todo ${err.message}`)
        })    

    // const {name} = req.body;
    // Todo.addTodo(name)
    //     .then((msg)=>{
    //         console.log(msg);
    //         res.redirect('/gettodos');
    //     })
    //     .catch((err)=>{
    //         res.send(`Unable to add a todo, ${err.message}`);
    //     })
}


// module.exports.postDeleteTodo = (req,res)=>{
//     const {id} = req.body;
//     todos = todos.filter((task)=>{
//         if(task.id == id) return false;
//         return true;
//     });
//     res.redirect('/gettodos');
// }

module.exports.postDeleteTodo = (req,res)=>{
    const {id} = req.body;
    console.log(id);
    Todo.deleteTodo(id)
        .then((msg)=>{
            console.log(msg)
            res.redirect('/gettodos');
        })
        .catch((err)=>{
            res.send(`Couldn't delete todo ${err.message}`)
        })    
    // const {id} = req.body;
    // Todo.deleteTodo(id)
    //     .then(()=>{
    //         res.redirect('/gettodos');
    //     })
    //     .catch((err)=>{
    //         res.send(`Unable to delete a task, ${err.message}`);
    //     })
}

// module.exports.getIncreasePriority = (req,res)=>{
//     const {id} = req.query;
//     // console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx = i;
//         }
//     })
//     console.log(indx);
//     let temp = todos[indx];
//     todos[indx] = todos[indx-1];
//     todos[indx - 1] = temp;
//     // res.send("You asked to increase priority");
//     res.redirect('/gettodos');
// }

module.exports.getIncreasePriority = (req,res)=>{
    const {id} = req.query;
    Todo.increasePriority(id)
        .then(()=>{


            res.redirect('/gettodos')
        })
        .catch((err)=>{
            res.send(`Couldn't increase todo ${err.message}`)
        })

    // const {id} = req.query;
    // Todo.increasePriority(id)
    //     .then(()=>{
    //         res.redirect('/gettodos')
    //     })
    //     .catch((err)=>{
    //         res.send(`Unable to increase priority of a task, ${err.message}`);
    //     })
}

// module.exports.getDecreasePriority = (req,res)=>{
//     const {id} = req.query;
//     // console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx = i;
//         }
//     })
//     console.log(indx);
//     let temp = todos[indx];
//     todos[indx] = todos[indx + 1];
//     todos[indx + 1] = temp;
//     // res.send("You asked to increase priority");
//     res.redirect('/gettodos');
// }

module.exports.getDecreasePriority = (req,res)=>{

    const {id} = req.query;
    Todo.decreasePriority(id)
        .then(()=>{


            res.redirect('/gettodos')
        })
        .catch((err)=>{
            res.send(`Couldn't decrease todo ${err.message}`)
        })
    // const {id} = req.query;
    // Todo.decreasePriority(id)
    //     .then(()=>{
    //         res.redirect('/gettodos')
    //     })
    //     .catch((err)=>{
    //         res.send(`Unable to decrease priority of a task, ${err.message}`);
    //     })
}