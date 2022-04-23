export const initialState = {
    cards: [],
    selCard: []
}

export const updateCards = ( data ) => {
    return {
        type: "UPDATE_CARDS",
        payload: data
    }
}

export const selectedCard = ( data ) => {
    return {
        type: "SELECTED_CARD",
        payload: data
    }
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case "UPDATE_CARDS":
        console.log( state.cards )
        return {
            cards: [ action.payload ]
        }

        case "SELECTED_CARD":
        console.log( state.selCard )
        return {
            ...state,
            selCard: [ action.payload ]
        }

        default: return state;
    }
}

export default reducer;