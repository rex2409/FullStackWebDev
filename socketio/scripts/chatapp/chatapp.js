let userMap = {};

module.exports = (socket,io)=>{
     // console.log('Connection requested by a client',socket.id)
     socket.emit('Welcome',{
        msg: 'Welcome to our chat app'
    })
    //handle user entry
    const userHandler = require('../handlers/userHandler');
    userHandler(socket,io,userMap);

    //handle the user exit
    const disconnectHandler = require('../handlers/disconnectHandler');
    disconnectHandler(socket,io,userMap);

    //handle the chat between users
    const chatHandler = require('../handlers/chatHandler');
    chatHandler(socket,io,userMap);
}