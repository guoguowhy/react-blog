const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = await ctx.render('front/index', {
    
  })
})

router.get('/article', async (ctx, next) => {
    ctx.body = await ctx.render('front/article', {
      
    })
})

module.exports = router

