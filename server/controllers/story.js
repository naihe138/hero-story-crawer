import Story from '../cr/story'
import fs from 'fs'
import { resolve } from 'path'

const resolvePath = url => resolve(__dirname, url)

const fetchHeroList = async(ctx, next) => {
  let isNew = ctx.query.isNew
  let filePath = resolvePath('../crawerdb/heroList.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await Story.getHeroStory()
  }
  ctx.body = {
    success: true,
    data: result
  }
}

const fetchHeroDetail = async(ctx, next) => {
  let prams = ctx.request.body
  let id = prams.id
  let url = prams.url
  let isNew = prams.isNew

  let filePath = resolvePath('../crawerdb/herodetail' + id + '.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    if (!(/^http/.test(url))) {
      url = 'https:' + url
    }
    result = await Story.getHeroDatail(url, id)
  }
  ctx.body = {
    success: true,
    data: result
  }
}

export default {
  fetchHeroList,
  fetchHeroDetail
}
