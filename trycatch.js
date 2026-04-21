//trajtimi ne jQuery
jQuery.readyException = function( error ) {
console.error( error );
};

//trajtimi ne JavaScript
try {
var x = -1;
if (x<0) {
throw "smallerthan0Error"; //ok bro just throwing anything i guess
}
}
catch(err) {
alert (err + "was thrown");
}
finally{
    console.log("Finally!");
}