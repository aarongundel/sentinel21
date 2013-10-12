//list all the posts
request = require('request');

module.exports = function(req, response, abc){
    var options = {
        uri: 'https://api.tumblr.com/v2/blog/aarongundel.tumblr.com/posts?api_key=' + process.env.TUMBLR_KEY,
        method: 'GET',
        json: true
    }
    request(options, function(err, res, data){
        if(err){
            console.log(err);
            response.send('An error has occurred.');
        } else {
            response.send(data.response.posts);
        }
    });
    
};