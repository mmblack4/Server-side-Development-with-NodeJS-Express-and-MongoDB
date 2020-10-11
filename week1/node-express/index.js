const express = require('express');
const http = require('http');
const hostname = "localhost";
const port = 3000;

const morgan = require('morgan');
const bodyParser= require('body-parser');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/dishes/:dishId',dishRouter);

app.use('/promotions', promoRouter);
app.use('/promtions/:promotionId', promoRouter);

app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderId', leaderRouter);

app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is Node Express application.</h1></body></html>')
});
 const server= http.createServer(app);
 server.listen(port,hostname,()=>{
     console.log(`Server running at http://${hostname}:${port}/`)
 });