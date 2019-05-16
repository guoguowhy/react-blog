const router = require('koa-router')()

// router.get('/admin', async (ctx, next) => {
  // ctx.body = await ctx.render('admin/index', {
    
  // })
// })

// router.get('/admin/editArticle', async (ctx, next) => {
  // ctx.body = await ctx.render('admin/editArticle', {
    
  // })
// })

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//   }
// })

module.exports = router

