import {setPlaying, setSeek} from "../redux/actions/room/videoAction";
import socket from "../socket";

export const videoListener = (room_id, dispatch) => {

    socket.channel('video-actions.' + room_id)
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
