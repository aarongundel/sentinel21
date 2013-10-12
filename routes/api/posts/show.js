request = require('request');

module.exports = function(req, response, abc){
    var options = {
        uri: 'https://api.tumblr.com/v2/blog/aarongundel.tumblr.com/posts?id=' + req.params.id + '&api_key=' + process.env.TUMBLR_KEY,
        method: 'GET',
        json: true
    }
    request(options, function(err, res, data){
        if(err){
            console.log(err);
            response.send({error: 'A lookup error has occurred.'});
        } else {
            if(data.response.posts.length)
            {
                response.send(data.response.posts[0]);
            } else
            {
                response.send({});
            }
        }
    });
    
};