const express = require('express')
const app = express()
const port = 3000

app.get('/example', (req, res) => port = 3000)
app.get('/testapp', (req, res) => port = 4001)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const http = require('http');
// const httpProxy = require('http-proxy');
//
// const proxy = httpProxy.createProxyServer();
//
// proxy.on('error', function(e){
//   console.log("Proxy Error ", new Date(), e);
// })
//
// http.createServer((req,res)=> {
//
//   setResponseHeaders(req,res);
//
//   let host = req.headers.host;
//   console.log(host);
//   let hostParts = host.split('.');
//   let topDomain = hostParts.pop();
//   let domain = hostParts.pop();
//   let subDomain = hostParts.join('.');
//   let urlParts = req.url.split('/');
//
//   console.log('url part 1: ' + urlParts[1]);
//
//   let port;
//
//   if(subDomain == '' || subDomain == 'www'){
//     port = 4001;
//   }
//   else if (subDomain == 'example') {
//     port = 3000;
//   }
//   else if (urlParts[1] == 'example') {
//     console.log('inside example');
//     port = 3000;
//   }
//   else {
//     res.statusCode = 500;
//     res.end('Can not find you app!');
//   }
//   if(port){
//     proxy.web(req,res,{target:'ht'+'tp://127.0.0.1:' + port});
//   }
// }).listen(80)
//
// function setResponseHeaders(req,res){
//   res.oldWriteHead = res.writeHead;
//
//   res.writeHead = function(statusCode, headers){
//     res.setHeader('x-powered-by','Pelle');
//     res.oldWriteHead(statusCode, headers);
//   }
// }
