import * as mutationType from './mutation_type'

const state = {
  leftNavState: false,
  loading: false
}

const mutations = { // mutations和actions的区别在于mutation只能是同步函数，actions可以是异步函数
  [mutationType.TOGGLELEFTNAV] (state, flag) {
    state.leftNavState = flag
  }
}

const actions = {
  changeLeftNav ({commit, state}, flag) {
    commit(mutationType.TOGGLELEFTNAV, flag)
  }
}

const getters = {
  getLeftNavState: state => { return state.leftNavState }
}

export default{
  state,
  mutations,
  getters,
  actions
}
