const initialState = {
    films: []
}

export default function filmReducer (state = initialState, action) {
    switch(action.type) {
        case 'initFilm':
            return Object.assign({}, state, {
                films: action.films
            })
        default:
            return state
    }
}
