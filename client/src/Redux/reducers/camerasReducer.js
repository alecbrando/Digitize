import { SET_CAMERAS, GET_CAMERA } from '../actions/cameraActions'

export const cameras = (state = {}, action) => {
    switch (action.type) {
        case SET_CAMERAS:
            return action.data;
        case GET_CAMERA:
            return [...state, action.camera]
        default:
            return state
    }
}