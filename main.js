canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastPositionx, lastPositiony;
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
    console.log(mouseEvent);

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") 
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates are");
        //console.log("x = " + lastPositionx + " , y = " + lastPositiony);
        ctx.moveTo(lastPositionx, lastPositiony);
        console.log("Current position of x and y coordinates are");
        //console.log("x = " + current_position_x + " , y = " + current_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
        canvas = document.getElementById("myCanvas");
    }
    lastPositionx=current_position_x;
    lastPositiony=current_position_y;
}
var width = screen.width;
var newwidth = screen.width - 70;
var newheight = screen.height - 300;
if(width < 992) {
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    console.log("touchstart");
    lastPositionx = e.touches[0].clientX - canvas.offsetLeft;
    lastPositiony = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_position_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinates are");
    console.log("x = " + lastPositionx + " , y = " + lastPositiony);
    ctx.moveTo(lastPositionx, lastPositiony);
    console.log("Current position of x and y coordinates are");
    console.log("x = " + current_position_x + " , y = " + current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();
    lastPositionx = current_position_x;
    lastPositiony = current_position_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}