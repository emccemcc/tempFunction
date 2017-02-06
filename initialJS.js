


// Isnt' right but still a question to ask for later
/*
var fTemp = 0;
var cTemp = 0;

var tempConversion = function (fTemp, cTemp){
  var cTempConverstion = (fTemp - 32) * (5/9);
  var fTempConversion = (cTemp * 9/5) + 32;
  return [cTempConversion, fTempConversion];
}

console.log(tempConverstion[0]);
Remember to use array.push in order to get this idea working
*/



var temp = 0;
var unit = "";

function tempConversion (temp, unit){
  if (unit === "C"){
      temp = (temp - 32) * (5/9);
    return temp;
  }
  else if (unit === "F"){
    temp = (temp * (9/5)) + 32;
    return temp;
  }
   else {
    console.log("Not valid. Try again.");
  }
}

console.log(tempConversion(212,"C"));
