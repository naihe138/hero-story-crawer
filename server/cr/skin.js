import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

export const getSkin = async() => {
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
  writeFileSync('./crawerdb/skin.json', JSON.stringify(result, null, 2), 'utf-8')
}

getSkin()
