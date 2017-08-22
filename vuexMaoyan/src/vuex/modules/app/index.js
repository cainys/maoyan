import * as mutationType from './mutation_type'

const state = {
  leftNavState: false,
  city: '杭州',
  loading: false,
  currentTab: 'now'
}

const mutations = { // mutations和actions的区别在于mutation只能是同步函数，actions可以是异步函数
  [mutationType.TOGGLELEFTNAV] (state, flag) {
    state.leftNavState = flag
  },
  [mutationType.TOGGLECITY] (state, city) {
    state.city = city
  },
  [mutationType.TOGGLETAB] (state, tab) {
    state.currentTab = tab
  }
}

const actions = {
  changeLeftNav ({commit, state}, flag) {
    commit(mutationType.TOGGLELEFTNAV, flag)
  },
  changeCity ({commit}, city) {
    commit(mutationType.TOGGLECITY, city)
  }
}

const getters = {
  getLeftNavState: state => { return state.leftNavState },
  getCity: state => { return state.city }
}

export default{
  state,
  mutations,
  getters,
  actions
}
