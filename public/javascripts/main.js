window.App = Ember.Application.create({
    rootElement: '#app'
});

App.Router.map(function(){
    this.route("about");
    this.route("resume", {path: "/about/resume"});
    this.resource("posts");
    this.resource("post", {path: "/post/:post_id"})
});

App.Post = DS.Model.extend({
    "blog_name": DS.attr('string'),
    "body": DS.attr('string'),
    "date": DS.attr('date'),
    "format": DS.attr("string"),
    "title": DS.attr("string")
});
App.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api'
})

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('about');
    }
});

App.PostsRoute = Ember.Route.extend({
    model: function(){
        var store = this.get('store');
        return store.find('post');
        //return Ember.$.getJSON('/api/posts/list');
    },
    setupController: function(controller, posts) {
        controller.set('content', posts);
    }
});

App.LoadingRoute = Ember.Route.extend({
    renderTemplate: function(){
        this.render('loading', {
            outlet: "loading",
            into: "application"
        });
    }
});

App.PostRoute = Ember.Route.extend({
    model: function(params){
        return Ember.$.getJSON('/api/posts/' + params.post_id);
    }
});

App.PostsIndexController = Ember.ArrayController.extend({

});