import {ROOM_CREATE, ROOM_GET, ROOM_JOIN, ROOM_PLAYER_ON_CHANGE, ROOM_SET} from "../../actions/actionTypes";

const initialState = {
    errors: [],
    joinErrors: [],
    data: {},
    status: false,
    user: {},
};

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOM_CREATE:
            return {
                ...state,
                ...action.payload
            };
        case ROOM_JOIN:
            return {
                ...state,
                ...action.payload
            };
        case ROOM_GET:
            return {
                ...state,
                ...action.payload
            };
        case ROOM_SET:
            return {
                ...state,
                ...action.payload
            };
        case ROOM_PLAYER_ON_CHANGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    player: action.payload
                },
            };
        default:
            return state;
    }
};
export default roomReducer;
