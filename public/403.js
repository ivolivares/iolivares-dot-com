window.requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var BigBrother = (function () {

  "use strict";

  var CCTVCam = {
    viewPoint: {},
    angle: 0,
    newAngle: 0,
    translation: {},
    maxAngle: 0,
    minAngle: 0,

    init: function () {
      this.viewPoint = {
        x: 0,
        y: 0
      };
      this.angle = 0;
      this.newAngle = 0;
      this.translation = {
        x: 62.5,
        y: 92
      };
      this.maxAngle = 2.85;
      this.minAngle = -0.55;
    },

    draw: function () {
      // smooth movement of the cam. Thanks Andy!
      this.angle += (this.newAngle - this.angle) / 15;
      ctx.beginPath()
      // draw horizontal stab
      ctx.rect(0, 70, 10, 45);
      this.roundRect(9, 83.75, 10, 17.5, 2);
      ctx.rect(18.5, 90, 37, 5);
      // draw joint
      ctx.arc(this.translation.x, this.translation.y, 7.5, 0, 2 * Math.PI);
      ctx.save();
      // translate to center of the joint
      ctx.translate(this.translation.x, this.translation.y);
      ctx.rotate(this.angle);
      // draw vertical stab
      ctx.rect(-2.5, -32.5, 5, 32.5);
      this.roundRect(-8.5, -37.5, 17.5, 6, 2);
      // draw cam
      ctx.rect(-32, -64, 80, 27.5);
      ctx.rect(48, -60, 5, 15);
      ctx.rect(52, -57.25, 4, 10);
      // restore initial state of canvas
      ctx.restore();
      ctx.fillStyle = '#333';
      ctx.fill();
    },
    update: function (_angle) {
      if (_angle < this.minAngle) {
        _angle = this.minAngle;
      }
      if (_angle > this.maxAngle) {
        _angle = this.maxAngle;
      }
      this.newAngle = _angle;
      // calculate absolute pos of the cam
      this.viewPoint.x = this.translation.x - (50 * Math.cos(this.angle + (90 * Math.PI / 180)));
      this.viewPoint.y = (this.translation.y + 25) - (50 * Math.sin(this.angle + (90 * Math.PI / 180)));

    },
    roundRect: function (x, y, width, height, radius) {
      var r = x + width;
      var b = y + height;
      ctx.moveTo(x + radius, y);
      ctx.lineTo(r - radius, y);
      ctx.quadraticCurveTo(r, y, r, y + radius);
      ctx.lineTo(r, y + height - radius);
      ctx.quadraticCurveTo(r, b, r - radius, b);
      ctx.lineTo(x + radius, b);
      ctx.quadraticCurveTo(x, b, x, b - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }
  }

  var canvas;
  var ctx;
  var WIDTH;
  var HEIGHT;
  var mouse;
  var isStart;

  var init = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = WIDTH = 300;
    canvas.height = HEIGHT = 300;
    mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    isStart = true;
    bindEventHandlers();
    CCTVCam.init();
    draw();
  }

  var bindEventHandlers = function () {
    document.onmousemove = function (e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
      isStart = false;
    };
  }

  var update = function () {
    var deltaX = mouse.x - CCTVCam.translation.x;
    var deltaY = mouse.y - (CCTVCam.translation.y + 25);
    // distance between mouse and joint of the cam
    var mag = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // only update cam if the mouse is further away as 50
    if (mag > 50 && mouse.x > 20) {
      var camPoint = CCTVCam.viewPoint;
      deltaX = mouse.x - camPoint.x;
      deltaY = mouse.y - camPoint.y;
      // calculate angle between cam and mouse
      var angleRad = Math.atan2(deltaY, deltaX);
      CCTVCam.update(angleRad);
    }
  }

  var draw = function () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    update();
    CCTVCam.draw();
    requestAnimFrame(draw);
  }

  return {
    init: init
  }
}());

BigBrother.init(); 