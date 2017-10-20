import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

export const getVoice = async() => {
  const options = {
    uri: 'http://game.gtimg.cn/images/yxzj/wtc_static_yxzj/datas/data_zlk_ylzj.json',
  }
  let result = await rp(options)
  result = JSON.parse(result)
  writeFileSync('./crawerdb/voice.json', JSON.stringify(result, null, 2), 'utf-8')
}

getVoice()
