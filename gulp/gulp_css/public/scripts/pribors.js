"use strict";
var lb_bl = [];
var ranges = document.querySelectorAll('input[type="range"]');
for (var i = 0; i < ranges.length; i++){
 var cont = ranges[i].parentNode;
 lb_bl[i] = document.createElement('div');
 lb_bl[i].style.position="absolute";
 lb_bl[i].style.left="45%";
 lb_bl[i].style.bottom="-40px";
 lb_bl[i].style.padding="10px 20px";
 lb_bl[i].style.background="rgba(0,0,0,.6)";
 lb_bl[i].style.color="white";
 lb_bl[i].style.borderRadius="2px";
 lb_bl[i].style.display="none";
 lb_bl[i].innerHTML=ranges[i].value+" "+ranges[i].getAttribute('data-metric');
 cont.insertBefore(lb_bl[i],ranges[i]);
 ranges[i].num_el=i;
 ranges[i].addEventListener("mousemove", ranges_ms_over);
 ranges[i].addEventListener("mouseout", ranges_ms_out);
}
function ranges_ms_over() {
 lb_bl[this.num_el].style.display="block";
 lb_bl[this.num_el].innerHTML=this.value+" "+this.getAttribute('data-metric');
}
function ranges_ms_out() {
 lb_bl[this.num_el].style.display="none";
}

var switchers=document.querySelectorAll('.md-switcher');
for (i=0; i<switchers.length; i++){
 var track = document.createElement('div');
 track.classList.add('mdl-switch__track');
 var thumb = document.createElement('div');
 thumb.classList.add('mdl-switch__thumb');
 switchers[i].appendChild(track);
 switchers[i].appendChild(thumb);
}
