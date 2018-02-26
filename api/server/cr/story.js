// 引入相应的模块
import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

const Iconv = require('iconv').Iconv
const iconv = new Iconv('GBK', 'UTF-8')

// request 国外网站的时候使用本地的 VPN
// import Agent from 'socks5-http-client/lib/Agent'

// 爬取英雄列表
const getHeroStory = async() => {
  // request-promise的配置
  const options = {
    uri: 'https://pvp.qq.com/act/a20160510story/herostory.htm',
    // agentClass: Agent,
    // agentOptions: {
    //   socksHost: 'localhost',
    //   socksPort: 1080 // 本地 VPN 的端口，这里用的 shadowsocks
    // },
    transform: body => cheerio.load(body) // 转成相应的爬虫
  }

  // 爬取导航复制给cheerio的$对象
  const $ = await rp(options)
  let navArr = []
  let heroList = []
  $('#campNav li').each(function () {
    // 分析节点拿到数据
    const type = $(this).attr('data-camptype')
    const text = $(this).find('a').text()

    // push 到navArr数组中
    navArr.push({ type, text })
  })

  // 爬取英雄列表
  const hreodata = await rp({
    uri: 'https://pvp.qq.com/webplat/info/news_version3/15592/18024/23901/24397/24398/m17330/list_1.shtml'
  })

  // 数据处理
  let str = hreodata.replace('createHeroList(', '')
  str = str.substr(0, str.length - 1)
  let r = JSON.parse(str)
  heroList = r.data.filter(item => item)

  let result = {
    nav: navArr,
    heroList
  }

  // 写入文件
  writeFileSync('./server/crawerdb/heroList.json', JSON.stringify(result, null, 2), 'utf-8')

  return result
}

// 跟去英雄 id，和 url 爬取英雄的详细介绍
const getHeroDatail = async(url, _id) => {
  // 配置
  const option = {
    encoding: null,
    url
  }

  // 爬取英雄详情
  const $ = await rp(option).then(body => {
    // 字符乱码处理
    var result = iconv.convert(new Buffer(body, 'binary')).toString()
    return cheerio.load(result)
  })

  // 这里拿到$之后就像 jq那样子，根据文档就可以进行爬虫的数据处理了
  // 下面都是数据处理
  let heroName = ''
  let heroDetail = []
  let ht = ''
  let hc = ''
  if ($('#heroStory').length) {
    heroName = $('.hero_name pf').text()
    $('#heroStory p').each(function () {
      let text = $(this).text().trim()
      heroDetail.push({
        type: 'text',
        text: text
      })
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
        let text = $(this).text().trim()
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

  // 写入文件
  writeFileSync('./server/crawerdb/herodetail' + _id + '.json', JSON.stringify(result, null, 2), 'utf-8')
  return result
}

export default {
  getHeroStory,
  getHeroDatail
}
