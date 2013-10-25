var Blog = require('tumblr').Blog

module.exports = function(req, response, abc){
    blog = new Blog('aarongundel.tumblr.com', {'consumer_key': process.env.TUMBLR_KEY});
    blog.text({id: req.params.id}, function(error, data){
        if(error){
            console.log(error);
            response.status('404').send('Not Found');
        } else {
            if(data.posts.length){
                response.send({'post': data.posts[0]});
            } else {
                response.send({})
            }
        }
    });
};