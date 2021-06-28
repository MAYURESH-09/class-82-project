var canvas=document.getElementById("canvas") ;
ctx = canvas.getContext("2d") ;

var color1 = "red" ;

ctx.beginPath() ;
ctx.strokeStyle= color1 ;
ctx.lineWidth=2 ;
ctx.arc(200 ,200  ,60 ,0 , 2*Math.PI) ;
ctx.stroke() ;

canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e)
{
 mouse_x=e.clientX-canvas.offsetLeft ;
 mouse_y=e.clientY-canvas.offsetTop ;
 circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
   ctx.beginPath() ;
   ctx.strokeStyle= color1 ;
   ctx.lineWidth=2 ;
   ctx.arc(mouse_x,mouse_y  ,60 ,0 , 2*Math.PI) ;
   ctx.stroke() ;
}
