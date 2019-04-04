var lines = document.querySelectorAll('#brokenLinkTable tr:not(:first-child)');

var line_string = '﻿#,Problematic link,Server response,Page containing the link,Source viewer\n';
var i = 1;
lines.forEach((line) => {
  line_string += i++ + ',';
  var url = line.querySelector('td:nth-child(2) input');
  line_string += url.value + ',';
  var error = line.querySelector('td:nth-child(4) a');
  line_string += error.innerText + ',';
  var origin = line.querySelector('td:nth-child(3)>a');
  line_string += origin.getAttribute("href") + ',';
  var source = line.querySelector('td:nth-child(3) blink a');
  line_string += source.getAttribute("href");
  line_string += '\n';
});
console.log(line_string);
