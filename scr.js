var request  = require('request');
var fs = require('fs');
var jsonexport = require('jsonexport');

var writeStream = fs.createWriteStream('jfile.json');
request('http://demo0495413.mockable.io/message', function (error,response,data) {
if (!error && response.statusCode ==200){
  // var data = body;
  writeStream.write(data);
  console.log(data);
  var reader = fs.createReadStream('jfile.json');
  var writer = fs.createWriteStream('out.csv');
  reader.pipe(jsonexport()).pipe(writer);
}
})
