export const SET_CAMERAS = 'SET_CAMERAS'

export const setCameras = (data) => {
    return {
        type: SET_CAMERAS,
        data
    }
}


export const retrieveCameras = () => {
    return async dispatch => {
        const res = await fetch(`/api/cameras`)

        if (res.ok) {
            const data = await res.json()
            dispatch(setCameras(data))
        }
        return res;
    };
};