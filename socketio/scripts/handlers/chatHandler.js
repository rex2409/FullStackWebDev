module.exports = (socket,io,userMap)=>{
    socket.on('chat',(msg,cb)=>{
        console.log(msg);
        cb({
            status: 'chat Recieved'
        })
        // socket.broadcast.emit('msg',{
        //     text: msg,
        //     senderName: userMap[socket.id]
        // })
        io.emit('msg',{
            text: msg,
            senderName: userMap[socket.id]
        })
    })
}