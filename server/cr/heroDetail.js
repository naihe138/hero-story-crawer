import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

const Iconv = require('iconv').Iconv

const iconv = new Iconv('GBK', 'UTF-8')

const getHeroDatail = async(url, _id) => {
  const option = {
    encoding: null,
    url
  }

  const $ = await rp(option).then(body => {
    var result = iconv.convert(new Buffer(body, 'binary')).toString()
    return cheerio.load(result)
  })
  let heroName = ''
  let heroDetail = []
  let ht = ''
  let hc = ''
  if ($('#heroStory').length) {
    heroName = $('.hero_name pf').text()
    $('#heroStory p').each(function () {
      heroDetail.push($(this).text())
    })
  } else if ($('.textboxs').length) {
    $('.textboxs p').each(function () {
      if ($(this).find('img').length) {
        let src = $(this).find('img').attr('src')
        heroDetail.push({
          type: 'img',
          text: 'https:' + src
        })
      } else {
        let text = $(this).text()
        heroDetail.push({
          type: 'text',
          text: text
        })
      }
    })
  }
  let hStr = ($('#history_content').text()).replace(/(^\s+)|(\s+$)/g, '');

  if (hStr.length > 0) {
    ht = $('.history_story h3').text()
    hc = $('#history_content').text()
  }
  let result = {
    heroName,
    heroDetail,
    historyTitle: ht,
    historyContent: hc
  }
  writeFileSync('./server/crawerdb/herodetail' + _id + '.json', JSON.stringify(result, null, 2), 'utf-8')

  return result
}

export default getHeroDatail
