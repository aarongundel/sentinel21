//list all the posts
var Blog = require('tumblr').Blog

module.exports = function(req, response, abc){
    blog = new Blog('aarongundel.tumblr.com', {'consumer_key': process.env.TUMBLR_KEY});
    blog.text({}, function(error, data){
        if(error){
            console.log(error);
            response.send({"error": error})
        } else {
            response.send(data.posts);
        }
    });
};