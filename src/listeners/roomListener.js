import socket from "../socket";
import {setRoom} from "../redux/actions/room/roomAction";
import {setPlaying} from "../redux/actions/room/videoAction";

export const roomListener = (room_id, dispatch) => {

    socket.channel('room.' + room_id)
        .listen('OnConnect', (data) => {
            console.log({connected: data});
            if (data.room) {
                dispatch(setRoom(data.room));
            }
        })
        .listen('OnExit', (data) => {
            console.log({exited: data});
            if (data.status) {
                dispatch(setRoom(data.room), false);
            }
        })
        .listen('OnClose', (data) => {
            if (data.status) {
                dispatch(setRoom({}, false));
            }
        })
        .listen('OnPlaying', (data) => {
            if (data.status) {
                dispatch(setPlaying({
                    playing: data.playing,
                    seek: data.seek,
                    user_id: data.user_id,
                }));
            }
        });
};
