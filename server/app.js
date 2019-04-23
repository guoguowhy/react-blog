const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const render = require('koa-swig')
const co = require('co')
const path = require('path')
const routes = require('./config.routes')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-less')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/public'))

// app.use(views(__dirname + '/views', {
//   map : {html:'ejs'}
// }));

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),//视口路径
  autoescape: true,
  cache: 'memory', 
  ext: 'html',
  writeBody: false
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.use(cors());

routes(app)

module.exports = app
