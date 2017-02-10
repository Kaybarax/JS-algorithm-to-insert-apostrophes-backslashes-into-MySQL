
'use strict'

//Some variables to play with
var ObjectOfSpecialChars = {};
var theStringInput = '';

//Function to get the "'" and \ special characters
const getSpecialChars = function(theStringInputParam) {

	ObjectOfSpecialChars = {};
	let len = theStringInputParam.length;
    
    for (var i = 0; i < len; i++) 
    {
    	if (theStringInputParam[i] === '\'' || theStringInputParam[i] === '\\') {
    		ObjectOfSpecialChars[i]=theStringInputParam[i];
    	}
	}
};

//Add insert method to the String object to sanitize the string
String.prototype.insert = function(what, index) {
    return index > 0 ? this.replace(new RegExp('.{' + index + '}'), '$&' + what) : what + this;
};

//Function to get final string to insert into MySQL
const processString = function(ObjectOfSpecialCharsParam){
	// body...
	let indexIncrementMonitor = 0;
	for(var key in ObjectOfSpecialCharsParam)
	{
		theStringInput = theStringInput.insert(ObjectOfSpecialCharsParam[key], parseInt(key)+indexIncrementMonitor);
		indexIncrementMonitor++;
	}
};

//For example
theStringInput = "Here's how to mind your P's \\ Q's without Hic's, for your insertion into MySQL";

getSpecialChars(theStringInput);

processString(ObjectOfSpecialChars);

console.log(theStringInput);

