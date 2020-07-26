import {CHAT_TOGGLE, SIDEBAR_TOGGLE} from "../actionTypes";

export const sidebarToggle = active => ({
    type: SIDEBAR_TOGGLE,
    payload: {
        active
    }

});
export const chatToggle = active => ({
    type: CHAT_TOGGLE,
    payload: {
        active
    }
});
