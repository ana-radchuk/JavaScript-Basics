﻿// Task02
// Create a function that returns ZIP code of any area code using 
// Yahoo! service: https://developer.yahoo.com/yql/
// Note: function should make JSONP request and may use jQuery
// See examples to this module for reference

// Arguments:
// Function accepts one argument, a string with area code

// Return result:
// Function should not return any data, it should replace inner 
// contents of an element with id "target" on a file "target.html"

// Sample:
// argument value: SFO
// return result written: 94128 

function m10task02(code){
    $.ajax({
        url: "https://developer.yahoo.com/yql/",
        jsonp: 'callback',
        dataType: 'jsonp',
        data: {
            q: "SELECT * from geo.places WHERE text=" + code,
            format: 'json'
        },
        success: function(response) {
            $('#target').html(response.query.results.place.postal.content);
        }
    });   
}



   