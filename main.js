var date = document.querySelector('.year');
var d = new Date();
var year = d.getFullYear();
var h = d.getHours();
var m = d.getMinutes();
var mon = d.getMonth();
var day = d.getUTCDate();
date.innerHTML = `The Time  Today is  ${h}:${m} in the ${mon}th month of the current Year.<br> 2018 - ${year}`;
