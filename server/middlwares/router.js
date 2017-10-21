/**
 * @file
 * @author 何文林
 * @date 2017/9/16
 */
import Router from 'koa-router'
import Story from '../controllers/story'
import Word from '../controllers/word'
import Apprecite from '../controllers/appreciate'
const router = app => {
  const router = new Router()

  // story
  router.get('/api/history', Story.fetchHeroList)
  router.post('/api/heroDetail', Story.fetchHeroDetail)

  // word
  router.get('/api/word', Word.fetchWord)
  router.get('/api/wordNav', Word.fetchWordNav)
  router.post('/api/wordDetail', Word.fetchWordDetail)

  // 鉴赏
  router.get('/api/skin', Apprecite.fetchSkin)
  router.get('/api/voiceNav', Apprecite.fetchVoiceNav)
  router.get('/api/voiceDetail', Apprecite.fetchVoiceDetail)
  router.get('/api/music', Apprecite.fetchMusic)

  app.use(router.routes())
  app.use(router.allowedMethods())
}

export default router
