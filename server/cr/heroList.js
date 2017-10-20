import rp from 'request-promise'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'
// request 国外网站的时候使用本地的 VPN
// import Agent from 'socks5-http-client/lib/Agent'

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

export default getHeroStory
