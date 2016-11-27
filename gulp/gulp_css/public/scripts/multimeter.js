"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ampermeter = document.querySelectorAll('.ampermeter');
for (var i = 0; i < ampermeter.length; i++) {
 ampermeter[i].current = 0;
 ampermeter[i].max = 100;
 ampermeter[i].min = 0;
 ampermeter[i].label = "mA";
}

function redraw_amp() {
 for (var i = 0; i < ampermeter.length; i++) {
  var ac = ampermeter[i].getContext("2d"),
      val = ampermeter[i].current,
      _mx = ampermeter[i].max,
      _w = 260,
      _h = 140,
      _l = 20,
      _t = 5;
  ac.clearRect(0, 0, 300, 150);
  ac.beginPath();
  ac.moveTo(_l, _t);
  ac.lineTo(_l + _w, _t);
  ac.lineTo(_l + _w, _t + _h);
  ac.lineTo(_l, _t + _h);
  ac.lineTo(_l, _t);
  ac.stroke();
  var _dx = _w / 2 + _l,
      _dy = _h / 2 + _t + 40;
  var _ang = 0;
  ac.font = "10px sans-serif";
  var counter = 0;
  for (var j = 0; j <= _mx / 10; j += _mx / 200) {
   var _j = Math.round(j);
   _ang = (160 - j * 10 / _mx * 160 + 10) / 180 * Math.PI;
   ac.moveTo(_dx + 70 * Math.cos(_ang), _dy - 70 * Math.sin(_ang));
   if (counter % 2 == 0) {
    ac.lineTo(_dx + 85 * Math.cos(_ang), _dy - 85 * Math.sin(_ang));
    ac.fillText(Math.round(j * 10), _dx - 3 + 90 * Math.cos(_ang), _dy - 90 * Math.sin(_ang));
   } else ac.lineTo(_dx + 80 * Math.cos(_ang), _dy - 80 * Math.sin(_ang));
   counter++;
  }
  ac.moveTo(_dx, _dy);
  _ang = (160 - val / _mx * 160 + 10) / 180 * Math.PI;
  var _rds = 70;
  ac.lineTo(_dx + _rds * Math.cos(_ang), _dy - _rds * Math.sin(_ang));
  ac.stroke();
  ac.font = "20px monospace";
  ac.fillText(ampermeter[i].label, _dx - 10, _dy - 20);
 }
}
redraw_amp();
var voltmeter = document.querySelectorAll('.voltmeter');
for (var i = 0; i < voltmeter.length; i++) {
 voltmeter[i].voltage = 0;
 voltmeter[i].max = 100;
 voltmeter[i].min = 0;
}

function redraw_volt() {
 for (var i = 0; i < voltmeter.length; i++) {
  var ac = voltmeter[i].getContext("2d"),
      val = voltmeter[i].voltage,
      _mx = voltmeter[i].max,
      _w = 260,
      _h = 140,
      _l = 20,
      _t = 5;
  ac.clearRect(0, 0, 300, 150);
  ac.beginPath();
  ac.moveTo(_l, _t);
  ac.lineTo(_l + _w, _t);
  ac.lineTo(_l + _w, _t + _h);
  ac.lineTo(_l, _t + _h);
  ac.lineTo(_l, _t);
  ac.stroke();
  var _dx = _w / 2 + _l,
      _dy = _h / 2 + _t + 40;
  var _ang = 0;
  ac.font = "10px sans-serif";
  var counter = 0;
  for (var j = 0; j <= _mx / 10; j += _mx / 200) {
   var _j = Math.round(j);
   _ang = (160 - j * 10 / _mx * 160 + 10) / 180 * Math.PI;
   ac.moveTo(_dx + 60 * Math.cos(_ang), _dy - 60 * Math.sin(_ang));
   if (counter % 2 == 0) {
    ac.lineTo(_dx + 75 * Math.cos(_ang), _dy - 75 * Math.sin(_ang));
    ac.fillText(Math.round(j * 10), _dx - 4 + 80 * Math.cos(_ang), _dy - 80 * Math.sin(_ang));
   } else ac.lineTo(_dx + 70 * Math.cos(_ang), _dy - 70 * Math.sin(_ang));
   counter++;
  }
  ac.moveTo(_dx, _dy);
  _ang = (160 - val * 160 / _mx + 10) / 180 * Math.PI;
  var _rds = 70;
  ac.lineTo(_dx + _rds * Math.cos(_ang), _dy - _rds * Math.sin(_ang));
  ac.stroke();
  ac.font = "20px monospace";
  ac.fillText("V", _dx - 5, _dy - 20);
 }
}
redraw_volt();

var barometr = document.querySelectorAll('.barometr');
for (var i = 0; i < barometr.length; i++) {
 barometr[i].preassure = 0;
 barometr[i].max = 1;
 barometr[i].min = 0;
}

