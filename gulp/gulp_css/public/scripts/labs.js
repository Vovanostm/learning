"use strict";
var page_nav_menu = document.getElementById('page_content_js');
if (page_nav_menu) {
 var headers_2 = document.getElementsByTagName('h2');
 for (var i = 0; i < headers_2.length; i++) {
  var h2_list_item = document.createElement('li');
  h2_list_item.innerHTML = '<a href=#' + headers_2[i].id + '>' + headers_2[i].innerHTML;
  var headers_3 = document.getElementsByTagName('h3');
  if (headers_3.length > 0) {
   var h3_list = document.createElement('ol');
   for (var j = 0; j < headers_3.length; j++) {
    var h3_list_item = document.createElement('li');
    h3_list_item.innerHTML = '<a href=#' + headers_3[i].id + '>' + headers_3[i].innerHTML;
    h3_list.appendChild(h3_list_item);
   }
   h2_list_item.appendChild(h3_list);
  }
  page_nav_menu.appendChild(h2_list_item);
 }
}
