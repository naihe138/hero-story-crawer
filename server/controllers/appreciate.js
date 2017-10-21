// 鉴赏 爬虫 api

import fs from 'fs'
import { resolve } from 'path'
import Appreciate from '../cr/appreciate'

const resolvePath = url => resolve(__dirname, url)

const fetchSkin = async(ctx, next) => {
  let isNew = ctx.query.isNew
  let filePath = resolvePath('../crawerdb/skin.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await Appreciate.getSkin()
  }
  ctx.body = {
    success: true,
    data: result
  }
}

const fetchVoiceNav = async(ctx, next) => {
  let isNew = ctx.query.isNew

  let filePath = resolvePath('../crawerdb/voice-nav.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await Appreciate.getVoiceNav()
  }
  ctx.body = {
    success: true,
    data: result
  }
}

const fetchVoiceDetail = async(ctx, next) => {
  let prams = ctx.query
  let id = prams.id
  let isNew = prams.isNew

  let filePath = resolvePath('../crawerdb/voice-' + id + '.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await Appreciate.getVoiceDetail(id)
  }

  ctx.body = {
    success: true,
    data: result
  }
}

const fetchMusic = async(ctx, next) => {
  let prams = ctx.query
  let isNew = prams.isNew

  let filePath = resolvePath('../crawerdb/music.json')
  let exists = fs.existsSync(filePath)

  let result = null

  if (exists && !isNew) {
    result = await fs.readFileSync(filePath)
    result = result.toString()
    result = JSON.parse(result)
  } else {
    result = await Appreciate.getMusic()
  }

  ctx.body = {
    success: true,
    data: result
  }
}

export default {
  fetchSkin,
  fetchVoiceNav,
  fetchVoiceDetail,
  fetchMusic
}
