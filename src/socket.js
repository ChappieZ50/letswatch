import Echo from "laravel-echo";

const io = require('socket.io-client');

const socket = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    client: io,
    auth: {
        headers: {
            'Authorization': 'Bearer 3548a2c195c864b99de304e3d0470da1',
        },
    },
});

export default socket;