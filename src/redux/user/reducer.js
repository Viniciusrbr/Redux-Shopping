import UserActionTypes from "./action-types"

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case UserActionTypes.LOGIN:
            return { ...state, currentUser: actions.payload }
        case UserActionTypes.LOGOUT:
            return { ...state, currentUser: null }
        default:
            return state
    }

}

export default userReducer