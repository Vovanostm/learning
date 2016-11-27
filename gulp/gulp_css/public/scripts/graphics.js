"use strict";
function graph(cns){
  var pointx = [],
      pointy = [],
      ct = cns.getContext("2d"),
      minx=null,
      miny=null,
      maxx=null,
      maxy=null;

  ct.width=300;
  ct.height=100;
  this.add = function add(x,y){
    pointx.push(x);
    pointy.push(y);
  }

  function resize(){
    for (var i = 0; i<pointx.length; i++){
      if (i==0){
        maxy = miny = pointy[i];
        maxx = minx = pointx[i];
      }
    }

    cns.width = Math.abs(maxx-minx);
    cns.height = Math.abs(maxy-miny);
  }
  this.draw = function draw(){
    // resize();
    minx=0;
    miny=0;
    ct.moveTo(pointx[0]-minx, pointy[0]-miny);
    for (var i = 0; i<pointx.length; i++){
      ct.lineTo(pointx[i]*100-minx, ct.height-pointy[i]*10-miny);
      // console.log(pointx[i]-minx, ct.height-pointy[i]-miny);
    }
    ct.stroke();
  }
}
