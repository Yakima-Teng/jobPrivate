const express = require('express');
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');
const templateHtml = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
const server = express();

let distPath = './dist'

const renderer = createBundleRenderer(require(`${distPath}/vue-ssr-server-bundle.json`), {
    runInNewContext: false,
    template: templateHtml,
    clientManifest: require(`${distPath}/vue-ssr-client-manifest.json`)
});

// 引入静态资源
server.use(express.static(path.join(__dirname, 'dist')))

// 分发路由
server.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    // 错误函数
    const handleError = err => {
        if (err.url) {
            res.redirect(err.url)
        } else if (err.code === 404) {
            res.status(404).send('404 | Page Not Found')
        } else {
            // Render Error Page or Redirect
            res.status(500).send('500 | Internal Server Error')
            console.error(`error during render : ${req.url}`)
            console.error(err.stack)
        }
    }

    const context = {
        title: 'header-nav',
        url: req.url
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            return handleError(err)
        }
        res.send(html);
    });
});

server.on('error', err => console.log(err));
server.listen(3000, () => {
    console.log(`vue ssr started at localhost:3000`)
});