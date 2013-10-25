var assert = require('assert');
var should = require('should');
var request = require('supertest');
//var api = require('./routes/apiRoutes');

describe('Routing', function(){
	var url = "http://localhost:3001"
	describe('Post', function(){
		it('should have more than one post', function(done){
			request(url)
				.get('/api/posts')
				.end(function(err, res){
					if(err){
						throw err;
					}
					res.should.have.status(200);
					res.should.have.property('body');
					res.body.should.have.property('posts')
					res.body.posts.length.should.be.above(1);
					//res.posts.length.should.be.above(1);
					done();
				});
		})
		it('should be capable of retrieving specific posts', function(done){
			request(url)
				.get('/api/posts/63042088922')
				.end(function(err, res){
					if(err){
						throw err;
					}
					res.should.have.status(200);
					res.should.have.property('body');
					res.body.should.have.property('post');
					res.body.post.should.have.property('title');
					//res.posts.length.should.be.above(1);
					done();
				});
		});

		it('should return 404 on posts that don\'t exist', function(done){
			request(url)
				.get('/api/posts/6304208892223')
				.end(function(err, res){
					if(err){
						throw err;
					}
					res.should.have.status(404);
					//res.posts.length.should.be.above(1);
					done();
				});
		});
	})
})