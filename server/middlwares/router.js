/**
 * @file
 * @author 何文林
 * @date 2017/9/16
 */
import Router from 'koa-router'
import History from '../controllers/heroHistory'
import Word from '../controllers/word'
const router = app => {
  const router = new Router()

  // story
  router.get('/api/history', History.getHeroList)
  router.post('/api/heroDetail', History.getHeroDetail)

  // word
  router.get('/api/word', Word.getWordIndex)
  router.get('/api/wordNav', Word.fetchWordNav)
  router.get('/api/wordDetail', Word.fetchWordNav)

  // 鉴赏
  app.use(router.routes())
  app.use(router.allowedMethods())
}

export default router
