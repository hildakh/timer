var args = process.argv.slice(2);
// console.log(args);
const timer = function(inputArray, index = 0) {
  // console.log(inputArray);
  if(inputArray.length < 1 || inputArray.length === index) {
    return;
  }
  if(typeof(Number(inputArray[index])) === 'number') {
    const duration = inputArray[index];
    
    setTimeout(() => {
        console.log(`It's time!`);
      }, duration * 1000);

    timer(inputArray, index+1);
  }


}


timer(args);  

///needs completion