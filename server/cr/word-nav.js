import rp from 'request-promise'
// import cheerio from 'cheerio'

import { writeFileSync } from 'fs'

const Iconv = require('iconv').Iconv

const iconv = new Iconv('GBK', 'UTF-8')

function tofromData(str, typestr) {
  str = str.replace(typestr, '')
  str = str.substr(0, str.length - 1)
  let data = JSON.parse(str)
  return data.data.filter(item => item)
}

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

  writeFileSync('./crawerdb/wordnav' + id + '.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

export default getWordNav
