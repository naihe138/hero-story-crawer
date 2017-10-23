/**
 * @file
 * @author 何文林
 * @date 2017/9/29
 */

import axios from 'axios'
const baseUrl = ''
  // const apiUrl = 'http://rap.taobao.org/mockjsdata/26934'

class Service {
  getHero() {
    return axios.get(`${baseUrl}/api/hero`)
  }
  getHeroDetail(prams) {
    return axios.post(`${baseUrl}/api/heroDetail`, prams)
  }
  getSkin() {
    return axios.get(`${baseUrl}/api/skin`)
  }
  getVoiceNav() {
    return axios.get(`${baseUrl}/api/voiceNav`)
  }
  getVoiceDetail(id) {
    return axios.get(`${baseUrl}/api/voiceDetail?id=${id}`)
  }
  getMusic() {
    return axios.get(`${baseUrl}/api/music`)
  }
  getWord() {
    return axios.get(`${baseUrl}/api/word`)
  }
  getWordNav(id) {
    return axios.get(`${baseUrl}/api/wordNav?id=${id}`)
  }
  getWordDetail(prams) {
    return axios.post(`${baseUrl}/api/wordDetail`, prams)
  }
}

export default new Service()
