const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = await ctx.render('index', {
    // components:['button']
  })
})

router.get('/edit', async (ctx, next) => {
  ctx.body = await ctx.render('edit', {
    
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
  }
})

module.exports = router

