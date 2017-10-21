import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

const Iconv = require('iconv').Iconv
const iconv = new Iconv('GBK', 'UTF-8')

// request 国外网站的时候使用本地的 VPN
// import Agent from 'socks5-http-client/lib/Agent'

// 爬取英雄列表
const getHeroStory = async() => {
  const options = {
    uri: 'https://pvp.qq.com/act/a20160510story/herostory.htm',
    // agentClass: Agent,
    // agentOptions: {
    //   socksHost: 'localhost',
    //   socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
    // },
    transform: body => cheerio.load(body)
  }

  const $ = await rp(options)
  let navArr = []
  let heroList = []
  $('#campNav li').each(function () {
    const type = $(this).attr('data-camptype')
    const text = $(this).find('a').text()
    navArr.push({ type, text })
  })

  const hreodata = await rp({
    uri: 'https://pvp.qq.com/webplat/info/news_version3/15592/18024/23901/24397/24398/m17330/list_1.shtml'
  })
  let str = hreodata.replace('createHeroList(', '')
  str = str.substr(0, str.length - 1)
  let r = JSON.parse(str)
  heroList = r.data.filter(item => item)

  let result = {
    nav: navArr,
    heroList
  }
  writeFileSync('./server/crawerdb/heroList.json', JSON.stringify(result, null, 2), 'utf-8')

  return result
}

// 爬取英雄的详细介绍
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

export default {
  getHeroStory,
  getHeroDatail
}
