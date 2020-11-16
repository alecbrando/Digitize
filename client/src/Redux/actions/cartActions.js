export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (camera) => {
    return {
        type: ADD_TO_CART,
        camera
    }
}

export const addCart = (camera) => {
    return async dispatch => {
        dispatch(addToCart(camera))
        return camera      
    }
}

export const removeFromCart = (cameraId) => {
    return {
        type: REMOVE_FROM_CART,
        cameraId
    }
}

export const removeCart = (cameraId) => {
    return async dispatch => {
        dispatch(removeFromCart(cameraId))
        return cameraId
    }
}