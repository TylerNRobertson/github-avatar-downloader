var request  = require('request');
var GITHUB_USER = "TylerNRobertson";
var GITHUB_TOKEN = "adafc4a537975c32ea2cf57312b80297b4ae4c40";
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  request.get(requestURL)
  .on('error', function (err) {                                   // Note 2
    throw err;
  })
}
getRepoContributors('jquery', 'jquery');
