import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

export const getVoiceNav = async() => {
  const options = {
    uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/data_zlk_yyjsyx.json',
  }
  let result = await rp(options)
  result = JSON.parse(result)
  writeFileSync('./crawerdb/voice-nav.json', JSON.stringify(result, null, 2), 'utf-8')
}

getVoiceNav()
