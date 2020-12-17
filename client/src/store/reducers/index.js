const initialState = {
    users: [],
    items: [],
    isLoading: true
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'START_FETCH':
            return {...state, isLoading: true}
        case 'FETCH_USER':
            return {...state, users: action.payload}
        case 'FINISH_FETCH':
            return {...state, isLoading: false}
        default:
            return state
    }
}