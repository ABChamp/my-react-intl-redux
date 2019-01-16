import { createStore, combineReducers } from 'redux'
import localesReducer from "./reducers";

const reducer = combineReducers({
    locales: localesReducer
})

export const store = createStore(reducer)
