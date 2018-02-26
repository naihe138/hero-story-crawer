/**
 * @file
 * @author 何文林
 * @date 2017/9/29
 */
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      hero: {},
      skin: [],
      voiceNav: [],
      voiceDetail: {},
      wordItem: []
    },
    getters,
    actions,
    mutations
  })
}

export default createStore
