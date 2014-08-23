$(function(){
    var socket = io('http://www.sentinel21.com');
    socket.on('timerpress', function(data){
        if(data.nextEmail == "aaron")
        {
            $("#personLabel").addClass("aaron").text("Aaron's").removeClass("allyssa");
        }
        else
        {
            $("#personLabel").addClass("allyssa").text("Allyssa's").removeClass("aaron");
        }
    });
    $(".btn").on('click', function(evt){
        if($("#personLabel").hasClass("aaron"))
        {
            socket.emit('timerpress', {nextEmail: "allyssa"});
        } else {
            socket.emit('timerpress', {nextEmail: "aaron"});
        }
        return false;
    });
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    var red = getRandomInt(0, 255),
        green = getRandomInt(0, 255),
        blue = getRandomInt(0,255);

    var backgroundColor = "#" + pad(red.toString(16), 2) + pad(green.toString(16),2) + pad(blue.toString(16),2);
    console.log(backgroundColor);
    $("body").css({"backgroundColor":backgroundColor});

console.log(red+green+blue)
    if((red + green + blue) <382){
        $("body").css({"color":"#fff"});
    }
    else
    {
        $("body").css({"color": ""});
    }


});