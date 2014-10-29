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

    function ratio(val1, val2) {
        if(val1 > val2) {
            return val2/val1;
        } else {
            return val1/val2;
        }
    }

    var red = getRandomInt(0, 255),
        green = getRandomInt(0, 255),
        blue = getRandomInt(0,255);

    var bgLuminosity = Math.pow(red / 255, 2.2)*0.2126 + Math.pow(green / 255, 2.2)*0.7152 + Math.pow(blue / 255, 2.2)*0.07228,
        whiteLuminosity = 0.2126 + 0.7152 + 0.07228,
        darkLuminosity = Math.pow(85 / 255, 2.2)*0.2126 + Math.pow(85 / 255, 2.2)*0.7152 + Math.pow(85 / 255, 2.2)*0.07228;


    var backgroundColor = "#" + pad(red.toString(16), 2) + pad(green.toString(16),2) + pad(blue.toString(16),2);

    $("html").css({"backgroundColor":backgroundColor});

    if(ratio(bgLuminosity, whiteLuminosity) < ratio(bgLuminosity, darkLuminosity)){
        $("body").css({"color":"#fff"});
        $("#map").css({"borderColor":"#fff"})
    } else {
        $("body").css({"color": ""});
        $("#map").css({"borderColor":"#555"})
    }
});

/*

(L1+.05) / (L2+.05) where L is luminosity and is defined as .2126*R + .7152*G + .0722B using linearised R, G, and B values. 
Linearised R (for example) = (R/FS)^2.2 where FS is full scale value (255 for 8 bit color channels). L1 is the higher value (of text or background) and L2 is the lower value.*/