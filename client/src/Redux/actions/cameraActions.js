export const SET_CAMERAS = 'SET_CAMERAS'
export const GET_CAMERA = 'GET_CAMERA'

export const setCameras = (data) => {
    return {
        type: SET_CAMERAS,
        data
    }
}

export const getCamera = (camera) => {
    return {
        type: GET_CAMERA,
        camera
    }
}


export const retrieveCameras = () => {
    return async dispatch => {
        const res = await fetch(`/api/cameras/`)

        if (res.ok) {
            const data = await res.json()
            dispatch(setCameras(data))
        }
        return res;
    };
};

export const camera = (id) => {
    return async dispatch => {
        const res = await fetch(`/api/cameras/${id}`)
        if (res.ok){
            const camera = await res.json()
            dispatch(getCamera(camera))
            return camera
        }
    }
}