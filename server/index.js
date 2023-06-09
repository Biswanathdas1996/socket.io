const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

app.use(router);

io.on('connection', (socket) => {
   console.log("user connected");

  socket.on('chat message', (msg, cb) => {
      console.log(msg)
    io.emit('chat message', msg);
    cb();
  });


});

server.listen(process.env.PORT || 3000, () => console.log(`Server has started.`));