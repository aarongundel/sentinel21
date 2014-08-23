Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Hi.  I'm Aaron.</h3>\n<p>We can go through the formalities first, I suppose.  Occupationally, I'm a programmer.  I specialize in web development, but I end up doing\nmany different things in the course of my job in San Jose.  Recreationally, I'm a runner and an outdoors kinda guy.  I run marathons, I hike,\nI backpack, and I try to enjoy life.</p>\n<p>Over the last couple of years, I have been in the process of taking a critical look at my life and figuring out what really matters.  Some of that\nis reflected in my blog.  Another large part of that is reflected in my faith (I'm a Christian, if you need to apply a label) and another is reflected in the relationships I desire to cultivate in the people around me.  I value authenticity, humility, and community -- though I don't\nclaim to be an expert in any of these things.  I'm still growing, still learning, and feel like I have a long way to go in my journey.</p>\n<p>You can look me up on <a href=\"https://twitter.com/sentinel21\">Twitter</a>, <a href=\"https://www.facebook.com/aaron.d.gundel\">Facebook</a>, or Skype (aaron.gundel) if you're interested.</p>");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("About Me");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Resume");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Posts");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Photos");
  }

  data.buffer.push("\n  <header>\n    <div class=\"column\">\n        <h1>Sentinel<img src=\"/images/logo.png\"></h1>\n        <img class=\"me\" src=\"/images/me.jpg\">\n    </div>\n    <div class=\"bg-nav\">\n        <div class=\"column\">\n            <nav>\n                <ul>\n                    <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li> \n                    <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "resume", options) : helperMissing.call(depth0, "link-to", "resume", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                    <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "posts", options) : helperMissing.call(depth0, "link-to", "posts", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                    <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "photos", options) : helperMissing.call(depth0, "link-to", "photos", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</header>\n<div class=\"images\">\n    <div class=\"column\">\n        <img class=\"ocean\" src=\"/images/ocean.jpg\">\n        <img class=\"switchback\" src=\"/images/switchback.jpg\">\n        <img class=\"mountain\" src=\"/images/mountain.jpg\">\n        <img class=\"running\" src=\"/images/running.jpg\">\n    </div>\n</div>\n<div class=\"content\">\n    <div class=\"column row\"></div>\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "loading", options) : helperMissing.call(depth0, "outlet", "loading", options))));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n<footer>\n    <div class=\"column\"><h6>&copy;2013 Aaron Gundel.  All Rights Reserved.  All views and commentary expressed on this site\n        are solely those of Aaron Gundel and do not reflect those of any past, present, or future employers, friends, or enemies.</h6></div>\n</footer>\n<script type=\"text/javascript\">\n\n  var _gaq = _gaq || [];\n  _gaq.push(['_setAccount', 'UA-39157912-1']);\n  _gaq.push(['_trackPageview']);\n\n  (function() {\n    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n  })();\n\n</script>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div style=\"margin: 30px auto; width: 1em\">LOADING...</div>");
  
});

Ember.TEMPLATES["photos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"photostream\">\n	<h3>Photostream</h3>\n	<div id=\"map\"></div>\n</div>");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashContexts = {'sitename': depth0};
  hashTypes = {'sitename': "STRING"};
  options = {hash:{
    'sitename': ("sentinel21")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.disqus || depth0.disqus),stack1 ? stack1.call(depth0, "id", options) : helperMissing.call(depth0, "disqus", "id", options))));
  return buffer;
  
});

Ember.TEMPLATES["posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    <h3>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</h3>\n    ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  
});

Ember.TEMPLATES["resume"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"resume\">\n	<h3>Aaron Gundel</h3>\n	<h4>Work Experience</h4>\n	<ul>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-3\"><a href=\"http://www.sjwater.com\">San Jose Water</a></div><div class=\"col-md-4\">2009 - Present</div>\n				</div>\n			</h5>\n			<h6>\n				<div class=\"row\">\n					<div class=\"col-md-3\">Senior Developer</div><div class=\"col-md-3\">2012 - Present</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-3\">GIS Developer</div><div class=\"col-md-3\">2009 - 2012</div>\n				</div>\n			</h6>\n			<p>\n				<em>\n					During my time at SJW, I've worked to improve the employee efficiency when \n					consuming GIS (mapping) and engineering data.  I've operated (built/maintained)\n					several application servers (including a GeoServer cluster) and built multiple\n					web applications for internal systems.  I've worked with .NET, PHP, JavaScript,\n					and several other languages on multiple platforms and operating systems.  I've\n					worked with the whole web stack, from database (MySQL, Postgres, Oracle, and SQL Server) \n					to server, to the client, and back again.  \n				</em>\n			</p>\n		</li>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-3\"><a href=\"http://www.vdr.com\">The vdR Group</a></div><div class=\"col-md-4\">2007 - 2009</div>\n				</div>\n			</h5>\n			<h6>\n				<div class=\"row\">\n					<div class=\"col-md-3\">Intern</div><div class=\"col-md-3\">February 2007 - May 2007</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-3\">Consentra Developer</div><div class=\"col-md-3\">May 2007 - Jan 2008</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-md-3\">LiveLink Developer</div><div class=\"col-md-3\">Jan 2008 - Jan 2009</div>\n				</div>\n			</h6>\n			<p>\n				<em>\n					The vdR Group graciously gave me a start in software development starting with\n					an internship in early 2007.  My worked focused on the construction and maintenance\n					of a .NET based content management system at first, but I shifted to developing\n					extensions for Opentext Livelink.  In this context, I worked on both ends of the\n					web stack to ensure a good user experience from end to end.  \n				</em>\n			</p>\n		</li>\n	</ul>\n	<h4 class=\"header-spacing\">Education</h4>\n	<ul>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-3\"><a href=\"http://www.biola.edu/\">Biola University</a></div><div class=\"col-md-3\">2004 - 2007</div>\n				</div>\n			</h5>\n			<h6>\n				<div class=\"row\">\n					<div class=\"col-md-3\">Bachelor of Science</div><div class=\"col-md-3\">Computer Science</div>\n				</div>\n			</h6>\n			<em>I graduated Magna Cum Laude from Biola University in 2007 with a Bachelor of Science in Computer\n				Science.  While at Biola, I worked several computer science related jobs at the university, including\n			    technical support, subnet administration, and teaching assistant in CS courses. </em>\n		</li>\n	</ul>\n	<h4 class=\"header-spacing\">Skillset</h4>\n	<ul>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-3\">Front End Development</div>\n				</div>\n			</h5>\n			<em>HTML5, CSS, JavaScript [jQuery, Ember.js, Backbone, Bootstrap, etc.]</em>\n		</li>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-4\">Server Side Development</div>\n				</div>\n			</h5>\n			<em>.NET [C#, ASP.NET, ASP.NET MVC, WCF], PHP [ExpressionEngine], Node.js [Express.js, Socket.io, Grunt, etc.]</em>\n		</li>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-4\">Database Wizardry</div>\n				</div>\n			</h5>\n			<em>Oracle, MySQL, PostgreSQL, SqlServer</em>\n		</li>\n		<li>\n			<h5>\n				<div class=\"row\">\n					<div class=\"col-md-4\">Miscellaneous</div>\n				</div>\n			</h5>\n			<em>Git, SVN, Linux based OSes, OSX, Windows Servers, Windows Desktop Development, and more!</em>\n		</li>\n	</ul>\n	<div>&nbsp;</div>\n</div>");
  
});