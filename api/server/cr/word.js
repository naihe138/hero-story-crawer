import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

const Iconv = require('iconv').Iconv
const iconv = new Iconv('GBK', 'UTF-8')

// 获取每一个世界起源
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

// 格式化数据
function tofromData(str, typestr) {
  str = str.replace(typestr, '')
  str = str.substr(0, str.length - 1)
  let data = JSON.parse(str)
  return data.data.filter(item => item)
}
// 获取某个世界的导航
export const getWordNav = async(url1, url2, id) => {
  let main = await rp({
    encoding: null,
    uri: url1
  }).then(body => {
    let result = iconv.convert(new Buffer(body, 'binary')).toString()
    return result
  })

  main = tofromData(main, 'jsonpCallfnBtn(')

  let sub = await rp({
    encoding: null,
    uri: url2
  }).then(body => {
    let result = iconv.convert(new Buffer(body, 'binary')).toString()
    return result
  })

  sub = tofromData(sub, 'jsonpCallfn(')

  let result = main.concat(sub)

  writeFileSync('./server/crawerdb/wordnav' + id + '.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

// 爬取每某一个导航下的内容
export const getWordDetail = async(url, id) => {
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

export default {
  getWord,
  getWordNav,
  getWordDetail
}
