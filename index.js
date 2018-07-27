// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = {};
  for (var i=0; i < musicians.length; i++) {
    var add = musicians[i]+" plays "+ instruments[i];
    newArray.push(`${add}`);
  }
  return newArray;
}

function johnLennonFacts(factsArray) {
  var newArray = {};
  var index = 0;
  while (index < factsArray.length) {
    newArray.push(`${factsArray[index]}`+"!!!");
    index++;
  }
  return newArray;
}