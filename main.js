"use strict";

var request = new XMLHttpRequest();
var url = 'https://kripple.atlassian.net/rest/api/latest/issue/MFP-1.json';
var user = 'kelly.m.ripple@gmail.com';
var password = 'motherlode';

request.open('GET', url, user, password);

// request.setRequestHeader('Authorization', 'Basic '+ btoa('admin:admin'));
// request.setRequestHeader('Content-Type', 'application/json');

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
		console.log("Success!");
  } else {
  	console.log("We reached our target server, but it returned an error with code " + request.status); 
  }
};

request.onerror = function() {
	console.log("There was a connection error of some sort");
};

request.send();