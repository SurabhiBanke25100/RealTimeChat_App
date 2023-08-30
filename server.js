const app = require("express");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("Socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("payload: ", payload);
        io.emit("chat", payload);

    });
});


server.listen(5000, () => {
    console.log(`server active at port:5000`);
});