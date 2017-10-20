import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'
const Iconv = require('iconv').Iconv

const iconv = new Iconv('GBK', 'UTF-8')

export const fetchWordDetail = async(url, id) => {
  const options = {
    encoding: null,
    uri: url
  }
  const $ = await rp(options).then(body => {
    var result = iconv.convert(new Buffer(body, 'binary')).toString()
    return cheerio.load(result)
  })

  let title = $('.txtbox h2').text()
  let time = $('.txtbox .time').text() || ''
  let textContent = []
  $('.txtcon p').each(function () {
    textContent.push($(this).text())
  })

  let result = {
    title,
    time,
    textContent
  }
  writeFileSync('./server/crawerdb/worddetail' + id + '.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

export default fetchWordDetail
