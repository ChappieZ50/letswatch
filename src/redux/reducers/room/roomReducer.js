import {CREATE_ROOM} from "../../actions/actionTypes";

const initialState = {
    errors: [],
    data: {},
    status: false
};

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default roomReducer;
