import Koa from 'koa';
import Router from 'koa-router';
import koaWebpack from 'koa-webpack';

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'ok';
});

app.use(koaWebpack())
app.use(router.routes())

app.listen(process.env.PORT || 5000);
