import { ADD_FAVORITE } from '../actions/favoriteActions';

const initialState = {
    favorites: [],
    displayFavorites: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return ({
                ...state,
                favorites: [...state.favorites, {...action.payload, id:Date.now()}]
            })
            default:
                return(
                    state
                )
    }
}

export default reducer;