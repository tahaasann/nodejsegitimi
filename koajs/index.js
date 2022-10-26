const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = 3000;

router.get('/', (ctx) => {
    ctx.status = 200;
    ctx.body = '<h1>INDEX SAYFASINA HOŞGELDİNİZ!</h1>';
});

router.get('/hakkimda', (ctx) => {
    ctx.status = 200;
    ctx.body = '<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ!</h1>'
});

router.get('/iletisim', (ctx) => {
    ctx.status = 200;
    ctx.body = '<h1>ILETISIM SAYFASINA HOŞGELDİNİZ!</h1>'
});

router.get('(.*)', (ctx) => { // Eğer '*' kullanırsanız hata alırsınız. Yaptığım araştırma sonucunda kullanımın '(.*)' şeklinde olması gerekiyor.
    ctx.status = 404;
    ctx.body = '<h1>404 NOT FOUND!</h1>'
});

app.use(router.routes());

app.listen(port,() => {
    console.log(`SUNUCU PORT ${port}'DA BAŞLATILDI.`);
});
