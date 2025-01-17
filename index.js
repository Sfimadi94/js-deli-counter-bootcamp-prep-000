var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var status = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return status
    }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
   var lineNumber = [];
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
   }
   for (var i = 0; i < katzDeliLine.length; i++) {
     lineNumber.push(` ${i+1}. ${katzDeliLine[i]}`);
 	}
   return "The line is currently:" + lineNumber;

  }