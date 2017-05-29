
let express = require('express');
let app = express();
let debug = require('debug')('log');
let os = require('os');
let accepts = require('accepts');
let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.sendFile(__dirname + "/index.html");

let ostype = os.type();
let osarch = os.arch();
let osplatform = os.platform();
let lang = accepts(req).languages();
let userInfo = { userIP: req.ip,
                 userOS: {osplatform,ostype,osarch},
                 userLang: lang
                }

res.json(userInfo);
debug(userInfo);



//debug(req.connection.remoteAddress);
});

app.listen(port, () =>{
  console.log('listening on ' + port);
})
