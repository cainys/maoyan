import {observable, useStrict, action, computed} from 'mobx'

class AppState {
    @observable city = '杭州'
    @observable title = '卖座网'
    @observable leftNavState = false

    @observable times = 0
    @action click = ()=>{
        console.log(this.times)
        this.times = this.times + 1
        console.log(this.times)
    }

    @action changeAside = () => {
        this.leftNavState = !this.leftNavState

    }

    @action updateTitle = (title) => {
        return this.title = title
    }

    @action updateCity = (city) => {
        return this.city = city
    }
}

const appState = new AppState()

export default appState
