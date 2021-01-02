import { combineReducers } from 'redux';
import searchReducer from "./Search/SearchReducer";
import usersReducer from "./Users/UsersReducer";

const rootReducer=combineReducers({
    search:searchReducer,
    users:usersReducer
})

export default rootReducer;