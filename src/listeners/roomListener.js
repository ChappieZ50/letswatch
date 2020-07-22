import socket from "../socket";
import {setPlayer, setRoom} from "../redux/actions/room/roomAction";
import {setPlaying} from "../redux/actions/room/videoAction";

export const roomListener = (room_id, dispatch) => {

    socket.channel('room.' + room_id)
        .listen('OnConnect', (data) => {
            if (data.room) {
                dispatch(setRoom(data.room));
            }
        })
        .listen('OnExit', (data) => {
            if (data.status) {
                dispatch(setRoom(data.room), false);
            }
        })
        .listen('OnClose', (data) => {
            if (data.status) {
                dispatch(setRoom({}, false));
            }
        })
        .listen('OnPlayer', (data) => {
            if (data.status) {
                dispatch(setPlayer(data.room.player));
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
