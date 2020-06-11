import {SIDEBAR_TOGGLE} from "../../actions/actionTypes";

const initialState = {
    active: false
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_TOGGLE:
            return {
                active: action.payload.active,
            };
        default:
            return state;
    }
};
export default globalReducer;
