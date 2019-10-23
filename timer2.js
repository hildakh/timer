const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('beep');
  } 
  else if(key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds` + '\n');
    setTimeout(() => {
      process.stdout.write('beep' + '\n');
    }, key * 1000);
    
  } 
  else if(key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!" + '\n');
    process.exit()
  }
});






