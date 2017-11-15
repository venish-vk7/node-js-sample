var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})
app.get('/page1',function(req,res){
  res.sendFile(__dirname+'/pages/page1.html');
})
app.get('/about/:name',function(req,res){
  res.send(req.params.name)
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
