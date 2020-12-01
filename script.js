function bug3()
{
  //HINT: use the debugger to see the value of 'firstHalf' and 'secondHalf'
  var str = "Debugging is hard but is fun!"
  var firstHalf = str.substring(0, 13);
  var secondHalf = str.substring(25,28);
  var finalStr = firstHalf + secondHalf;
  console.log(finalStr);
  //should print: "Debugging is fun"
}