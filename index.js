var express =require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())
var messages =[
  {
    id: 1,
    title: 'Spiderman',
    rating: 7
  },
  {
    id: 2,
    title: 'Spiderman 2',
    rating: 7
  }
]
app.listen(3000,function(){
  console.log('listening on 3000')
})
app.get('/messages', function (req, res, next) {
  res.status(200).json({messages: messages});
});
app.post("/messages", function(request, response, next) {
	messages.push({userName: request.body.userName, message: request.body.message, time: new Date()});
	response.status(200).json({messages: messages})
});
