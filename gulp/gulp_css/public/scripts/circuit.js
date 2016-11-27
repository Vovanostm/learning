"use strict";
function wire(_cns,x1,y1,x2,y2){
  _cns.beginPath();
  _cns.moveTo(x1,y1);
  _cns.lineTo(x2,y2);
  _cns.stroke();
}
function resistor(_cns,x,y,vert=0,width=20,height=60){
  _cns.beginPath();
  _cns.moveTo(x,y);
  if (vert){
    _cns.lineTo(x-width/2,y);
    _cns.lineTo(x-width/2,y+height);
    _cns.lineTo(x+width/2,y+height);
    _cns.lineTo(x+width/2,y);
    _cns.closePath();
    _cns.stroke();
  }
  else{
    _cns.lineTo(x,y-width/2);
    _cns.lineTo(x+height,y-width/2);
    _cns.lineTo(x+height,y+width/2);
    _cns.lineTo(x,y+width/2);
    _cns.closePath();
    _cns.stroke();

  }
}
function voltmeter(_cns,x,y, sim="V", radius=20){
  _cns.moveTo(x+radius,y);
  _cns.arc(x,y,radius,0,2*Math.PI);

  _cns.stroke();
  _cns.fillStyle="#222";
  _cns.font = "20px sans-serif";
  _cns.fillText(sim,x-7,y+7);
}
function ampermeter(_cns,x,y,sim="A", radius=20){
  _cns.moveTo(x+radius,y);
  _cns.arc(x,y,radius,0,2*Math.PI);
  _cns.stroke();
  _cns.fillStyle="#222";
  _cns.font = "20px sans-serif";
  _cns.fillText(sim,x-7,y+7);
}
