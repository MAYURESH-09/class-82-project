var canvas=document.getElementById("canvas") ;
ctx = canvas.getContext("2d") ;
mouse_event = ""

var color1 = "red"  ;

canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e)
{
 mouse_event = "mousedown"
}
function circle(mouse_x,mouse_y)
{
   ctx.beginPath() ;
   ctx.strokeStyle= color1 ;
   ctx.lineWidth=2 ;
   ctx.arc(mouse_x,mouse_y  ,60 ,0 , 2*Math.PI) ;
   ctx.stroke() ;
}

canvas.addEventListener("mousemove",my_mouse_move) ;

function my_mouse_move(e)
{
   current_mouse_x=e.clientX-canvas.offsetLeft ;
   current_mouse_y=e.clientY-canvas.offsetTop ;

   if(mouse_event == "mousedown")
   {
      ctx.beginPath();
      ctx.strokeStyle = color1
      ctx.lineWidth = 2
      ctx.arc(current_mouse_x,current_mouse_y,60,0,2*Math.PI)
      ctx.stroke()
   }
}
canvas.addEventListener("mouseup",my_mouse_up)

function my_mouse_up()
{
   mouse_event = "mouseup"
}

canvas.addEventListener("mouseleave",my_mouse_leave)

function my_mouse_leave()
{
   mouse_event = "mouseleave"
}