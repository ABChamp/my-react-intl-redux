import { UPDATE_LOCALES } from "./types";
import Cookie from "js-cookie";

const initalState = {
    locale: Cookie.get('locale') || 'th',
}

export default function localesReducer(state = initalState, action) {
    switch(action.type) {
        case UPDATE_LOCALES:
            state = {
                ...state,
                locale: action.payload
            }
        default:
    }
    return state
}