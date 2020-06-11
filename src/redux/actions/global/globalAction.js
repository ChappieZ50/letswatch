import {SIDEBAR_TOGGLE} from "../actionTypes";

export const sidebarToggle = active => ({
    type: SIDEBAR_TOGGLE,
    payload: {
        active
    }
});