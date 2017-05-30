
let express = require('express');
let app = express();
let debug = require('debug')('log');
let os = require('os');
let accepts = require('accepts');
let useragent = require('useragent');
let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.sendFile(__dirname + "/index.html");
//fix inaccuracies of osplatform and type, currently shows linux...

let agent = useragent.parse(req.headers['user-agent']);
//console.log(req.headers['user-agent']);
let ip = req.connection.remoteAddress;
let ostype = os.type();
let osarch = os.arch();
let osplatform = os.platform();
let lang = accepts(req).languages();


let userInfo = { userIP: ip,
                 userOS: agent.os.family,
                 userLang: lang
                }

res.json(userInfo);
debug(userInfo);




});

app.listen(port, () =>{
  console.log('listening on ' + port);
})
