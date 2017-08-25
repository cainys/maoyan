const initialState = {
    leftNavState: false,
    title: '卖座网',
    city: '杭州'
}
export default function app(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_SIDEBAR':
            return Object.assign({}, state, {
                leftNavState: !state.leftNavState
            })
        default:
            return state
    }
}
