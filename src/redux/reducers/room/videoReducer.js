import {VIDEO_ON_PLAYING} from "../../actions/actionTypes";

const initialState = {
    playing: false,
    seek: 0,
    user_id: '',
};

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIDEO_ON_PLAYING:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default videoReducer;
