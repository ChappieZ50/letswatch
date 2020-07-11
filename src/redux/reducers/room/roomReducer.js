import {ROOM_CREATE, ROOM_GET} from "../../actions/actionTypes";

const initialState = {
    errors: [],
    data: {},
    status: false
};

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOM_CREATE:
            return {
                ...state,
                ...action.payload
            };
        case ROOM_GET:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default roomReducer;
