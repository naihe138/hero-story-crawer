import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

export const getVoiceDetail = async(id) => {
  const options = {
    uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/hid' + id + '.json',
  }
  let result = await rp(options)
  result = JSON.parse(result)
  writeFileSync('./crawerdb/voice-' + id + '.json', JSON.stringify(result, null, 2), 'utf-8')
}

getVoiceDetail(187)
