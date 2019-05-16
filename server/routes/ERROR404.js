const router = require('koa-router')()

router.all('*', async(ctx, next) => {
    // ctx.response.status = 404;
    // await ctx.render('ERROR404',{
    //     title : 'ERROR404'
    // });
})

module.exports = router
