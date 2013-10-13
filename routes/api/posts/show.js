request = require('request');
var Blog = require('tumblr').Blog

module.exports = function(req, response, abc){
    blog = new Blog('aarongundel.tumblr.com', {'consumer_key': process.env.TUMBLR_KEY});
    blog.text({id: req.params.id}, function(error, data){
        if(error){
            console.log(error);
        } else {
            if(data.posts.length){
                response.send(data.posts[0]);
            } else {
                response.send({})
            }
            response.send(data.posts);
        }
    });
/*
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
    });*/
    
};