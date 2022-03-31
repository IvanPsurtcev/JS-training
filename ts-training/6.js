function countBs(str) {
  let i, counter = 0;
  for(i = 0; i < str.length; i++) {
    if(str.charAt(i)=='B') counter++;
  }
  return counter;
}

function countChar(str,char) {
  let i, counter = 0;
  for(i=0; i < str.length; i++ ) {
    if(str.charAt(i)==char) 
      counter++;
  }
  return counter;
}
console.log(countBs('ABBABBABB'));
console.log(countChar('ABBABA','A'));
