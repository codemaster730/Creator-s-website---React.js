const initialState = {
    language: 'Arabic'
}

const multilang = (state = initialState, action) => {
    switch (action.type) {
        case 'LANGUAGE':
            return Object.assign({}, state, {
                language: action.language
            });
        default:
            return state
    }
}

export default multilang;