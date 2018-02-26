/**
 * @file
 * @author 何文林
 * @date 2017/9/29
 */

import Services from './services'
export default {
  async getHero({ commit, state }) {
    let res = await Services.getHero()
    state.hero = res.data.data
    return res.data.data
  },
  async getHeroDetai({ commit, state }, prams) {
    let res = await Services.getHeroDetail(prams)
    return res.data.data
  },
  async getSkin({ commit, state }) {
    let res = await Services.getSkin()
    state.skin = res.data.data
    return res.data.data
  },
  async getVoiceNav({ commit, state }) {
    let res = await Services.getVoiceNav()
    state.voiceNav = res.data.data
    return res.data.data
  },
  async getVoiceDetail({ commit, state }, id) {
    let res = await Services.getVoiceDetail(id)
    return res.data.data
  },
  async getMusic({ commit, state }) {
    let res = await Services.getMusic()
    return res.data.data
  },
  async getWord({ commit, state }) {
    let res = await Services.getWord()
    state.wordItem = res.data.data
    return res.data.data
  },
  async getWordNav({ commit, state }, id) {
    let res = await Services.getWordNav(id)
    return res.data.data
  },
  async getWordDetail({ commit, state }, prams) {
    let res = await Services.getWordDetail(prams)
    return res.data.data
  }
}
