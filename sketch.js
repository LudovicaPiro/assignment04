function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
  textFont('Georgia')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {  

    if (hour()>12) {var hour12 = hour()-12;}
    else { hour12 = hour() }

    if(hour()<6||hour()>19){var cielo= "#126180";}
    else{ cielo= "#b2ffff";} 
  
    background(cielo); 
    textSize(16);
  // text(string, x, y)
  fill("#ff9966");
  text('la notte cambia colore!!',width*0.03,height/15);
    translate(width/2,height/2);

 // seconds
 // clockHand(second(),60,10,270,"#ff355e")
    push();
    var tetha=map(second(), 0, 60, 0, 360);
    rotate(tetha);
    stella(-width/4);
    pop();
  
  // minutes
  clockHand(minute(),60,25,width/5,"#ff355e") //"#4a646c"
  
  // hours

  clockHand(hour12,12,50,width/7,"#cd5b45")

}

function clockHand(timeValue,range,size,radius,col){

  push()
  var angle = map(timeValue,0,range,-90,270)
  noFill()
  noStroke()
  fill(col)
  if (angle != -90) {arc(0,0,radius*2,radius*2,-90,angle,PIE) }

//disco centrale
  if(hour()<6||hour()>19){var astro="#f5f5f5"
                          var cielo= "#00008b";}

    else{astro="#fcd20b";
          cielo= "#b2ffff";}
  fill(astro);
  ellipse(0,0,radius*2-20,radius*2-20)
  pop()

} 

/*  function batuffolo(xC, yC, diametro){ fill("#ffc9cc");
                              ellipse(xC, Yc, diamero);}
    function nuvola(); batuffolo()
*/
function stella(raggio) { push();
                          translate(0, -width/3-height/20);
                          rotate(30); 
                          for (var i = 0; i < 360; i+=60)
                                                           {
                                                             push(); 
                                                            // var colore="#f0ffff";
                                                            if(hour()<6||hour()>19) { var colore="#f0ffff";}
                                                            else{ colore=" #ff878d"}
                                                             fill(colore);
                                                             noStroke();
                                                             rotate(i);
                                                             triangle(-width/20, 0, width/20, 0, 0, 16*sin(60) );
                                                             pop();
  
                                                            }
                         pop();
                          
                         if(hour()<6||hour()>19) { var astro="#f5f5f5"
                                                   var cielo= "#00008b";}
  
                         else{astro="#fcd20b";
                        cielo= "#b2ffff";}
                         fill(astro);
                         noStroke()
                         ellipse(0,0,raggio*2-20,raggio*2-20)
                        }
