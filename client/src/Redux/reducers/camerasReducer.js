import { SET_CAMERAS } from '../actions/cameraActions'

export const cameras = (state = {}, action) => {
    switch (action.type) {
        case SET_CAMERAS:
            return action.data;
        default:
            return state
    }
}