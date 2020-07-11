import Echo from "laravel-echo";

const io = require('socket.io-client');

const socket = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    client: io,
});

export default socket;