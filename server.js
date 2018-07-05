const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const koaBody = require('koa-body')({ multipart: true });

const app = new Koa();
const router = new Router();


// serve happiness app from dist folder
app.use(serve(`${__dirname}/dist`));


// rest endpoint
router
  .get('/api/', (ctx) => {
    ctx.body = 'I am listening!';
    console.log('GET');
  })
  .post('/api/happiness', koaBody, (ctx) => {
    console.log(ctx.request.body);
    ctx.body = JSON.stringify(ctx.request.body, null, 2);
    console.log(ctx.body);
    ctx.status = 201;
  });
app.use(router.routes());

app.listen(8080);
