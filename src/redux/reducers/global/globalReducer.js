import {CHAT_TOGGLE, SIDEBAR_TOGGLE} from "../../actions/actionTypes";

const initialState = {
    active: false,
    chat_active: false,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_TOGGLE:
            return {
                active: action.payload.active,
            };
        case CHAT_TOGGLE:
            return {
                chat_active: action.payload.active
            }
        default:
            return state;
    }
};
export default globalReducer;
