import History from '../cr/heroList'
import HeroDetail from '../cr/heroDetail'
import fs from 'fs'
import { resolve } from 'path'

const resolvePath = url => resolve(__dirname, url)

const getHeroList = async(ctx, next) => {
  let isNew = ctx.query.isNew
  let filePath = resolvePath('../crawerdb/heroList.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await History()
  }
  ctx.body = {
    success: true,
    data: result
  }
}

const getHeroDetail = async(ctx, next) => {
  let prams = ctx.request.body
  let id = prams.id
  let url = prams.url
  let isNew = prams.isNew

  let filePath = resolvePath('../crawerdb/herodetail' + id + '.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    console.log(1)
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await HeroDetail(url, id)
  }
  ctx.body = {
    success: true,
    data: result
  }
}

export default {
  getHeroList,
  getHeroDetail
}
