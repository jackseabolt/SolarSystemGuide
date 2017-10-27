


export const RENDER_PLANETS = 'RENDER_PLANETS'; 
export const renderPlanets = planets => ({
    type: RENDER_PLANETS,
    planets
});

export const getPlanets = () => dispatch => {
    return fetch('https://solarsystemguide.herokuapp.com/api/planets')
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText); 
            }
            return res.json(); 
        })
        .then(data => {
            dispatch(renderPlanets(data))
        }); 
}

export const FIND_PLANET = 'FIND_PLANET'; 
export const findPlanet = userInput => dispatch => {
    return fetch(`https://solarsystemguide.herokuapp.com/api/planets/${userInput}`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText); 
            }
            return res.json(); 
        })
        .then(data => {
            dispatch(renderPlanets(data))
        }); 
}