var request = require('request');
var fs = require('fs');

request.get('')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Downloading images...');
       })
       .pipe(fs.createWriteStream('./avatars/download.jpg'))
       .on('finish', function(){
         console.log('Download complete.');
       });
