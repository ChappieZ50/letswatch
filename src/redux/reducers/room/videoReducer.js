import {VIDEO_ON_PLAYING, VIDEO_ON_SYNC} from "../../actions/actionTypes";

const initialState = {
    playing: false,
    seek: 0,
    user_id: '',
    sync: false,
};

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIDEO_ON_PLAYING:
            return {
                ...state,
                ...action.payload
            };
        case VIDEO_ON_SYNC:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default videoReducer;
