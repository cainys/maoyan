const initialState = {
    leftNavState: false,
    title: '卖座网',
    city: '杭州',
    animateCls: 'normal',
    currentTab: 'now'
}
export default function app(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_SIDEBAR':
            return Object.assign({}, state, {
                leftNavState: !state.leftNavState
            })
        case 'CURRENT_ANIMATE':
            return {
                ...state,
                animateCls: action.cls
            }
        case 'CHANGE_TAB':
            return {
                ...state,
                currentTab: action.flag
            }
        default:
            return state
    }
}
