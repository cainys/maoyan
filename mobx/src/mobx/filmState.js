import {observable, action, computed, useStrict} from 'mobx'
class FilmState {
    @observable comingsoon
    @observable nowPlaying

    @action initialComingSoon = (comingsoon) => {
        this.comingsoon = comingsoon
    }
}

const filmState = new FilmState()

export default filmState
