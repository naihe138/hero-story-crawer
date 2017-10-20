import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'koa-bodyparser'
import router from './middlwares/router'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5009

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env === 'production')

class Server {
  constructor() {
    this.app = new Koa()
    this.useMiddleWares(this.app)
  }
  useMiddleWares(app) {
    app.use(bodyParser())
    router(app)
  }
  start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
      const builder = new Builder(nuxt)
      builder.build().catch(e => {
        console.error(e) // eslint-disable-line no-console
        process.exit(1)
      })
    }

    this.app.use(ctx => {
      ctx.status = 200 // koa defaults to 404 when it sees that status is unset

      return new Promise((resolve, reject) => {
        ctx.res.on('close', resolve)
        ctx.res.on('finish', resolve)
        nuxt.render(ctx.req, ctx.res, promise => {
          // nuxt.render passes a rejected promise into callback on error.
          promise.then(resolve).catch(reject)
        })
      })
    })

    this.app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  }
}

const app = new Server()
app.start()
