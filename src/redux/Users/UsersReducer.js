const initialState = []

const usersReducer = (state = initialState, action) => {
    let index;
    switch (action.type) {
        case "SET_USERS":
            return action.payload
        case "USER_SELECTED":
            index = state.findIndex(user => user.id === action.payload)
            state[index].status = "shortlisted"
            return [...state]
        case "USER_REJECTED":
            index = state.findIndex(user => user.id === action.payload)
            state[index].status = "rejected"
            return [...state]
        default:
            return state
    }
}

export default usersReducer;