const router = require('koa-router')()

router.get('/article/add', async (ctx, next) => {
  ctx.body = {
    article: '123123'
  }
})

// router.get('/admin/editArticle', async (ctx, next) => {
//   ctx.body = await ctx.render('admin/editArticle', {
    
//   })
// })

module.exports = router