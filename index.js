// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = {};
  for (var i=0; i < musicians.length(); i++) {
    var add = musicians[i]+" plays "+ instruments[i];
    newArray.push(add);
  }
  return newArray;
}