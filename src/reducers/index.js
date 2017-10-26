import { RENDER_PLANETS } from '../actions'; 

const initialState = {
    planets: []
}

export const planetReducer = (state=initialState, action) => {
    if(action.type === RENDER_PLANETS) {
        return Object.assign({}, state, {
            planets: [...action.planets]
        }); 
    }
    return state; 
}

