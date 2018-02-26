module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '王者荣耀故事站',
    titleTemplate: '王者荣耀故事站',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '王者荣耀故事站' },
      { hid: 'keywords', name: 'keywords', content: '前端开发，JavaScript, Node, Vue，nuxt' },
      { name: 'author', content: '370215230@qq.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [{
    src: 'plugins/lazylod.js',
    ssr: false
  }],
  /*
   ** Global CSS
   */
  css: ['~static/css/main.css'],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  cache: {
    max: 1000,
    maxAge: 900000
  }
}
