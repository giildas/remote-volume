var loudness = require('loudness')
var express = require('express')

var app = express()

var volume;

// init



const fs = require('fs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('.'));


app.get('/up', function (req, res) {
  changeVolume(5, function(vol) {
    res.send(vol.toString())
  })
})
app.get('/down', function (req, res) {
  changeVolume(-5, function(vol) {
    res.send(vol.toString())
  })
})

function changeVolume(inc, callback){
  loudness.getVolume( function (err, vol) {
    loudness.setVolume(vol + inc  , function (err) {
      if(!err) callback(vol + inc)
      else  callback(vol)
    });
  });
}

app.listen(3000, function() {
  console.log("Serveur écoute sur le port 3000");
})
