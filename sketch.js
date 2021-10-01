var count=0;
var form;


function setup()
{
createCanvas(windowWidth, windowHeight);
form= new Form();
form.next2.hide();
}
function draw(){
background("black");
form.display();
}