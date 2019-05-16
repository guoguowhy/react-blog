const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  
})

router.get('/edit', async (ctx, next) => {
  
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    name:'name',
    age:24
  }
})

module.exports = router