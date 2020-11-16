import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'

export const carts = (state = [], action) => {
    Object.freeze(state)
    let nextState;
    switch (action.type) {
        case ADD_TO_CART:
            nextState = [...state,action.camera]
            return nextState
        case REMOVE_FROM_CART:
            let flag = false
            nextState = [...state.filter((camera) => {
                if (flag === false && action.cameraId === camera.id) {
                    flag = true
                } else {
                    return camera
                }
            }
            )]
            return nextState
        default:
            return state
    }
}