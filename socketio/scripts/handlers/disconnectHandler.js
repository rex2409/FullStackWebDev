module.exports = (socket,io,userMap)=>{
    socket.on("disconnect",()=>{
        let socketId = socket.id;
        let username = userMap[socket.id];
        console.log("User has diconnected:",username);
        if(username){
            delete userMap[socketId];
            let activeUsers = [];
            for(let i in userMap){
                activeUsers.push(userMap[i]);
            }

            console.log(userMap, socketId);
            socket.broadcast.emit('disconnectedUser',{
                username,
                activeUsers
            })
        }
    })
}