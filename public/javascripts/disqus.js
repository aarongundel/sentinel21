(function(){
    console.log('loaded disqus view');
    var disqusView = Em.View.extend({
        tagName: 'div',
        //controller: App.MapController,
        didInsertElement: function(){
            var disqus_shortname = this.get('shortname'),
                disqus_identifier = this.get('identifier');

            if(window.DISQUS) {
                DISQUS.reset({
                    reload: true,
                    config: function(){
                        this.page.identifier = disqus_identifier;
                        this.page.url = "http://" + window.hostname + "/posts/" + disqus_identifier;
                    }
                });
            } else {
                // Embed DISQUS code
                (function() {
                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                })();
            }
        },
        willDestroyElement: function(){
            DISQUS.reset({
                    reload: false
            });
        }
    });
    Ember.Handlebars.registerBoundHelper('disqus', function(value, options){
        var view = disqusView.create({
            shortname: options.hash.sitename,
            identifier: value
        }),
        // we need to render the thread div before calling disqus to transform.
        renderDV = function(){view.append()};
        setTimeout(renderDV, 100);
        return new Handlebars.SafeString('<div id="disqus_thread"></div>')
    });
})();