import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

const getWord = async() => {
  const options = {
    uri: 'https://pvp.qq.com/act/a20160510story/origin.htm',
    transform: body => cheerio.load(body)
  }
  const $ = await rp(options)

  let result = []
  $('.cell_box .cell_left, .cell_right').each(function () {
    let time = $(this).find('.cell_title').text()
    let url = $(this).find('a').attr('href')
    let idArr = url.match(/\/(\d+).shtml/)
    let id = idArr[1]
    let title = $(this).find('a').attr('title')
    let img = $(this).find('img').attr('src')
    result.push({
      time,
      url,
      id,
      title,
      img
    })
  })
  writeFileSync('./server/crawerdb/word.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

export default getWord
