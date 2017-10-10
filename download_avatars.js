var request  = require('request');
var fs = require('fs');
var GITHUB_USER = "TylerNRobertson";
var GITHUB_TOKEN = "adafc4a537975c32ea2cf57312b80297b4ae4c40";
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'github-avatar-downloader'
    }
  };
  request(options, function(error, response, body){
    var users = JSON.parse(body);
    users.forEach(function (user){
      cb(user);
  })
  })
}
function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function (err) {                                   // Note 2
      throw err;
    })
    .on('response', function (response) {                           // Note 3
      console.log('Response Status Code: ', response.statusCode);
      console.log('Downloading images...');
    })
    .pipe(fs.createWriteStream('./avatars/ + filepath +.jpg'))               // Note 4
    .on('finish', function(){
      console.log('Downloads complete.');
    });
  }
function save(user){
  var login  = user['login'];
  var url = user['avatar_url'];
  downloadImageByURL(url, login)
}
