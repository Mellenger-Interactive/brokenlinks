var lines = document.querySelectorAll('#brokenLinkTable tr:not(:first-child)');
var line_string = '﻿#,Problematic link,Server response,Page containing the link,Source viewer\n';
var i = 1;
var link = document.createElement('a');
lines.forEach((line) => {
  line_string += i++ + ',';
  var url = line.querySelector('td:nth-child(2) input');
  line_string += url.value + ',';
  var error = line.querySelector('td:nth-child(5) a');
  line_string += error.innerText + ',';
  var origin = line.querySelector('td:nth-child(4)>a');
  line_string += origin.getAttribute("href") + ',';
  var source = line.querySelector('td:nth-child(4) blink a');
  line_string += source.getAttribute("href");
  line_string += '\n';
});
link.href = URL.createObjectURL(new Blob([line_string], { type: 'text/csv' }));
link.download = 'Broken Links - ' + document.querySelector('form#inputForm input[name="url_input"]').value + ' - ' + new Date().toISOString().slice(0, 10) + '.csv';
link.click();
