const { getDB } = require("../database/database");
const { v4: uuidv4 } = require('uuid');
const {ObjectId} = require("mongodb");

async function getPriority(){
    let counter = await getDB().collection('counter');
    let currentPriority;
    let cnt = await counter.findOne();
    if(!cnt){
        await counter.insertOne({id: 'myCounter', val: 1});
        currentPriority = 1;
    }
    else{
        cnt = await counter.findOneAndUpdate(
            {id: 'myCounter'},
            {$inc: {val: 1}},
            {returnDocument: 'after'}
        );
        // console.log("After read: ",cnt.value.val);
        currentPriority = cnt.val;
    }
    return currentPriority;
}


class Todo{
    static addTodo(name){
        return new Promise(async (resolve,reject)=>{
            try{
                let todo = await getDB().collection('todo');

                let currentPriority = await getPriority();

                const data = {
                    name,
                    id:uuidv4(),
                    priority: currentPriority
                };
    
                await todo.insertOne(data);
                resolve('Added successfully');
            }
            catch(err){
                reject(err);
            }
        })
    }

    static getTodos(){
        return new Promise(async (resolve,reject)=>{
            try{
                let todo = await getDB().collection('todo');
                let data = await todo.find({}).sort({priority:1}).toArray();
                console.log(data);
                resolve(data);
            }
            catch(err){
                reject(err);
            }
        })
    }

    static deleteTodo(id){
        return new Promise(async (resolve,reject)=>{
            try{
                let todo = await getDB().collection('todo');
                await todo.deleteOne({id:(id)});
                resolve("Deletion Success");
            }
            catch(err){
                reject(err);
            }
        })
    }

    static increasePriority(id){
        return new Promise(async (resolve,reject)=>{
            try{
                let todo = await getDB().collection('todo');
                let currentItem = await todo.find({id:(id)}).toArray();
                currentItem = currentItem[0];

                let allTasks = await todo.find({
                    priority: {
                        $lt: currentItem.priority
                    }
                }).sort({priority: -1}).toArray();
                // console.log("all Tasks: ", allTasks);

                let previousItem = allTasks[0];
                if(!previousItem){
                    return resolve('Priority set Done');
                }
                console.log("Current Items: ", currentItem);
                console.log("Previous Items: ", previousItem);

                await todo.updateOne(
                    {id:(currentItem.id)},
                    {$set:{
                        priority: previousItem.priority
                    }}
                );

                await todo.updateOne(
                    {id:(previousItem.id)},
                    {$set:{
                        priority: currentItem.priority
                    }}
                );

                resolve("Done");
            }
            catch(err){
                reject(err);
            }
        })
    }

    static decreasePriority(id){
        return new Promise(async (resolve,reject)=>{
            try{
                let todo = await getDB().collection('todo');
                let currentItem = await todo.find({id:(id)}).toArray();
                currentItem = currentItem[0];

                let allTasks = await todo.find({
                    priority: {
                        $gt: currentItem.priority
                    }
                }).sort({priority: 1}).limit(1).toArray();
                // console.log("all Tasks: ", allTasks);

                let nextItem = allTasks[0];
                if(!nextItem){
                    return resolve('Priority set Done');
                }
                console.log("Current Items: ", currentItem);
                console.log("Previous Items: ", nextItem);

                await todo.updateOne(
                    {id:(currentItem.id)},
                    {$set:{
                        priority: nextItem.priority
                    }}
                );

                await todo.updateOne(
                    {id:(nextItem.id)},
                    {$set:{
                        priority: currentItem.priority
                    }}
                );

                resolve("Done");
            }
            catch(err){
                reject(err);
            }
        })
    }
}

module.exports = Todo;