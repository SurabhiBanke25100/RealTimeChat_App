const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("Connected....");

    socket.on("message", (msg) => {
        socket.broadcast.emit('message', msg)

    });

});

app.use(express.static(__dirname + '/frontend'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


server.listen(5000, () => {
    console.log(`server active at port:5000`);

});