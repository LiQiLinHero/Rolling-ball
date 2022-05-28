// 让小球向右下运动，遇到边缘后反弹

var ball = document.querySelector(".ball");
var disX = 2,
  disY = 2;

//获取屏幕的宽高

var w = document.documentElement.clientWidth,
  h = document.documentElement.clientHeight,
  //获取小球的宽高
  ew = ball.clientWidth,
  eh = ball.clientHeight;

// 设置随机数
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min)
}


// 设置随机背景颜色

function changeback(){
  ball.style.backgroundColor = 'rgb('+getRandom(0,200)+','+getRandom(0,200)+','+getRandom(0,200)+')';
}
//计算最大的宽高

var maxLeft = w - ew,
  maxTop = h - eh;

// 每隔20毫秒，改变小球的left和top值
setInterval(function () {
  var rect = ball.getBoundingClientRect();
  var x = rect.left,
    y = rect.top;
  var left = x + disX,
    top = y + disY;
  //控制小球的运动范围
  if (left > maxLeft) {
    left = maxLeft;
    disX = -disX;
    changeback();
  }
  if (left < 0) {
    left = 0;
    disX = -disX;
    changeback();
  }
  if (top < 0) {
    top = 0;
    disY = -disY;
    changeback();
  }
  if (top > maxTop) {
    top = maxTop;
    disY = -disY;
    changeback();
  }

  ball.style.left = left + "px";
  ball.style.top = top + "px";
}, 5);
