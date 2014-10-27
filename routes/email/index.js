var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO);

var emailSchema = mongoose.Schema({
    next: String,
    updated: { type: Date, default: Date.now }
})

var Email = mongoose.model('Email', emailSchema);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log("successfully connected!")
});

module.exports = function(io){
    return function(req, res){
        var nextEmail;
        Email.count(function(err, count){
            if(count){
                Email.findOne(function(err, status){
                    nextEmail = status.next;
                    res.render('email', { title: 'An Email Chess Timer', 'nextEmail': nextEmail});
                });
            } else {
                email = new Email({next: "aaron"});
                email.save();
            }
        });
        
        io.on('connection', function(socket){
            socket.on('timerpress', function(data){
                Email.count(function(err, count){
                    if(count) {
                        console.log("finding email object...")
                        Email.findOne(function(err, status){
                            console.log(status);
                            status.next = data.nextEmail;
                            Email.update({ id:status._id }, {$set: { next: data.nextEmail }});
                            status.save();
                            console.log('updated');
                            console.log(status);
                        });
                    } else {
                        email = new Email({next: data.nextEmail});
                        email.save();
                    }
                    io.sockets.emit('timerpress', data);
                });
            });

        });

    };
};