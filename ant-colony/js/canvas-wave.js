var canvas = document.getElementById('canvas');  
var ctx = canvas.getContext('2d');  
canvas.width = canvas.parentNode.offsetWidth;  
canvas.height = canvas.parentNode.offsetHeight;


//如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout  
window.requestAnimFrame = (function(){  
return  window.requestAnimationFrame       ||  
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame    ||  
        function( callback ){  
          window.setTimeout(callback, 1000 / 30);  
        };  
})();  
//初始角度为0  
var step = 0;  
//定义三条不同波浪的颜色  
var lines = ["rgba(255,255,255, 1)", "rgba(255,255,255, 0.5)", "rgba(255,255,255, 0.2)"];  
function loop(){  
    ctx.clearRect(0,0,canvas.width,canvas.height);  
    step++;  
    //画3个不同颜色的矩形  
    for(var j = lines.length - 1; j >= 0; j--) {  
        ctx.fillStyle = lines[j];  
        //每个矩形的角度都不同，每个之间相差45度  
        var angle = (step+j*60)*Math.PI/180;  
        var deltaHeight = Math.sin(angle) * 20;  
        var deltaHeightRight = Math.cos(angle) * 30;  
        ctx.beginPath();  
        ctx.moveTo(0, canvas.height/2+deltaHeight);  
        ctx.bezierCurveTo(canvas.width /2, canvas.height/2+deltaHeight-50, canvas.width / 2, canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight);  
        ctx.lineTo(canvas.width, canvas.height);  
        ctx.lineTo(0, canvas.height);  
        ctx.lineTo(0, canvas.height/2+deltaHeight);  
        ctx.closePath();  
        ctx.fill();  
    }  
    requestAnimFrame(loop);  
}  
loop(); 