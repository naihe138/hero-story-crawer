import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

const getSkin = async() => {
  const options = {
    encoding: null,
    uri: 'https://pvp.qq.com/act/a20160510story/appreciateSkin.htm',
    transform: body => cheerio.load(body)
  }
  const $ = await rp(options)

  let result = []
  $('.img-list-wp li').each(function () {
    let url = $(this).find('a').attr('href')
    let title = $(this).find('img').attr('title')
    let img = $(this).find('img').attr('src')
    result.push({
      url,
      title,
      img
    })
  })
  writeFileSync('./server/crawerdb/skin.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

const getVoiceNav = async() => {
  const options = {
    uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/data_zlk_yyjsyx.json'
  }
  let result = await rp(options)
  result = JSON.parse(result)
  writeFileSync('./server/crawerdb/voice-nav.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

const getVoiceDetail = async(id) => {
  const options = {
    uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/hid' + id + '.json'
  }
  let result = await rp(options)
  result = JSON.parse(result)
  writeFileSync('./server/crawerdb/voice-' + id + '.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

const getMusic = async() => {
  const options = {
    uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/data_zlk_ylzj.json'
  }
  let result = await rp(options)
  result = JSON.parse(result)
  writeFileSync('./server/crawerdb/music.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

export default {
  getSkin,
  getVoiceNav,
  getVoiceDetail,
  getMusic
}
