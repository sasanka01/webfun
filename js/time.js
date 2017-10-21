
var HOUR = 8;
var MINUTE = 10;
var PERIOD = "AM"


if (MINUTE > 30 && PERIOD == "AM")
{
  var str = "it's  " + (HOUR + 1) + " in the morning"
}

else
{
  var str = ("it's almost " + (HOUR + 1) + " in the morning")
}



  // var str = "it's in the evening."
// }else{
  // var str = "it's in the morning."
// }

console.log(str)
