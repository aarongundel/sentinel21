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
};