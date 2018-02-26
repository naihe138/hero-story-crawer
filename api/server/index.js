import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './middlwares/router'
import cors from 'koa-cors'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

class Server {
  constructor() {
    this.app = new Koa()
    this.useMiddleWares(this.app)
  }
  useMiddleWares(app) {
    app.use(bodyParser())
    app.use(cors({
      origin: '*'
    }))
    router(app)
  }
  start() {
    this.app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  }
}

const app = new Server()
app.start()