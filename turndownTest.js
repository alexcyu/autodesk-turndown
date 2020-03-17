// require the http  module
var http = require('http');

// util module
// lets you write to the console
var util = require('util');

// Require the path module
// This lets you set paths for different types of data eg. images, js files
var path = require('path');

// Express.js
// A way of starting the Node server with routes enabled
var Express = require('express');
var expressApp = new Express();

// requrie the turndown module
var TurndownService = require('turndown');

// create a new turndown object
var turndownService = new TurndownService();


// URL module
// allows you to use functions from the URL module
var url = require('url');

// Node fileserver module
var fs = require('fs')

// Read the demofile1.html file as a string/text
htmlString = fs.readFileSync('demofile1.html', 'utf8');

// Convert the demofile1.html string into markdown
var markdown = turndownService.turndown(htmlString);


// Save the converted html as the specified markdown file
fs.writeFile('turndownTestMarkdown.markdown', markdown, function (err) {
    // If there is an error writing the file throw the error
    //     This stops the program and the program finds a catch to execute
    // If there is no error write 'Saved' to the console log
    if(err) throw err;
    console.log('Saved');
 });
