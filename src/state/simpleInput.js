const CHANGE = 'simpleInput/CHANGE'

const initialState = {
    value: '',

}

export const changeActionCreator = (newValue) => ({
    type: CHANGE,
    newValue
})

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                value: action.newValue,
            }
        default:
            return state
    }
}