function redraw_barom() {
 for (var i = 0; i < barometr.length; i++) {
  var ac = barometr[i].getContext("2d"),
      val = barometr[i].preassure,
      _mx = barometr[i].max,
      _w = 260,
      _h = 140,
      _l = 20,
      _t = 5;
  var can_img = document.createElement("img");
  can_img.src = "/img/multimeter/barom.png";
  ac.clearRect(0, 0, 300, 150);
  ac.drawImage(can_img, 75, 0, 150, 150);
  //   ac.beginPath();
  //   ac.moveTo(_l,_t);
  //   ac.lineTo(_l+_w,_t);
  //   ac.lineTo(_l+_w,_t+_h);
  //   ac.lineTo(_l,_t+_h);
  //   ac.lineTo(_l,_t);
  //   ac.stroke();
  var _dx = _w / 2 + _l,
      _dy = _h / 2 + _t - 16;
  var _ang = 0;
  // ac.font = "14px sans-serif";
  // var counter = 0;
  // for (var j = 0; j <= _mx/10; j+=(_mx/200)){
  //   var _j=Math.round(j);
  //   _ang = (160 - j*10 / _mx * 160 + 10)/180*Math.PI;
  //   ac.moveTo(_dx+60*Math.cos(_ang), _dy-60*Math.sin(_ang));
  //   if (counter%2==0) {
  //     ac.lineTo(_dx+75*Math.cos(_ang), _dy-75*Math.sin(_ang));
  //     ac.fillText(Math.round(j*10), _dx-3+80*Math.cos(_ang), _dy-80*Math.sin(_ang));
  //   }
  //   else ac.lineTo(_dx+70*Math.cos(_ang), _dy-70*Math.sin(_ang));
  //   counter++;
  // }
  ac.beginPath();
  ac.moveTo(_dx, _dy);
  _ang = (270 - val / _mx * 270 - 46) / 180 * Math.PI;
  var _rds = 48;
  ac.lineTo(_dx + _rds * Math.cos(_ang), _dy - _rds * Math.sin(_ang));
  ac.stroke();
  // ac.clearRect(0,0,300,150);

  // ac.font = "20px monospace";
  // ac.fillText("V", _dx-5, _dy-20);
 }
}
redraw_barom();

var Multimeter = function () {
 function Multimeter() {
  var canvas = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
  var metric = arguments.length <= 2 || arguments[2] === undefined ? "V" : arguments[2];

  _classCallCheck(this, Multimeter);

  this.canvas = canvas;
  this.value = 0;
  this.max = max;
  this.min = 0;
  this.metric = metric;
  this.width = 300;
  this.height = 150;
  this._w = this.width - 40;
  this._h = this.height - 10;
  this._l = (this.width - this._w) / 2;
  this._t = (this.height - this._h) / 2;
  this.rds = 70;
 }

 _createClass(Multimeter, [{
  key: "redraw",
  value: function redraw() {
   var ac = this.canvas.getContext("2d"),
       val = this.value,
       _mx = this.max,
       _l = this._l,
       _h = this._h,
       _t = this._t,
       _rds = this.rds,
       _w = this._w;
   ac.clearRect(0, 0, this.width, this.height);
   ac.beginPath();
   ac.moveTo(_l, _t);
   ac.lineTo(_l + _w, _t);
   ac.lineTo(_l + _w, _t + _h);
   ac.lineTo(_l, _t + _h);
   ac.lineTo(_l, _t);
   ac.stroke();
   var _dx = this._w / 2 + _l,
       _dy = this._h / 2 + this._t + 40;
   var _ang = 0;
   ac.font = "10px monospace";
   var counter = 0;
   for (var j = 0; j <= 20; j++) {
    // var _j = Math.round(j*_mx/20);
    var _j = j;
    // рисуются линии
    _ang = (160 - _j * 160 / 20 + 10) / 180 * Math.PI;
    ac.moveTo(_dx + 60 * Math.cos(_ang), _dy - 60 * Math.sin(_ang));
    //если линяя чётная - пишется цифра
    if (counter % 2 == 0) {
     ac.lineTo(_dx + 75 * Math.cos(_ang), _dy - 75 * Math.sin(_ang));
     //рисуется цифра
     var number = Math.round(_j * _mx / 20 * 10) / 10;
     var smesh_x2 = number.toString().length * 3;
     ac.fillText(number, _dx - smesh_x2 + 85 * Math.cos(_ang), _dy - 85 * Math.sin(_ang));
    }
    //иначе - просто линяя
    else ac.lineTo(_dx + 70 * Math.cos(_ang), _dy - 70 * Math.sin(_ang));
    counter++;
   }
   ac.moveTo(_dx, _dy);
   _ang = (160 - val * 160 / _mx + 10) / 180 * Math.PI;
   ac.lineTo(_dx + _rds * Math.cos(_ang), _dy - _rds * Math.sin(_ang));
   ac.stroke();
   ac.font = "20px monospace";
   var smesh_x = this.metric.length * 5;
   ac.fillText(this.metric, _dx - smesh_x, _dy - 20);
  }
 }, {
  key: "val",
  set: function set(val) {
   this.value = val;
   this.redraw();
  }
 }]);

 return Multimeter;
}();