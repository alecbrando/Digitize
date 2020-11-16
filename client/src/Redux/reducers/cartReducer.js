import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'

export const carts = (state = [], action) => {
    Object.freeze(state)
    let nextState;
    switch (action.type) {
        case ADD_TO_CART:
            nextState = [...state,action.camera]
            return nextState
            // return { ...state, ...action.camera};
        case REMOVE_FROM_CART:
            nextState = [...state.filter(camera => action.camera.id !== camera.id)]
            return nextState
            return { ...state, camera: action.camera }
        default:
            return state
    }
}