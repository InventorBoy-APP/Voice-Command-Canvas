x = 0;
y= 0;


draw_circle =" ";
draw_rect = " ";


var speechrecognition=  window.webkitSpeechRecognition;
var recognition = new speechrecognition;


function start(){
    document.getElementById("status").innerHTML = " System is listening please speak the shape you would like to be drawn...";
    recognition.start();
}


recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Shape has been recognized as - " + content;
    if (content == "Circle"){
    x = Math.floor(Math.random()* 900);
    y = Math.floor(Math.random()* 600);
    document.getElementById("status").innerHTML = content + " is the shape being drawn... ";
    draw_circle ="set";
    }
    if (content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = content + " is the shape being drawn... "
        draw_rect = "set";


    }
}


function setup(){
    canvas =  createCanvas(900,600);
}


function draw(){
    if (draw_circle == "set"){
     radius = Math.floor(Math.random() * 100);
     circle(x,y,radius);
     document.getElementById("status").innerHTML = "The Shape That Is Drawn - Circle!";
     draw_circle = " ";
    }
    if (draw_rect == "set"){
        rect(x,y,44,64);
        document.getElementById("status").innerHTML = "The Shape That Is Drawn - Rectangle!";
        draw_rect = " "; 
       }
}