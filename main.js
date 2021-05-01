var last_x
var last_y
var current_x
var current_y
var canvas=document.getElementById("canvas")
var context=canvas.getContext("2d")
var colour = "red"
var line_width = 3
var screen_width=screen.width
var new_width=screen_width-70
var new_height=screen_width-300

if(screen_width<992){
   canvas.width=new_width
    canvas.height=new_height
   }

canvas.addEventListener("touchstart",ts)
function ts (e){
    colour = document.getElementById("colour").value
    line_width = document.getElementById("width").value
    last_x=e.touches[0].clientX-canvas.offsetLeft
    last_y=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove",tm)
function tm(e){
 current_x = e.touches[0].clientX-canvas.offsetLeft
    current_y = e.touches[0].clientY-canvas.offsetTop
    
    context.beginPath()
    context.strokeStyle=colour
    context.lineWidth=line_width
    context.moveTo(last_x,last_y)
    context.lineTo(current_x,current_y)
    context.stroke()
    last_x=current_x
    last_y=current_y
}

function clearArea(){
    context.clearRect(0,0,canvas.width,canvas.height)
}